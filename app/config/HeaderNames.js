

const HNames = [
    {},    // empty 0
    {tid:1,
        temperature:[
            {id:'AGRO2:ОТД 1 ИЗМЕР.БОКС', name: 'изм.темп.теплицы'},
            {id:'AGRO2:ОТД 2 ИЗМЕР.БОКС', name: 'изм.темп.теплицы'},
            {id:'AGRO2:ОТД 3 ИЗМЕР.БОКС', name: 'изм.темп.теплицы'},
            {id:'AGRO2:ОТД 4 ИЗМЕР.БОКС', name: 'изм.темп.теплицы'},
            {id:'AGRO2:ОТД 5 ИЗМЕР.БОКС', name: 'изм.темп.теплицы'},
            {id:'AGRO2:ОТД 6 ИЗМЕР.БОКС', name: 'изм.темп.теплицы'},
        ],
        humidity:[
            {id:'AGRO2:Отд 1', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 2', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 3', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 4', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 5', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 6', name: 'изм. ОВ'},
        ],
        temperatureOutside:
            {id:'AGRO:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO2:Отд 1', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO2:Отд 1', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO2:ОТД 1 РЕГ.ВЕНТ.', name: 'рассч.Т вент l'},
        wind:
            {id:'AGRO:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO2:Отд 3', name: 'измер СО2'},

        aLight:[
            {id:'AGRO2:СИСТ.ДОСВЕТ 1 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 1 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 2 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 1 КОНТУР 2', name: 'pеал. статус'},
        ],

        defH:[
            {id:'AGRO2:Отд 1', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 2', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 3', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 4', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 5', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 6', name: 'изм. ДВ'},
        ],

        waterDosage:        {id:'AGRO2:КРАН.ГРУППА 1',        name: 'M432.1N1R4.1V2'},
        waterUsage:         {id:'AGRO2:ВОД.СИС 1 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO2:ДОЗАЦИЯ СО2 1',        name: 'изм. конц.СО2'},
        co2kg:              {id:'AGRO2:ДОЗАЦИЯ СО2 1',        name: 'реал. доз. итог.'},

    }, // id 1
    {tid:2,
        temperature:[
            {id:'AGRO2:Отд 7', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 8', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 9', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 10', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 11', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 12', name: 'изм. темп.теплицы'},
        ],
        humidity:[
            {id:'AGRO2:Отд 7', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 8', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 9', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 10', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 11', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 12', name: 'изм. ОВ'},
        ],
        temperatureOutside:
            {id:'AGRO2:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO2:Отд 7', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO2:Отд 7', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO2:ОТД 7 РЕГ.ВЕНТ.', name: 'расч темп вент'},
        wind:
            {id:'AGRO2:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO2:Отд 9', name: 'измер СО2'},

        aLight:[
            {id:'AGRO2:СИСТ.ДОСВЕТ 3 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 3 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 4 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 4 КОНТУР 2', name: 'pеал. статус'},
        ],

        defH:[
            {id:'AGRO2:Отд 7' , name: 'изм. ДВ'},
            {id:'AGRO2:Отд 8' , name: 'изм. ДВ'},
            {id:'AGRO2:Отд 9' , name: 'изм. ДВ'},
            {id:'AGRO2:Отд 10', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 11', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 12', name: 'изм. ДВ'},
        ],

        waterDosage:        {id:'AGRO2:КРАН.ГРУППА 2',        name: 'M432.1N1R4.2V2'},
        waterUsage:         {id:'AGRO2:ВОД.СИС 2 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO2:ДОЗАЦИЯ СО2 2',        name: 'изм. конц.СО2'},
        co2kg:              {id:'AGRO2:ДОЗАЦИЯ СО2 2',        name: 'реал. доз. итог.'},

    }, // id 2
    {tid:3,
        temperature:[
            {id:'AGRO2:Отд 13', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 14', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 15', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 16', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 17', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 18', name: 'изм. темп.теплицы'},
        ],
        humidity:[
            {id:'AGRO2:Отд 13', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 14', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 15', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 16', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 17', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 18', name: 'изм. ОВ'},
        ],
        temperatureOutside:
            {id:'AGRO:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO2:Отд 13', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO2:Отд 13', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO2:ОТД 13 РЕГ.ВЕНТ.', name: 'рассч.Т вент l'},
        wind:
            {id:'AGRO:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO2:Отд 15', name: 'измер СО2'},

        aLight:[
            {id:'AGRO2:СИСТ.ДОСВЕТ 5 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 5 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 6 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 6 КОНТУР 2', name: 'pеал. статус'},
        ],

        defH:[
            {id:'AGRO2:Отд 13', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 14', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 15', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 16', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 17', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 18', name: 'изм. ДВ'},
        ],

        waterDosage:        {id:'AGRO2:КРАН.ГРУППА 3',        name: 'M432.1N1R4.3V2'},
        waterUsage:         {id:'AGRO2:ВОД.СИС 3 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO2:ДОЗАЦИЯ СО2 3',        name: 'изм. конц.СО2'},
        co2kg:              {id:'AGRO2:ДОЗАЦИЯ СО2 3',        name: 'реал. доз. итог.'},

    }, // id 3
    {tid:4,
        temperature:[
            {id:'AGRO2:Отд 19', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 20', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 21', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 22', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 23', name: 'изм. темп.теплицы'},
            {id:'AGRO2:Отд 24', name: 'изм. темп.теплицы'},
        ],
        humidity:[
            {id:'AGRO2:Отд 19', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 20', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 21', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 22', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 23', name: 'изм. ОВ'},
            {id:'AGRO2:Отд 24', name: 'изм. ОВ'},
        ],
        temperatureOutside:
            {id:'AGRO2:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO2:Отд 19', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO2:Отд 19', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO2:ОТД 19 РЕГ.ВЕНТ.', name: 'рассч.Т вент l'},
        wind:
            {id:'AGRO2:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO2:Отд 21', name: 'измер СО2'},

        aLight:[
            {id:'AGRO2:СИСТ.ДОСВЕТ 7 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 7 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 8 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO2:СИСТ.ДОСВЕТ 8 КОНТУР 2', name: 'pеал. статус'},
        ],

        defH:[
            {id:'AGRO2:Отд 19', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 20', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 21', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 22', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 23', name: 'изм. ДВ'},
            {id:'AGRO2:Отд 24', name: 'изм. ДВ'},
        ],

        waterDosage:        {id:'AGRO2:КРАН.ГРУППА 4',        name: 'M432.1N1R4.4V2'},
        waterUsage:         {id:'AGRO2:ВОД.СИС 4 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO2:ДОЗАЦИЯ СО2 4',        name: 'изм. конц.СО2'},
        co2kg:              {id:'AGRO2:ДОЗАЦИЯ СО2 4',        name: 'реал. доз. итог.'},

    }, // id 4
    {tid:5,
        temperature:[
            {id:'AGRO:Отд 31', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 32', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 33', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 34', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 35', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 36', name: 'изм. темп.теплицы'},
        ],
        humidity:[
            {id:'AGRO:Отд 31', name: 'изм. ОВ'},
            {id:'AGRO:Отд 32', name: 'изм. ОВ'},
            {id:'AGRO:Отд 33', name: 'изм. ОВ'},
            {id:'AGRO:Отд 34', name: 'изм. ОВ'},
            {id:'AGRO:Отд 35', name: 'изм. ОВ'},
            {id:'AGRO:Отд 36', name: 'изм. ОВ'},

        ],
        temperatureOutside:
            {id:'AGRO:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO:Отд 31', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO:Отд 31', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO:ОТД 31 РЕГ.ВЕНТ.', name: 'расч темп вент'},
        wind:
            {id:'AGRO2:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO2:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO2:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO:Отд 33', name: 'измер СО2'},

        aLight:[
            {id:'AGRO:СИСТ.ДОСВЕТ 311 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO:СИСТ.ДОСВЕТ 311 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO:СИСТ.ДОСВЕТ 312 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO:СИСТ.ДОСВЕТ 312 КОНТУР 2', name: 'pеал. статус'},
        ],

        defH:[
            {id:'AGRO:Отд 31' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 32' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 33' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 34' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 35' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 36' , name: 'изм. ДВ'},

        ],

        waterDosage:        {id:'AGRO:КРАН.ГРУППА 31',        name: 'M432.1N1R4.31V2'},
        waterUsage:         {id:'AGRO:ВОД.СИС 31 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO:ДОЗАЦИЯ СО2 31',        name: 'изм. конц.СО2'},
        co2kg:              {id:'AGRO:ДОЗАЦИЯ СО2 31  1',        name: 'реал. доз. итог.'},

    }, // id 5
    {tid:6,
        temperature:[
            {id:'AGRO:Отд 41', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 42', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 43', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 44', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 45', name: 'изм. темп.теплицы'},
            {id:'AGRO:Отд 46', name: 'изм. темп.теплицы'},

        ],
        humidity:[
            {id:'AGRO:Отд 41', name: 'изм. ОВ'},
            {id:'AGRO:Отд 42', name: 'изм. ОВ'},
            {id:'AGRO:Отд 43', name: 'изм. ОВ'},
            {id:'AGRO:Отд 44', name: 'изм. ОВ'},
            {id:'AGRO:Отд 45', name: 'изм. ОВ'},
            {id:'AGRO:Отд 46', name: 'изм. ОВ'},

        ],
        temperatureOutside:
            {id:'AGRO2:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO:Отд 41', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO:Отд 41', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO:ОТД 41 РЕГ.ВЕНТ.', name: 'расч темп вент'},
        wind:
            {id:'AGRO2:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO:Отд 44', name: 'измер СО2'},

        aLight:[
            {id:'AGRO:СИСТ.ДОСВЕТ 411 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO:СИСТ.ДОСВЕТ 411 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO:СИСТ.ДОСВЕТ 412 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO:СИСТ.ДОСВЕТ 412 КОНТУР 2', name: 'pеал. статус'},
        ],

        defH:[
            {id:'AGRO:Отд 41' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 42' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 43' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 44' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 45' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 46' , name: 'изм. ДВ'},

        ],

        waterDosage:        {id:'AGRO:КРАН.ГРУППА 41',        name: 'M432.1N1R4.41V2'},
        waterUsage:         {id:'AGRO2:ВОД.СИС 2 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO:Отд 44',                name: 'измер СО2'},      // !!!!!!! изм. конц в других
        co2kg:              {id:'AGRO:ДОЗАЦИЯ СО2 41  1',     name: 'реал. доз. итог.'},

    }, // id 6
    {tid:10,
        temperature:[
            {id:'AGRO4:Отд 71', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 72', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 73', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 74', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 75', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 76', name: 'изм.темп.теплицы'},

        ],
        humidity:[
            {id:'AGRO4:Отд 71', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 72', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 73', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 74', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 75', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 76', name: 'изм. ОВ'},

        ],
        temperatureOutside:
            {id:'AGRO:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO4:Отд 76', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO4:Отд 76', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO4:ОТД 71 РЕГ.ВЕНТ.', name: 'расч темп вент'},
        wind:
            {id:'AGRO:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO4:CO2 DOSAGE 71', name: 'meas CO2 conc'},

        aLight:[
            {id:'AGRO4:СИСТ.ДОСВЕТ 711 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 711 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 712 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 712 КОНТУР 2', name: 'pеал. статус'},

        ],

        defH:[
            {id:'AGRO4:Отд 71' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 72' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 73' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 74' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 75' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 76' , name: 'изм. ДВ'},

        ],

        waterDosage:        {id:'AGRO4:КРАН.ГРУППА 71',        name: 'M432.1N1R4.71V2'},
        waterUsage:         {id:'AGRO4:ВОД.СИС 71 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO4:CO2 DOSAGE 71',        name: 'meas CO2 conc'},
        co2kg:              {id:'AGRO4:ДОЗАЦИЯ СО2 71  1',        name: 'реал. доз. итог.'},

    }, // id 10
    {tid:7,
        temperature:[
            {id:'AGRO:ОТД 25 ИЗМЕР.БОКС 1', name: 'изм.темп.теплицы1'},
            {id:'AGRO:ОТД 25 ИЗМЕР.БОКС 2', name: 'изм.темп.теплицы2'},
            {id:'AGRO:ОТД 26 ИЗМЕР.БОКС 1', name: 'изм.темп.теплицы1'},
            {id:'AGRO:ОТД 26 ИЗМЕР.БОКС 2', name: 'изм.темп.теплицы2'},
        ],
        humidity:[
            {id:'AGRO:ОТД 25 ИЗМЕР.БОКС 1', name: 'изм. ОВ 1'},
            {id:'AGRO:ОТД 25 ИЗМЕР.БОКС 2', name: 'изм. ОВ 2'},
            {id:'AGRO:ОТД 26 ИЗМЕР.БОКС 1', name: 'изм. ОВ 1'},
            {id:'AGRO:ОТД 26 ИЗМЕР.БОКС 2', name: 'изм. ОВ 2'},
        ],
        temperatureOutside:
            {id:'AGRO2:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO2:Отд 7', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO2:Отд 7', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO2:ОТД 7 РЕГ.ВЕНТ.', name: 'расч темп вент'},
        wind:
            {id:'AGRO2:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO:Отд 25', name: 'измер СО2'},

        aLight:[
            {id:'AGRO:СИСТ.ДОСВЕТ 42 КОНТУР 1', name: 'pеал. статус'},  //  ??? проверить
            {id:'AGRO:СИСТ.ДОСВЕТ 42 КОНТУР 2', name: 'pеал. статус'},

        ],

        defH:[
            {id:'AGRO:Отд 25' , name: 'изм. ДВ'},
            {id:'AGRO:Отд 26' , name: 'изм. ДВ'},

        ],

        waterDosage:        {id:'AGRO:КРАН.ГРУППА 13',        name: 'M432.1N1R4.13V2'},
        waterUsage:         {id:'AGRO:ВОД.СИС 5 ИЗМ.ПОТОКА',  name: 'расход'},
        co2ppm:             {id:'AGRO:ДОЗАЦИЯ СО2 5',        name: 'изм. конц.СО2'},
        co2kg:              {id:'AGRO:ДОЗАЦИЯ СО2 5',        name: 'реал. доз. итог.'},

    }, // id 7
    {tid:8,
        temperature:[
            {id:'AGRO3:Отд 51', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 52', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 53', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 54', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 55', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 56', name: 'изм. темп.теплицы'},

        ],
        humidity:[
            {id:'AGRO3:Отд 51', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 52', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 53', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 54', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 55', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 56', name: 'изм. ОВ'},

        ],
        temperatureOutside:
            {id:'AGRO3:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO3:Отд 51', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO3:Отд 51', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO3:ОТД 51 РЕГ.ВЕНТ.', name: 'расч темп вент'},
        wind:
            {id:'AGRO3:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO3:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO3:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO3:ДОЗАЦИЯ СО2 51', name: 'изм. конц.СО2'},

        aLight:[
            {id:'AGRO3:СИСТ.ДОСВЕТ 511 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO3:СИСТ.ДОСВЕТ 511 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO3:СИСТ.ДОСВЕТ 512 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO3:СИСТ.ДОСВЕТ 512 КОНТУР 2', name: 'pеал. статус'},
        ],

        defH:[
            {id:'AGRO3:Отд 51' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 52' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 53' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 54' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 55' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 56' , name: 'изм. ДВ'},

        ],

        waterDosage:        {id:'AGRO2:КРАН.ГРУППА 51',        name: 'M432.1N1R4.51V2'},
        waterUsage:         {id:'AGRO3:ВОД.СИС 51 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO3:ДОЗАЦИЯ СО2 51',        name: 'изм. конц.СО2'},
        co2kg:              {id:'AGRO3:ДОЗАЦИЯ СО2 51',        name: 'реал. доз. итог.'},

    }, // id 8
    {tid:9,
        temperature:[
            {id:'AGRO3:Отд 61', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 62', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 63', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 64', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 65', name: 'изм. темп.теплицы'},
            {id:'AGRO3:Отд 66', name: 'изм. темп.теплицы'},

        ],
        humidity:[
            {id:'AGRO3:Отд 61', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 62', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 63', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 64', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 65', name: 'изм. ОВ'},
            {id:'AGRO3:Отд 66', name: 'изм. ОВ'},

        ],
        temperatureOutside:
            {id:'AGRO3:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO3:Отд 61', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO3:Отд 61', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO3:ОТД 61 РЕГ.ВЕНТ.', name: 'рассч.Т вент l'},
        wind:
            {id:'AGRO3:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO3:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO3:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO3:Отд 63', name: 'измер СО2'},

        aLight:[
            {id:'AGRO3:СИСТ.ДОСВЕТ 611 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO3:СИСТ.ДОСВЕТ 611 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO3:СИСТ.ДОСВЕТ 612 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO3:СИСТ.ДОСВЕТ 612 КОНТУР 2', name: 'pеал. статус'},

        ],

        defH:[
            {id:'AGRO3:Отд 61' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 62' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 63' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 64' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 65' , name: 'изм. ДВ'},
            {id:'AGRO3:Отд 66' , name: 'изм. ДВ'},

        ],

        waterDosage:        {id:'AGRO3:КРАН.ГРУППА 61',        name: 'M432.1N1R4.61V2'},
        waterUsage:         {id:'AGRO3:ВОД.СИС 61 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO3:ДОЗАЦИЯ СО2 61',        name: 'изм. конц.СО2'},
        co2kg:              {id:'AGRO3:ДОЗАЦИЯ СО2 61',        name: 'реал. доз. итог.'},

    }, // id 9
    {tid:10,
        temperature:[
            {id:'AGRO4:Отд 71', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 72', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 73', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 74', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 75', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 76', name: 'изм.темп.теплицы'},

        ],
        humidity:[
            {id:'AGRO4:Отд 71', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 72', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 73', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 74', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 75', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 76', name: 'изм. ОВ'},

        ],
        temperatureOutside:
            {id:'AGRO:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO4:Отд 76', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO4:Отд 76', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO4:ОТД 71 РЕГ.ВЕНТ.', name: 'расч темп вент'},
        wind:
            {id:'AGRO:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO4:CO2 DOSAGE 71', name: 'meas CO2 conc'},

        aLight:[
            {id:'AGRO4:СИСТ.ДОСВЕТ 711 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 711 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 712 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 712 КОНТУР 2', name: 'pеал. статус'},

        ],

        defH:[
            {id:'AGRO4:Отд 71' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 72' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 73' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 74' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 75' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 76' , name: 'изм. ДВ'},

        ],

        waterDosage:        {id:'AGRO4:КРАН.ГРУППА 71',        name: 'M432.1N1R4.71V2'},
        waterUsage:         {id:'AGRO4:ВОД.СИС 71 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO4:CO2 DOSAGE 71',        name: 'meas CO2 conc'},
        co2kg:              {id:'AGRO4:ДОЗАЦИЯ СО2 71  1',        name: 'реал. доз. итог.'},

    }, // id 10
    {tid:11,
        temperature:[
            {id:'AGRO4:Отд 81', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 82', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 83', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 84', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 85', name: 'изм.темп.теплицы'},
            {id:'AGRO4:Отд 86', name: 'изм.темп.теплицы'},

        ],
        humidity:[
            {id:'AGRO4:Отд 81', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 82', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 83', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 84', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 85', name: 'изм. ОВ'},
            {id:'AGRO4:Отд 86', name: 'изм. ОВ'},

        ],
        temperatureOutside:
            {id:'AGRO:МЕТЕО', name: 'наружная темп.'},
        temperatureHeat:
            {id:'AGRO4:Отд 86', name: 'темп.отопл.'},
        temperatureVent:
            {id:'AGRO4:Отд 86', name: 'темп.вент.'},
        temperatureCalc:
            {id:'AGRO4:ОТД 81 РЕГ.ВЕНТ.', name: 'расч темп вент'},
        wind:
            {id:'AGRO:МЕТЕО', name: 'скорость ветра'},
        outLight:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'освещенность'},
        outLightTotal:
            {id:'AGRO:МЕТЕО ДАТЧ.ОСВЕЩ', name: 'сумма освещенности'},
        co2:
            {id:'AGRO4:CO2 DOSAGE 81', name: 'meas CO2 conc'},

        aLight:[
            {id:'AGRO4:СИСТ.ДОСВЕТ 811 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 811 КОНТУР 2', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 812 КОНТУР 1', name: 'pеал. статус'},
            {id:'AGRO4:СИСТ.ДОСВЕТ 812 КОНТУР 2', name: 'pеал. статус'},
        ],

        defH:[
            {id:'AGRO4:Отд 81' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 82' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 83' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 84' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 85' , name: 'изм. ДВ'},
            {id:'AGRO4:Отд 86' , name: 'изм. ДВ'},

        ],

        waterDosage:        {id:'AGRO4:КРАН.ГРУППА 81',        name: 'M432.1N1R4.81V2'},
        waterUsage:         {id:'AGRO4:ВОД.СИС 81 ИЗМ.ПОТОКА', name: 'расход'},
        co2ppm:             {id:'AGRO4:CO2 DOSAGE 81',        name: 'meas CO2 conc'},
        co2kg:              {id:'AGRO4:ДОЗАЦИЯ СО2 81  1',        name: 'реал. доз. итог.'},

    }, // id 11

]

module.exports = {
    HNames
}