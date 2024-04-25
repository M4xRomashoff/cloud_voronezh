const db = require("../modelsVoronezh");
const {dbNames} = require("../config/complex.config")
const {Op} = require("sequelize");
const {log, names} = require("debug");
const Averages = db.avgs;
const Alarms = db.alarms;
const {T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,
      T11, T12, T13, T14, T15, T16, T17, T18, T19, T20,
      T21, T22, T23, T24, T25, T26, T27, T28,
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
    { id: '15', table: T15},
    { id: '16', table: T16},
    { id: '17', table: T17},
    { id: '18', table: T18},
    { id: '19', table: T19},
    { id: '20', table: T20},
    { id: '21', table: T21},
    { id: '22', table: T22},
    { id: '23', table: T23},
    { id: '24', table: T24},
    { id: '25', table: T25},
    { id: '26', table: T26},
    { id: '27', table: T27},
    { id: '28', table: T28},
]


function getNamesAndValues(val){
    let names = '('
    let values = '('

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

function convertLight(liHrs){
    const arr = liHrs.split(":");
    const n1 = parseFloat(arr[0]);
    const n2 = parseFloat(arr[1])/60; // convert minutes to decimals
    return n1+ n2;
}

function prepareLight(item){

    let lData = {}
    // const l1 = ((convertLight(item.c1a) + convertLight(item.c2c))/2).toFixed(2);
    // const l2 = ((convertLight(item.c1b) + convertLight(item.c2d))/2).toFixed(2);

    const l1 = convertLight(item.c1a);
    const l2 = convertLight(item.c1b);
    let h50 ='';
    let h100 = '';

    if (l1 > l2) {
        h100 = item.c1b;
        h50 = item.c1a;
    }
    else {
        h100 = item.c1a;
        h50 = item.c1b;
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
            const value = parseFloat((item.calc_t).replace(',','.'));
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
            const value = parseFloat((item.calc_t).replace(',','.'));
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
        const value = parseFloat((item.calc_t).replace(',','.'));
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

                const blockId = block.block.slice(15);
                const blockData = await oneBlockOneDayLocal('1', blockId);
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


async function createAvgEmpty() {

    let date = new Date();
    date.setHours(date.getHours()-12);

    for (let i = 1; i < 29; i++) {

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
                //
                // console.log('item------------',item);
                // console.log('item------------',item[0]?.values[0]);

                const value = item[0]?.values[0]?.value;
                const blockId = (item[0]?.values[0]?.column).slice(4);


                try {
                    if (blockId && value) {
                        Averages.findOne({
                            where: {[Op.and]: [{date: date}, {blockId: blockId}]}})
                            .then(async average => {

                                //
                                // console.log('CO date', date);
                                // console.log('value',value)
                                //

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
                                const arr = value.column.slice(6).split('_');
                                const blockId = arr[0];
                                const type = arr[1]

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
                                const arr = value.column.slice(5).split('_');
                                const blockId = arr[0];
                                const type = arr[1]

                                let one  = comboData.find((combo) => combo.blockId === blockId )
                                if (one) one[type] = val;
                                else  {
                                    one = {blockId:blockId, c1a: "", c1b: "", c2c: "", c2d: ""};
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

async function oneBlockOneDayLocal(complex, block){


    return new Promise((Resolve, Reject) => {
        const [commonName, blockName] = dbNames.find((item) => item.complex === parseInt(complex) && item.block === parseInt(block))?.names;

        let  startDate = new Date();
        startDate.setDate(startDate.getDate()-2);
        const endDate = new Date();
        endDate.setDate(endDate.getDate()-1);

        if (commonName && blockName) {

            try {

                const StartDate = '"' + startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate() + ' 21:00:00"';
                const EndDate = '"' + endDate.getFullYear() + '-' + (endDate.getMonth() + 1) + '-' + endDate.getDate() + ' 20:59:59"';

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



        let  startDate = new Date(date);
        if (startDate.getHours() <= 3) startDate.setDate(startDate.getDate()-2);  // подгон под Москву
        else startDate.setDate(startDate.getDate()-1);
        const endDate = new Date(date);
        if (startDate.getHours() <=3) endDate.setDate(endDate.getDate()-1);
        else endDate.setDate(endDate.getDate());

        if (commonName && blockName) {

            try {

                const StartDate = '"' + startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate() + ' 21:00:00"';
                const EndDate = '"' + endDate.getFullYear() + '-' + (endDate.getMonth() + 1) + '-' + endDate.getDate() + ' 20:59:59"';

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

            // Averages.findAll({ where:
            //                         {[Op.and]:
            //                                 [{date: {
            //                                         $between: [startDate, endDate]
            //                                     }},
            //
            //                                     {blockId: block}
            //                                 ]
            //                         }
            //                 })
            //     .then(result => {
            //         console.log('result',result?.length);
            //         Resolve(result)})
            //     .catch(err => {console.log('MYSQL err', err);Resolve(err)
            //     })
        })
    } return 0;
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
    processDataAlarms:processDataAlarms,
    getAlarms: getAlarms,
    oneBlockOneDay:oneBlockOneDay,
    allBlocksLastData:allBlocksLastData,
    processDataSunRise:processDataSunRise,
    processDataCO:processDataCO,
    processDataWater:processDataWater,
    processDataArtLight:processDataArtLight,
    processDataLight:processDataLight,
    createAvgEmpty:createAvgEmpty,
    oneBlockOneDayAvg: oneBlockOneDayAvg,
    oneBlockOneMonthAvg:oneBlockOneMonthAvg,
    file_to_db:file_to_db,
};
