const db = require("../modelsVoronezh");
const {
    dbNames,
    dbNamesWatering,
    COMPLEX,
    AVG_NAMES,
    COMPLEX_FOR_FILE,
    MONTH
} = require("../config/complex.config")
const {Op} = require("sequelize");
const {log, names} = require("debug");
const Averages = db.avgs;
const Alarms = db.alarms;
const AlarmsList = db.alarms_list;
const {
    T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,
    T11, T12, T13, T14,
    commonAGRO_12, commonAGRO_345,
    M4,
    bobrov3_M432_water, bobrov4_M432_water, bobrov5_M432_water,
    bobrov3_M203_light, bobrov4_M203_light, bobrov5_M203_light,
    bobrov3_6_co2, bobrov3_7_co2, bobrov3_8_co2, bobrov3_9_co2,
    bobrov4_10_co2, bobrov4_11_co2, bobrov4_12_co2,
    bobrov5_13_co2, bobrov5_14_co2,
    bobrov3_light_str_6, bobrov3_light_str_7, bobrov3_light_str_8, bobrov3_light_str_9,
    bobrov4_light_str_10, bobrov4_light_str_11, bobrov4_light_str_12,
    bobrov5_light_str_13, bobrov5_light_str_14,


} = require('../config/constArrays');
const fs = require("fs");
const {parse} = require("csv-parse");
const blockNames = [
    { id: '1',  table: T1},
    { id: '2',  table: T2},
    { id: '3',  table: T3},
    { id: '4',  table: T4},
    { id: '5',  table: T5},
    { id: '6',  table: T6},
    { id: '7',  table: T7},
    { id: '8',  table: T8},
    { id: '9',  table: T9},
    { id: '10', table: T10},
    { id: '11', table: T11},
    { id: '12', table: T12},
    { id: '13', table: T13},
    { id: '14', table: T14},

]
const pathToDownloads ='/home/romashov/es/public/downloads/';


function getNamesAndValues(val){
    let  date = new Date();
    let sqlDate = '"' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' '+ date.getHours()+':'+date.getMinutes()+'"';
    let names = '(createdAt, '
    let values = '('+ sqlDate+', '

    if (val && val.length >0){
        val.map((item)=>{
            names += item.column +', ';
            values += "'"+item.value +"', ";
        })
        names = names.slice(0,-2) +')';
        values = values.slice(0,-2)+')';
    }

    return [names, values];
}

function getMskStartEndStrings(date){
    let  nDate = new Date(date);
    const Start =  '"' + nDate.getFullYear() + '-' + (nDate.getMonth() + 1) + '-' + nDate.getDate() + ' 00:00:00"';
    const End   =  '"' + nDate.getFullYear() + '-' + (nDate.getMonth() + 1) + '-' + nDate.getDate() + ' 23:59:59"';
    return [Start, End];
}

function convertLight(liHrs){

    // console.log('liHrs',liHrs);

    if (liHrs){
        const arr = liHrs.split(":");
        const n1 = parseFloat(arr[0]);
        const n2 = parseFloat(arr[1])/60; // convert minutes to decimals
        return n1+ n2;
    }
    else  return 0;
}

function prepareLight(item){  //  only for contur 11   add 2-6 and average it

    let lData = {}
    // const l1 = ((convertLight(item.c1a) + convertLight(item.c2c))/2).toFixed(2);
    // const l2 = ((convertLight(item.c1b) + convertLight(item.c2d))/2).toFixed(2);

    const l1 = convertLight(item.cont1a);
    const l2 = convertLight(item.cont1b);
    let h50 ='';
    let h100 = '';

    if (l1 > l2) {
        h100 = item.cont1b;
        h50 = item.cont1a;
    }
    else {
        h100 = item.cont1a;
        h50 = item.cont1b;
    }

    if (l1 > l2){
        const l50  = (l1-l2) * 23.5;
        const l100 = (l1 - (l1-l2)) * 47;
        lData['art_light_50'] = h50;
        lData['art_light_100'] = h100;
        lData['art_light_calc'] = (l50+l100).toFixed(2);
        lData['blockId'] = item.blockId;

    }
    else {
        const l50  = (l2-l1) * 23.5;
        const l100 = (l2 - (l2-l1)) * 47;
        lData['art_light_50'] = h50;
        lData['art_light_100'] = h100;
        lData['art_light_calc'] = (l50+l100).toFixed(2);
        lData['blockId'] = item.blockId;
    }

    return lData;
}

async function processArtLight(data) {


    console.log(' processArtLight(data)',data);

    try {
        let pData = [];

        data.map((block) => {

            let cols = [];
            let vals = [];
            const name = block?.name;

            block.values.map((values) => {
                cols.push(values?.column);
                vals.push(values?.value);
            })
            pData.push({
                name: name,
                columns: cols,
                values: vals,
            })
        })

        let nData = [];

        pData.map((block) => {

            let times = [];
            times.push({name: block.values[0], start: block.values[6], stop: block.values[12]});
            times.push({name: block.values[1], start: block.values[7], stop: block.values[13]});
            times.push({name: block.values[2], start: block.values[8], stop: block.values[14]});
            times.push({name: block.values[3], start: block.values[9], stop: block.values[15]});
            times.push({name: block.values[4], start: block.values[10], stop: block.values[16]});
            times.push({name: block.values[5], start: block.values[11], stop: block.values[17]});

            nData.push({name: block.name, values: times})
        })

        const times = await getStartAndEndTimes(nData);

        populateAverages(times);

    } catch (e) {
        console.log('processArtLight TRY e', e)
    }
}

function getCo2(data){

    if (data && data.length > 0){
        let counter = 0;
        let total = 0;

        data.map((item)=>{
            let value = parseInt(item.co2);
            if (!value) value = parseInt(item.co2a);

            if (value) {
                counter += 1;
                total += value;
            }
        })

        return (total/counter).toFixed(2);
    }
    else return '---';

}

function getOutTotalLight(data){

    let max = -1000;
    data.map((item)=>{
        const value = parseInt((item.out_sum_light1).replace(',','.'));
        const time = new Date(item.createdAt).getHours();
        if (value &&  time > 8) {
            if (value > max) max = value;
        }
    })

    if (max !== -1000)   return max.toFixed(2);
    else return '---';
}

function getAvgLight(data){
    let counter = 0;
    let total = 0;

    data.map((item)=>{
        const value = parseInt((item.light).replace(',','.'));
        if (value) {
            counter += 1;
            total += value;
        }
    })

    if (counter > 0)  return (total/counter).toFixed(2);
    else return '---';
}

function getMaxLight(data){
    let max = -1000;
    data.map((item)=>{
        const value = parseInt((item.light).replace(',','.'));
        if (value) {
           if (value > max) max = value;
        }
    })

    if (max !== -1000)   return max.toFixed(2);
    else return '---';
}

function getMaxWind(data){
    let max = -1000;
    data.map((item)=>{
        const value = parseFloat((item.wind_speed).replace(',','.'));
        if (value) {
            if (value > max) max = value;
        }
    })

    if (max !== -1000)   return max.toFixed(2);
    else return '---';
}

function getOutTMin(data){
    let min = 1000;
    data.map((item)=>{
        const value = parseFloat((item.out_t).replace(',','.'));
        if (value) {
            if (value < min) min = value;
        }
    })
    if (min !== 1000)  return min.toFixed(2);
    else return '---';

}

function getOutTMax(data){
    let max = -1000;
    data.map((item)=>{
        const value = parseFloat((item.out_t).replace(',','.'));
        if (value) {
            if (value > max) max = value;
        }
    })

    if (max !== -1000)   return max.toFixed(2);
    else return '---';
}

function convertDateTimeToFloatTime(date){
    return date.getHours() + (date.getMinutes()/60);
}

function getOutTMaxDay(data, start, end){
    let max_day = -1000;
    data.map((item)=>{
        const time = convertDateTimeToFloatTime(new Date(item.createdAt));

        if (time > start && time < end){
            const value = parseFloat((item.out_t).replace(',','.'));
            if (value > max_day) max_day = value;
        }
    })
    if (max_day !== -1000)   return max_day.toFixed(2);
    else return '---';

}

function getOutTMaxNight(data, start, end){
    let max_night = -1000;
    data.map((item)=>{
        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time < start || time > end){
            const value = parseFloat((item.out_t).replace(',','.'));
            if (value > max_night) max_night = value;
        }
    })

    if (max_night !== -1000)  return max_night.toFixed(2);
    else return '---';
}

function getOutTAvgDay(data, start, end){
    let counter = 0;
    let total = 0;
    data.map((item)=>{
        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time > start && time < end){
            const value = parseFloat((item.out_t).replace(',','.'));
            counter +=1;
            total += value;
        }
    })


    if (counter > 0)  return (total/counter).toFixed(2);
    else return '---';

}

function getOutTAvgNight(data, start, end){
    let counter = 0;
    let total = 0;
    data.map((item)=>{
        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time < start || time > end){
            const value = parseFloat((item.out_t).replace(',','.'));
            counter +=1;
            total += value;
        }
    })

    if (counter > 0)  return (total/counter).toFixed(2);
    else return '---';
}

function getOutTAvg24(data){
    let counter = 0;
    let total = 0;
    data.map((item)=>{
            const value = parseFloat((item.out_t).replace(',','.'));
            counter +=1;
            total += value;
    })

    if (counter > 0)  return (total/counter).toFixed(2);
    else return '---';
}

function getPlanTDay(data, start, end){
    let counter = 0;
    let total = 0;
    data.map((item)=>{
        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time > start && time < end){

            const columnsNames = Object.keys(item);
            const planTempName = columnsNames.find(name => name.slice(-3) === '_tv')

            const value = parseFloat((item[planTempName]).replace(',','.'));
            counter +=1;
            total += value;
        }
    })

    if (counter > 0)  return (total/counter).toFixed(2);
    else return '---';
}

function getPlanTNight(data, start, end){
    let counter = 0;
    let total = 0;
    data.map((item)=>{
        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time < start || time > end){

            const columnsNames = Object.keys(item);
            const planTempName = columnsNames.find(name => name.slice(-3) === '_tv')

            const value = parseFloat((item[planTempName]).replace(',','.'));
            counter +=1;
            total += value;
        }
    })
    if (counter > 0)  return (total/counter).toFixed(2);
    else return '---';
}

function getPlanT24(data){
    let counter = 0;
    let total = 0;
    data.map((item)=>{

        const columnsNames = Object.keys(item);
        const planTempName = columnsNames.find(name => name.slice(-3) === '_tv')

        const value = parseFloat((item[planTempName]).replace(',','.'));
        counter +=1;
        total += value;
    })

    if (counter > 0)  return (total/counter).toFixed(2);
    else return '---';
}

function getCurrTMin(data, blockId){

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('температура'));

    let min = 1000;
    data.map((item)=>{
        let result = 0;
        let counter = 0;
        names.map((one) =>{
            counter +=1;
            const r = parseFloat((item[one.column])?.replace(',','.'));
            if (r) result  += r;
        })

        const value = result/counter;

        if (value) {
            if (value < min) min = value;
        }
    })

    if (min !== 1000)  return min.toFixed(2);
    else return '---';

}

function getCurrTMax(data, blockId){

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('температура'));

    let max = -1000;
    data.map((item)=>{
        let result = 0;
        let counter = 0;
        names.map((one) =>{
            counter +=1;
            const r = parseFloat((item[one.column])?.replace(',','.'));
            if (r) result  += r;
        })

        const value = result/counter;

        if (value) {
            if (value > max) max = value;
        }
    })
    if (max !== -1000)   return max.toFixed(2);
    else return '---';
}

function getCurrTAvg24(data, blockId){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('температура'));


    data.map((item)=>{
        let result = 0;
        let counter = 0;
        names.map((one) =>{
            counter +=1;
            const r = parseFloat((item[one.column])?.replace(',','.'));
            if (r) result  += r;
        })

        const value = result/counter;

        if (value) {
            counterG +=1;
            total += value;
        }
    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getCurrTAvgDay(data, blockId, start, end){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('температура'));

    let max = 0;
    data.map((item)=>{

        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time > start && time < end){
            let result = 0;
            let counter = 0;
            names.map((one) =>{
                counter +=1;
                const r = parseFloat((item[one.column])?.replace(',','.'));
                if (r) result  += r;
            })

            const value = result/counter;

            if (value) {
                counterG +=1;
                total += value;
            }
        }


    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getCurrTAvgNight(data, blockId, start, end){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('температура'));

    let max = 0;
    data.map((item)=>{

        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time < start || time > end){
            let result = 0;
            let counter = 0;
            names.map((one) =>{
                counter +=1;
                const r = parseFloat((item[one.column])?.replace(',','.'));
                if (r) result  += r;
            })

            const value = result/counter;

            if (value) {
                counterG +=1;
                total += value;
            }
        }


    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getHumMax(data, blockId){

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('ОВ'));

    let max = -1000;
    data.map((item)=>{
        let result = 0;
        let counter = 0;
        names.map((one) =>{
            counter +=1;
            const r = parseFloat((item[one.column])?.replace(',','.'));
            if (r) result  += r;
        })

        const value = result/counter;

        if (value) {
            if (value > max) max = value;
        }
    })

    if (max !== -1000)   return max.toFixed(2);
    else return '---';
}

function getHumAvg24(data, blockId){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('ОВ'));


    data.map((item)=>{
        let result = 0;
        let counter = 0;
        names.map((one) =>{
            counter +=1;
            const r = parseFloat((item[one.column])?.replace(',','.'));
            if (r) result  += r;
        })

        const value = result/counter;

        if (value) {
            counterG +=1;
            total += value;
        }
    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getHumAvgDay(data, blockId, start, end){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('ОВ'));

    let max = 0;
    data.map((item)=>{

        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time > start && time < end){
            let result = 0;
            let counter = 0;
            names.map((one) =>{
                counter +=1;
                const r = parseFloat((item[one.column])?.replace(',','.'));
                if (r) result  += r;
            })

            const value = result/counter;

            if (value) {
                counterG +=1;
                total += value;
            }
        }


    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getHumAvgNight(data, blockId, start, end){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('ОВ'));

    let max = 0;
    data.map((item)=>{

        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time < start || time > end){
            let result = 0;
            let counter = 0;
            names.map((one) =>{
                counter +=1;
                const r = parseFloat((item[one.column])?.replace(',','.'));
                if (r) result  += r;
            })

            const value = result/counter;

            if (value) {
                counterG +=1;
                total += value;
            }
        }


    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getHumDef24(data, blockId){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('ДВ'));


    data.map((item)=>{
        let result = 0;
        let counter = 0;
        names.map((one) =>{
            counter +=1;
            const r = parseFloat((item[one.column])?.replace(',','.'));
            if (r) result  += r;
        })

        const value = result/counter;

        if (value) {
            counterG +=1;
            total += value;
        }
    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getHumDefNight(data, blockId, start, end){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('ДВ'));

    let max = 0;
    data.map((item)=>{

        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time < start || time > end){
            let result = 0;
            let counter = 0;
            names.map((one) =>{
                counter +=1;
                const r = parseFloat((item[one.column])?.replace(',','.'));
                if (r) result  += r;
            })

            const value = result/counter;

            if (value) {
                counterG +=1;
                total += value;
            }
        }


    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getHumDefDay(data, blockId, start, end){
    let counterG = 0;
    let total = 0;

    const table = blockNames.find((item)=> item.id === blockId);
    const values = table.table;
    const names = values.filter((item) => item.name.includes('ДВ'));

    let max = 0;
    data.map((item)=>{

        const time = convertDateTimeToFloatTime(new Date(item.createdAt));
        if (time > start && time < end){
            let result = 0;
            let counter = 0;
            names.map((one) =>{
                counter +=1;
                const r = parseFloat((item[one.column])?.replace(',','.'));
                if (r) result  += r;
            })

            const value = result/counter;

            if (value) {
                counterG +=1;
                total += value;
            }
        }


    })
    if (counterG === 0) return '---';
    else
        return (total/counterG).toFixed(2);
}

function getSunrise(){

    let date = new Date();
        date.setDate(date.getDate()-1);

    return new Promise((Resolve) =>{
        Averages.findOne({where:{date:date}})
            .then(result =>Resolve(result))
            .catch(err => Resolve(err));
    })

}

async function getStartAndEndTimes(data) {
    let times = [];
    const resultSunsRise = await getSunrise();

    const sunrise = convertTimeToFloat(resultSunsRise?.dataValues?.sunrise);
    const sunset =  convertTimeToFloat(resultSunsRise?.dataValues?.sunset);

    data.map((block) => {
        let startTime = findStart(block.values);
        let endTime   = findEnd(block.values);

        if (startTime === 24 && endTime === 0){
            startTime = sunrise; endTime = sunset;
        } else {
            if (startTime) {
                if (startTime > sunrise) startTime = sunrise;
            }
            else startTime = sunrise;

            if (endTime) {
                if (endTime < sunset) endTime = sunset;
            }
            else endTime = sunset;
        }
        times.push({block: block.name, start: startTime, stop: endTime})
    })
    return times;
}

function findStart(values){
    let start = 24;

    values.map((item) =>{
        if (item.name !== 'ВЫКЛ'){
            const startTime = convertTimeToFloat(item.start);
            if (start > startTime) start = startTime;
        }
    })

    return start;
}

function findEnd(values){
    let end = 0;

    values.map((item) =>{
        if (item.name !== 'ВЫКЛ'){
            const endTime = convertTimeToFloat(item.stop);
            if (end < endTime) end = endTime;
        }
    })

    return end;
}

function convertTimeToFloat(value){
    if (typeof value === 'string'){

        const arr = value.split(':');
        const hr = parseFloat(arr[0]);
        const minutes = parseFloat(arr[1])/60;

        return hr+minutes;
    }
    else return 0;

}

function getTotalLight(out_light, avgArtLight){
    let totalLight =0;
    let out = parseFloat(out_light);
    if (!out) out =0;
    let art = parseFloat(avgArtLight);
    if (!art) art =0;
    totalLight= out + art;


    return totalLight;
}

function populateAverages(times){
    try{

        let date = new Date();
            date.setDate(date.getDate()-1);

        if (times && times.length > 0) {
            times.map(async (block) => {

                // console.log('block',block);

                const blockId = block.block.split('_')[1];
                const blockData = await oneBlockOneDayLocal(blockId);
                const [commonName, blockName] = Object.keys(blockData);

                // console.log('blockData first',blockData[blockName][0]);
                // console.log('blockData last ',blockData[blockName][blockData[blockName].length-1]);

                const co2_ppm = getCo2(blockData[blockName]);
                const out_light = getOutTotalLight(blockData[commonName]);
                const avg_light = getAvgLight(blockData[commonName]);
                const max_light = getMaxLight(blockData[commonName]);
                const max_wind = getMaxWind(blockData[commonName]);

                const out_t_min = getOutTMin(blockData[commonName]);
                const out_t_24_max = getOutTMax(blockData[commonName]);
                const out_t_day_max = getOutTMaxDay(blockData[commonName], block.start, block.stop);
                const out_t_night_max = getOutTMaxNight(blockData[commonName], block.start, block.stop);
                const out_t_day_avg = getOutTAvgDay(blockData[commonName], block.start, block.stop);
                const out_t_night_avg = getOutTAvgNight(blockData[commonName], block.start, block.stop);
                const out_t_24_avg = getOutTAvg24(blockData[commonName]);

                const plan_t_day = getPlanTDay(blockData[blockName], block.start, block.stop);
                const plan_t_night = getPlanTNight(blockData[blockName], block.start, block.stop);
                const plan_t_24 = getPlanT24(blockData[blockName]);

                const curr_t_min = getCurrTMin(blockData[blockName], blockId);
                const curr_t_max = getCurrTMax(blockData[blockName], blockId);
                const curr_t_avg_24 = getCurrTAvg24(blockData[blockName], blockId);
                const curr_t_avg_day = getCurrTAvgDay(blockData[blockName], blockId, block.start, block.stop);
                const curr_t_avg_night = getCurrTAvgNight(blockData[blockName], blockId, block.start, block.stop);

                const hum_max = getHumMax(blockData[blockName], blockId);
                const hum_avg_24 = getHumAvg24(blockData[blockName], blockId);
                const hum_avg_day = getHumAvgDay(blockData[blockName], blockId, block.start, block.stop);
                const hum_avg_night = getHumAvgNight(blockData[blockName], blockId, block.start, block.stop);

                const hum_def_24 = getHumDef24(blockData[blockName], blockId);
                const hum_def_night = getHumDefNight(blockData[blockName], blockId, block.start, block.stop);
                const hum_def_day = getHumDefDay(blockData[blockName], blockId, block.start, block.stop);


                Averages.findOne({
                    where: {[Op.and]: [{date: date}, {blockId: blockId}]}
                })
                    .then(async average => {
                        if (average) {

                            average.co2_ppm = co2_ppm;
                            average.out_light = out_light;
                            average.total_light = getTotalLight(out_light,average.art_light_calc);
                            average.avg_light = avg_light;
                            average.max_light = max_light;
                            average.max_wind = max_wind;
                            average.out_t_min = out_t_min;
                            average.out_t_24_max = out_t_24_max;
                            average.out_t_day_max = out_t_day_max;
                            average.out_t_night_max = out_t_night_max;
                            average.out_t_day_avg = out_t_day_avg;
                            average.out_t_night_avg = out_t_night_avg;
                            average.out_t_24_avg = out_t_24_avg;
                            average.plan_t_day = plan_t_day;
                            average.plan_t_night = plan_t_night;
                            average.plan_t_24 = plan_t_24;
                            average.curr_t_min = curr_t_min;
                            average.curr_t_max = curr_t_max;
                            average.curr_t_avg_24 = curr_t_avg_24;
                            average.curr_t_avg_day = curr_t_avg_day;
                            average.curr_t_avg_night = curr_t_avg_night;
                            average.hum_max = hum_max;
                            average.hum_avg_24 = hum_avg_24;
                            average.hum_avg_day = hum_avg_day;
                            average.hum_avg_night = hum_avg_night;
                            average.hum_def_24 = hum_def_24;
                            average.hum_def_night = hum_def_night;
                            average.hum_def_day = hum_def_day;

                            await average.save();
                        }

                    })
                    .catch(err => {
                        console.log(' error - populateAverages ---', err.message);

                    })
            })
        }
        else {
            console.log('times',times);
        }
    }catch (e) {
        console.log('populateAverages try', e);
    }
}

//-----------------------------------------------------------------------------------GET DATA---------------------------


async function oneBlockOneDayM4(complex, block, date){

    let tableName = 'm4';

    const [StartDate, EndDate] = getMskStartEndStrings(date);

    return new Promise((Resolve) => {
        try {

            const results1 = db.sequelize.query(
                `SELECT * FROM ${tableName} WHERE createdAt >=${StartDate} AND createdAt <=${EndDate};`)
                .then(res1 => {
                    Resolve(res1[0]) ;
                })
                .catch(err => {
                    console.log('MYSQL err', err);
                    Resolve([])
                })

        } catch (catchError) {
            console.log('CATCH ERROR', catchError);
            Resolve([])
        }
    })
}

function blockLastData(tableName, blockId) {

    return new Promise((Resolve, Reject) => {
        try{
            const results1 = db.sequelize.query(
                `SELECT * FROM ${tableName} ORDER BY id DESC LIMIT 1;`)
                .then(result => {

                    Resolve({data: result[0][0], blockId: blockId})
                })
                .catch(err => { console.log('MYSQL err', err);
                    Reject(err)
                })

        }
        catch (e) {
            Reject(e)
        }
    })
}

function lastDataM4(complex, blockId) {

    let tableName = 'm4';

    return new Promise((Resolve, Reject) => {
        try{
            const results1 = db.sequelize.query(
                `SELECT * FROM ${tableName} ORDER BY id DESC LIMIT 1;`)
                .then(result => {

                    Resolve({data: result[0][0], blockId: blockId})
                })
                .catch(err => { console.log('MYSQL err', err);
                    Reject(err)
                })

        }
        catch (e) {
            Reject(e)
        }
    })
}



async function oneBlockOneDayLocal(block){


    // console.log('oneBlockOneDayLocal   complex, block',block);

    return new Promise((Resolve, Reject) => {
        const [commonName, blockName] = dbNames.find((item) => item.block === parseInt(block))?.names;

        if (commonName && blockName) {

            try {

                let yesterday = new Date();
                yesterday.setDate(yesterday.getDate()-1);
                const [StartDate, EndDate] = getMskStartEndStrings(yesterday );

                const results1 = db.sequelize.query(
                    `SELECT * FROM ${commonName} WHERE createdAt >=${StartDate} AND createdAt <=${EndDate};`)
                    .then(res1 => {
                        const results2 = db.sequelize.query(
                            `SELECT * FROM ${blockName} WHERE createdAt >=${StartDate} AND createdAt <=${EndDate};`)
                            .then(res2 => {
                                Resolve({[commonName]: res1[0], [blockName]: res2[0]})
                            })
                            .catch(err => {
                                console.log('MYSQL err', err);
                                Resolve(err)
                            })
                    })
                    .catch(err => {
                        console.log('MYSQL err', err);
                        Resolve(err)
                    })

            } catch (catchError) {
                console.log('CATCH ERROR', catchError);
                Resolve(catchError)
            }

        } else Resolve('ошибка commonName && blockName');
    })
}

async function oneBlockOneDay(complex, block, date){


    return new Promise((Resolve, Reject) => {

        const [commonName, blockName] = dbNames?.find((item) => item.complex === parseInt(complex) && item.block === parseInt(block))?.names;


        if (commonName && blockName) {

            try {
                const [StartDate, EndDate] = getMskStartEndStrings(date);

                const results1 = db.sequelize.query(
                    `SELECT * FROM ${commonName} WHERE createdAt >=${StartDate} AND createdAt <=${EndDate};`)
                    .then(res1 => {
                        const results2 = db.sequelize.query(
                            `SELECT * FROM ${blockName} WHERE createdAt >=${StartDate} AND createdAt <=${EndDate};`)
                            .then(res2 => {

                                // console.log('res1[0]-----------------',res1[0]);

                                Resolve({[commonName]: res1[0], [blockName]: res2[0]})
                            })
                            .catch(err => {
                                console.log('MYSQL err', err);
                                Resolve(err)
                            })
                    })
                    .catch(err => {
                        console.log('MYSQL err', err);
                        Resolve(err)
                    })

            } catch (catchError) {
                console.log('CATCH ERROR', catchError);
                Resolve(catchError)
            }

        } else Resolve('ошибка commonName && blockName');
    })
}

async function getAlarms(complexId){
    return new Promise((Resolve, Reject) => {
        Alarms.findAll({where:{complexId: complexId}})
            .then(result => Resolve(result))
            .catch(error =>{console.log(error); Reject(error)})
    })
}

async function alarmsList(){
    return new Promise((Resolve, Reject) => {
        AlarmsList.findAll()
            .then(result => Resolve(result))
            .catch(error =>{console.log(error); Reject(error)})
    })
}


async function allBlocksLastData(complexId){


    return new Promise((Resolve, Reject) => {
        let blockTables = [];
        const complexBlocks =  dbNames?.filter((item) => item.complex === parseInt(complexId));

        if (complexBlocks) {
            try {
                complexBlocks.map((item) => {
                    blockTables.push(blockLastData(item.names[1], item.block))
                })
                Promise.all(blockTables)
                    .then((values) => {
                        Resolve(values);
                    })
                    .catch((e) => {console.log('fetchClimate AVERAGE 1 ERROR', e); Reject(e) })

            } catch (catchError) {
                console.log('CATCH ERROR', catchError);
                Reject(catchError)
            }
        }

    })
}

async function oneBlockOneDayAvg(complex, block, date) {
    if (complex && block && date) {

        return new Promise((Resolve, Reject) => {
            let  dateToGet = new Date(date);
            dateToGet.setDate(dateToGet.getDate());
            Averages.findOne({ where: {[Op.and]: [{date: dateToGet}, {blockId: block}]}})
                .then(result => {Resolve(result)})
                .catch(err => {console.log('MYSQL err', err);Resolve(err)
                })
        })
    } return 0;
}

async function oneBlockOneMonthAvg(complex, block, date){
    if (complex && block && date) {

        return new Promise(async (Resolve, Reject) => {

            const tableName = 'avgs'

            let startDate = new Date(date);
            startDate.setDate(1);
            startDate.setDate(startDate.getDate());

            let endDate = new Date(date);
            endDate.setMonth(endDate.getMonth() + 1);
            endDate.setDate(1);
            endDate.setDate(endDate.getDate()-1);

            const StartDate  = '"'+startDate.getFullYear()+'-'+(startDate.getMonth()+1)+'-'+startDate.getDate()+' 00:00:00"';
            const EndDate    = '"'+endDate.getFullYear()+'-'+(endDate.getMonth()+1)+'-'+endDate.getDate()+' 00:00:00"';

            const [results] = await db.sequelize.query(
                `
            SELECT * FROM ${tableName} WHERE date >=${StartDate} AND date <=${EndDate } AND blockId = ${block};           
            `
            ).catch(err => {
                console.log('MYSQL result', err);
                Resolve(err);
            })

            Resolve(results);

        })
    } return 0;
}

async function complexAvgOneDay(complex, date){
    if (complex && date) {

        return new Promise(async (Resolve, Reject) => {

            const tableName = 'avgs'

            let theDay = new Date(date);

            const StartDate  = '"'+theDay.getFullYear()+'-'+(theDay.getMonth()+1)+'-'+theDay.getDate()+' 00:00:00"';
            const EndDate    = '"'+theDay.getFullYear()+'-'+(theDay.getMonth()+1)+'-'+theDay.getDate()+' 23:59:59"';

            const [results] = await db.sequelize.query(
                `
            SELECT * FROM ${tableName} WHERE date >=${StartDate} AND date <=${EndDate };           
            `
            ).catch(err => {
                console.log('MYSQL result', err);
                Resolve(err);
            })

            Resolve(results);

        })
    } return 0;
}

async function downloadAvgMonthFile(complex, block, date){

    if (complex && block && date) {

        const dataFromDB = await oneBlockOneMonthAvg(complex, block, date);

        const complexName = COMPLEX_FOR_FILE.find(item => item.id === parseInt(complex)).name;
        const fileName = complexName + '_' + block + '_' + MONTH[new Date(date).getMonth()].name + '.csv';

        const result = await createFile(dataFromDB, pathToDownloads+fileName);

        return {complex:complex, block: block, date:date, link: pathToDownloads, fileName: fileName}

    } return {message: 'комплекс или блок или дата не верны'};

}

async function createFile(dataFromDB, fileName){
    return new Promise((Resolve, Reject) => {

        let writeStream = fs.createWriteStream(fileName);
        let newLine = ['дата']

        AVG_NAMES.map((item, index) => {
            newLine.push(item.name)
        })
        writeStream.write(newLine.join(';')+ '\n');

        dataFromDB.map((item, index) => {
            newLine = [item['date']];
            newLine.push(item['out_light']);
            newLine.push(item['art_light_50']);
            newLine.push(item['art_light_100']);
            newLine.push(item['art_light_calc']);
            newLine.push(item['total_light']);
            newLine.push(item['avg_light']?.replace('.',','));
            newLine.push(item['max_light']);
            newLine.push(item['co2_ga']);
            newLine.push(item['co2_ppm']?.replace('.',','));

            newLine.push(item['max_wind']?.replace('.',','));
            newLine.push(item['water_total']);
            newLine.push(parseFloat(item['water_litr']?.replace(',','.')).toFixed(2)?.replace('.',','));

            newLine.push(item['out_t_min']?.replace('.',','));
            newLine.push(item['out_t_day_max']?.replace('.',','));
            newLine.push(item['out_t_night_max']?.replace('.',','));
            newLine.push(item['out_t_24_max']?.replace('.',','));
            newLine.push(item['out_t_day_avg']?.replace('.',','));
            newLine.push(item['out_t_night_avg']?.replace('.',','));
            newLine.push(item['out_t_24_avg']?.replace('.',','));

            newLine.push(item['plan_t_day']?.replace('.',','));
            newLine.push(item['plan_t_night']?.replace('.',','))
            newLine.push(item['plan_t_24']?.replace('.',','));

            newLine.push(item['curr_t_min']?.replace('.',','));
            newLine.push(item['curr_t_max']?.replace('.',','));
            newLine.push(item['curr_t_avg_day']?.replace('.',','));
            newLine.push(item['curr_t_avg_night']?.replace('.',','));
            newLine.push(item['curr_t_avg_24']?.replace('.',','));

            newLine.push(item['hum_max']?.replace('.',','));
            newLine.push(item['hum_avg_day']?.replace('.',','));
            newLine.push(item['hum_avg_night']?.replace('.',','));
            newLine.push(item['hum_avg_24']?.replace('.',','));

            newLine.push(item['hum_def_day']?.replace('.',','));
            newLine.push(item['hum_def_night']?.replace('.',','));
            newLine.push(item['hum_def_24']?.replace('.',','));


            writeStream.write(newLine.join(';')+ '\n');
        })


        writeStream.end();
        writeStream.on('finish', () => {
            Resolve('finish write stream, moving along');
        }).on('error', (err) => {
            Resolve(err);
        })
    })
}

async function createFileBlocks(dataFromDB, fileName){
    return new Promise((Resolve, Reject) => {

        let writeStream = fs.createWriteStream(fileName);
        let newLine = ['блок']

        AVG_NAMES.map((item, index) => {
            newLine.push(item.name)
        })
        writeStream.write(newLine.join(';')+ '\n');

        dataFromDB.map((item, index) => {
            newLine = [item['blockId']];
            newLine.push(item['out_light']);
            newLine.push(item['art_light_50']);
            newLine.push(item['art_light_100']);
            newLine.push(item['art_light_calc']);
            newLine.push(item['total_light']);
            newLine.push(item['avg_light']?.replace('.',','));
            newLine.push(item['max_light']);
            newLine.push(item['co2_ga']);
            newLine.push(item['co2_ppm']?.replace('.',','));

            newLine.push(item['max_wind']?.replace('.',','));
            newLine.push(item['water_total']);
            newLine.push(parseFloat(item['water_litr']?.replace(',','.')).toFixed(2)?.replace('.',','));

            newLine.push(item['out_t_min']?.replace('.',','));
            newLine.push(item['out_t_day_max']?.replace('.',','));
            newLine.push(item['out_t_night_max']?.replace('.',','));
            newLine.push(item['out_t_24_max']?.replace('.',','));
            newLine.push(item['out_t_day_avg']?.replace('.',','));
            newLine.push(item['out_t_night_avg']?.replace('.',','));
            newLine.push(item['out_t_24_avg']?.replace('.',','));

            newLine.push(item['plan_t_day']?.replace('.',','));
            newLine.push(item['plan_t_night']?.replace('.',','))
            newLine.push(item['plan_t_24']?.replace('.',','));

            newLine.push(item['curr_t_min']?.replace('.',','));
            newLine.push(item['curr_t_max']?.replace('.',','));
            newLine.push(item['curr_t_avg_day']?.replace('.',','));
            newLine.push(item['curr_t_avg_night']?.replace('.',','));
            newLine.push(item['curr_t_avg_24']?.replace('.',','));

            newLine.push(item['hum_max']?.replace('.',','));
            newLine.push(item['hum_avg_day']?.replace('.',','));
            newLine.push(item['hum_avg_night']?.replace('.',','));
            newLine.push(item['hum_avg_24']?.replace('.',','));

            newLine.push(item['hum_def_day']?.replace('.',','));
            newLine.push(item['hum_def_night']?.replace('.',','));
            newLine.push(item['hum_def_24']?.replace('.',','));


            writeStream.write(newLine.join(';')+ '\n');
        })


        writeStream.end();
        writeStream.on('finish', () => {
            Resolve('finish write stream, moving along');
        }).on('error', (err) => {
            Resolve(err);
        })
    })
}


async function downloadAvgDayFile(complex, date){

    if (complex && date) {

        const dataFromDB = await complexAvgOneDay(complex, date);

        const complexName = COMPLEX_FOR_FILE.find(item => item.id === parseInt(complex)).name;
        const fileDate =  new Date(date).getDate()+'-'+(new Date(date).getMonth()+1)+'-'+new Date(date).getFullYear();
        const fileName = complexName + '_' + fileDate + '.csv';


        const result = await createFileBlocks(dataFromDB, pathToDownloads+fileName);

        return {complex:complex, date:date, link: pathToDownloads, fileName: fileName}

    }  return {message: 'комплекс или блок или дата не верны'};
}




//-----------------------------------------------------------------------------------PROCESS----------------------------




async function processData(data){

    if (data && data.length){

        data.map((item) => {

            try {
                const tableName = item.name.toLowerCase();
                const [names, values] = getNamesAndValues(item.values);
                if (names && values && names.length>0 && values.length >0) {

                    const results =  db.sequelize.query(
                        `
                    INSERT INTO ${tableName} ${names} VALUES ${values};

                    `)
                        .then(res => {return  res})
                        .catch(err => {console.log('MYSQL err', err); return  err})
                }

            } catch (catchError) { console.log('CATCH ERROR', catchError);  return  catchError}
        })
    }
    else return 'не данных';
}

async function processDataAlarms(data){

    let date = new Date();
    let dDate = new Date(); dDate.setMinutes(dDate.getMinutes()-10);
    let time = date.getMinutes();
    if (time === 0) time = 1;

    if (data.values && data.values.length){

        data.values.map((item) => {

            try {
                 const arr = item.split(' ');
                 const errNumber = parseInt(arr[0]);
                 const agro = arr[2];
                 const message = item;
                 if (errNumber && agro && message){

                     Alarms.findOne({where:{  [Op.and]: [{ complexId: data.complexId },
                                                         { message: message }
                                                        ]
                     }}).then(result =>{
                         if (result){
                             result.state = time;
                             result.save().catch(error => {console.log(error)});
                         }
                         else {
                             Alarms.create({
                                 complexId: data.complexId,
                                 errorNumber: errNumber,
                                 agro: agro,
                                 message: message,
                                 state: 0,

                             }).catch(error => {console.log(error)})
                         }
                     }).catch(error => {console.log(error)})

                 }
            } catch (catchError) { console.log('CATCH ERROR', catchError);  return  catchError}
        })

            Alarms.destroy({where:{ updatedAt:{[Op.lt]: dDate}}
                                   }).then(res => {console.log('res',res)})
                .catch(error => {console.log(error)})    // delete old alarms by time control no updates more, then 10 min


    }
    else return 'не данных';
}

async function processDataM4(data){

    if (data && data.length){

        data.map((item) => {

            try {
                const tableName = item.name.toLowerCase();
                const [names, values] = getNamesAndValues(item.values);
                if (names && values && names.length>0 && values.length >0) {

                    const results =  db.sequelize.query(
                        `
                    INSERT INTO ${tableName} ${names} VALUES ${values};

                    `)
                        .then(res => {return  res})
                        .catch(err => {console.log('MYSQL err', err); return  err})
                }

            } catch (catchError) { console.log('CATCH ERROR', catchError);  return  catchError}
        })
    }
    else return 'не данных';
}

async function createAvgEmpty() {

    let date = new Date();
    date.setHours(date.getHours()-12);

    for (let i = 1; i < 15; i++) {

        Averages.create({
            date: date,
            blockId: i.toString(),

        })
            .catch(err => {
                console.log('createAvgEmpty', err);
            })
    }

}

async function processDataSunRise(data){

    return new Promise((Resolve, Reject) => {
        let date = new Date();
            date.setDate(date.getDate()-1);
        if (data && data.length) {

            let sunrise = '';
            let sunset   ='';
            data.map((item) => {
                if (item[0]?.values[0]?.column === 'sunrise') {
                    sunrise = item[0]?.values[0]?.value;
                  }
                if (item[0]?.values[1]?.column === 'sunset')  {
                    sunset =  item[0]?.values[1]?.value;
                   }
            })


                try {
                    if (sunrise && sunset) {
                        Averages.update({
                                    sunset: sunset,
                                    sunrise: sunrise},
                            {where: {date: date}})
                            .then(res => {return  res})
                            .catch(err => {
                                console.log('err.message',err.message);
                                Resolve(err.message);
                            })
                    }
                } catch (catchError) {
                    console.log('CATCH ERROR', catchError);
                    Reject(catchError)
                }

        } else Reject('не данных');
    })
}

async function processDataCO(data){

    return new Promise((Resolve, Reject) => {
        let date = new Date();
            date.setDate(date.getDate()-1);
        if (data && data.length) {
            data.map((item) => {

                // console.log('item------------',item);
                // console.log('item------------',item[0]?.values[0]);

                const value = item[0]?.values[0]?.value;
                const blockId = (item[0]?.values[0]?.column).split('_')[1];


                try {
                    if (blockId && value) {
                        Averages.findOne({
                            where: {[Op.and]: [{date: date}, {blockId: blockId}]}})
                            .then(async average => {

                                //
                                // console.log('CO date', date);
                                // console.log('value',value)


                                average.co2_ga = value;
                                await average.save()
                                    .then(res => {return  res})
                                    .catch(err => {console.log('MYSQL err', err); return  err});

                            })
                            .then(res => Resolve(res))
                            .catch(err => {
                                console.log('err.message',err.message);
                                Resolve(err.message);
                            })
                    }
                } catch (catchError) {
                    console.log('CATCH ERROR', catchError);
                    Reject(catchError)
                }
            })
        } else Reject('не данных');
    })
}

async function processDataWater(data){

    return new Promise((Resolve, Reject) => {
        let date = new Date();
            date.setDate(date.getDate()-1);
        if (data && data.length) {
            data.map((item) => {
                if (item && item.length > 0 ){
                    item.map((values) => {

                        if (values.values && values.values.length >0){
                            values.values.map((value) =>{
                                const val = value.value;
                                const arr = value.column.split('_');
                                const blockId = arr[1];
                                const type = arr[2]

                                try {

                                    if (blockId && type ) {
                                        Averages.findOne({
                                            where: {[Op.and]: [{date: date}, {blockId: blockId}]}})
                                            .then(async average => {
                                                //
                                                // console.log('blockId', blockId);
                                                // console.log('type',type)
                                                // console.log('val',val)


                                                if (type === '1')  average.water_total = val;
                                                if (type === '2')  average.water_litr = val;
                                                if (type === '3')  average.water_total = (parseFloat(average.water_total.replace(',','.')) + parseFloat(val.replace(',','.'))).toFixed(3);
                                                if (type === '4')  average.water_litr  = (parseFloat(average.water_litr.replace(',','.')) + parseFloat(val.replace(',','.'))).toFixed(3);


                                                await average.save();

                                            })
                                            .then(res => Resolve(res))
                                            .catch(err => {
                                                Resolve(err.message);
                                            })
                                    }

                                } catch (catchError) {
                                    console.log('CATCH ERROR', catchError);
                                    Reject(catchError)
                                }
                            })
                        }
                    })
                }
            })
        } else Reject('не данных');
    })
}

async function processDataLight(data){

    return new Promise((Resolve, Reject) => {
        let comboData = [];
        let date = new Date();
            date.setDate(date.getDate()-1);
        if (data && data.length) {

            data.map((item) => {
                if (item && item.length > 0 ){
                    item.map((values) => {

                        if (values.values && values.values.length >0){
                            values.values.map((value) =>{
                                const val = value.value;
                                const arr = value.column.split('_');
                                const blockId = arr[1];
                                const type = arr[2]

                                let one  = comboData.find((combo) => combo.blockId === blockId )
                                if (one) one[type] = val;
                                else  {
                                    one = {blockId: blockId};
                                    one[type] = val;
                                    comboData.push(one);
                                }

                            })
                        }
                    })
                }
            })



            try {

                if (comboData.length > 0 ) {
                    comboData.map((cData)=>{
                        //
                        // console.log('cData',cData);

                        const item = prepareLight(cData)

                        Averages.findOne({
                            where: {[Op.and]: [{date: date}, {blockId: item.blockId}]}})
                            .then(async average => {

                                // console.log('LIGHT date', date);
                                // console.log('item',item);

                                average.art_light_50 = item.art_light_50;
                                average.art_light_100 = item.art_light_100;
                                average.art_light_calc = item.art_light_calc;

                                await average.save();

                            })
                            .then(res => Resolve(res))
                            .catch(err => {
                                console.log('findOne NOT ----',err.message);
                                Resolve(err.message);
                            })

                    })
                }

            } catch (catchError) {
                console.log('CATCH ERROR', catchError);
                Reject(catchError)
            }


        } else Reject('не данных');
    })
}

async function processDataArtLight(data){

    return new Promise((Resolve, Reject) => {
        let nData = [];

        if (data && data.length) {
            data.map((item) => {
                nData.push(item[0]);
            })

            processArtLight(nData);

            Resolve('ok');
        } else Reject('не данных');

    })
}



function file_to_db(filepath, complexId) {
    return new Promise((Resolve, reject) => {

    updateDb(complexId,filepath)
        .then(res => Resolve(res.message || 'Данные успешно загружены'))
        .catch(err => Resolve(err.message));
    })
}

async function updateDb(complexId,filepath){
    const tableName = 'avgs';

        let values = await getValues(filepath)
            .catch(err => {
                console.log('error ', err)});
        let result = '';

        for (let i=0;i<values.length;i++) {
            try {
                const [results, metadata] = await db.sequelize.query(
                    ` INSERT INTO ${tableName} (
                       date, blockId, 
                       out_light, art_light_50, art_light_100, art_light_calc, total_light,                                               
                       co2_ga, co2_ppm,
                       avg_light, max_light, 
                       max_wind, 
                       water_total, water_litr, 
                       out_t_min, out_t_day_max, out_t_night_max, out_t_24_max, out_t_day_avg, out_t_night_avg, out_t_24_avg, 
                       plan_t_day, plan_t_night, plan_t_24,
                       curr_t_min, curr_t_max, curr_t_avg_day, curr_t_avg_night, curr_t_avg_24,
                       hum_max, hum_avg_day, hum_avg_night, hum_avg_24,
                       hum_def_day, hum_def_night, hum_def_24)
                   
                   VALUES ${values[i].values};                                                   
                        `
                );
                result = results;

            } catch(error) {  console.log('Ошибка, Блиять  updateDb :',error.name);}
        }
        return result;
}

function getValues(filepath){
    return new Promise((Resolve, reject) => {
        let values = [];
        fs.createReadStream(filepath)
            .pipe(parse({delimiter: ";", from_line: 1}))
            .on("data", function (row) {
                let line= "(";
                row.map((item) => line += "'"+item+"',")
                line = line.slice(0,-1);
                line += ")";

                values.push({values:line});
            })
            .on("error",(error)=>{reject(error.message)})
            .on('end', () => {Resolve(values)})

    })
}



module.exports = {

    processData:processData,
    processDataM4:processDataM4,
    processDataCO:processDataCO,
    processDataWater:processDataWater,
    processDataArtLight:processDataArtLight,
    processDataLight:processDataLight,
    // processDataM400:processDataM400,
    // processDataI400:processDataI400,
    // processData401:processData401,
    // processData412:processData412,
    // processData420:processData420,
    // processDataI110:processDataI110,
    // processDataI120:processDataI120,
    // processDataI128:processDataI128,
    // processDataM115:processDataM115,
    // processDataI206:processDataI206,
    // processDataM112:processDataM112,
    // processDataI168:processDataI168,
    // processDataWatering:processDataWatering,
    processDataAlarms:processDataAlarms,
    getAlarms: getAlarms,
    alarmsList: alarmsList,

    lastDataM4:lastDataM4,
    oneBlockOneDayM4:oneBlockOneDayM4,
    oneBlockOneDay:oneBlockOneDay,
    // oneBlockOneDayWatering:oneBlockOneDayWatering,
    // oneBlockOneDayM400:oneBlockOneDayM400,
    // oneBlockOneDayI400:oneBlockOneDayI400,
    // oneBlockOneDay401:oneBlockOneDay401,
    // oneBlockOneDay412:oneBlockOneDay412,
    // oneBlockOneDay420:oneBlockOneDay420,
    // oneBlockOneDayI110:oneBlockOneDayI110,
    // oneBlockOneDayI120:oneBlockOneDayI120,
    // oneBlockOneDayI128:oneBlockOneDayI128,
    // oneBlockOneDayM115:oneBlockOneDayM115,
    // oneBlockOneDayI206:oneBlockOneDayI206,
    // oneBlockOneDayM112:oneBlockOneDayM112,
    // oneBlockOneDayI168:oneBlockOneDayI168,
    oneBlockOneDayAvg: oneBlockOneDayAvg,
    oneBlockOneMonthAvg:oneBlockOneMonthAvg,
    complexAvgOneDay:complexAvgOneDay,
    downloadAvgMonthFile:downloadAvgMonthFile,
    downloadAvgDayFile:downloadAvgDayFile,

    // createReportFile:createReportFile,
    // reportOneBlockOneDayWeather:reportOneBlockOneDayWeather,
    // reportOneBlockOneDayMain:reportOneBlockOneDayMain,

    allBlocksLastData:allBlocksLastData,

    createAvgEmpty:createAvgEmpty,

    file_to_db:file_to_db,
};

