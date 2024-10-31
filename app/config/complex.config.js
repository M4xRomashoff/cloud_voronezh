const complex= [
    {
        name: "ТК «СОЛНЕЧНЫЙ ДАР»",
        id:1,
        lat: 45.2955000,
        lon: 41.4948000,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «ОВОЩИ ЧЕРНОЗЕМЬЯ»",
        id:2,
        lat: 52.080703,
        lon: 39.738201,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «ЧЕГЕМ АГРО»",
        id:3,
        lat: 43.570380,
        lon: 43.586725,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «АНДРОПОВСКИЙ»",
        id:4,
        lat: 44.396685,                        //44.396685, 42.744872
        lon: 42.744872,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «МАРЬИНСКОЕ»",
        id:5,
        lat: 43.869665,
        lon: 43.435513,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },

    {
        name: "ТК «КРУГЛЫЙ ГОД»",
        id:6,
        lat: 59.551635,
        lon: 34.079956,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «ДАРЫ ПРИРОДЫ»",
        id:7,
        lat: 59.858097,
        lon: 30.544893,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «ВОРОНЕЖСКИЙ»",
        id:8,
        lat: 51.090402,
        lon: 39.972334,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «ПОДМОСКОВЬЕ»",
        id:9,
        lat: 55.298374,
        lon: 38.643680,
        dcIds:[0,0,0,0,22876296, 22876236, 22876291] //22876296, 22876236, 22876291 55.297761, 38.644222
    },

    {   name: "ТК «ТУЛЬСКИЙ»",
        id: 10,
        lat: 54.252610,
        lon: 37.288841,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «КАВКАЗ»",
        id:11,
        lat: 44.276041,
        lon: 43.712767,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «КУРСК»",
        id:12,
        lat: 51.299140,
        lon: 34.705613,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «АГРОСК ВЕСЕЛЫЙ»",
        id:13,
        lat: 47.222078,
        lon: 39.720358,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },
    {
        name: "ТК «ГРИН ЛЭНД АЛАТАУ»",
        id:14,
        lat: 43.810356,
        lon: 77.038794,
        dcIds:[0,0,0,0,0,0,0,0,0,0,0]
    },

];

const COMPLEX =[
    {name:'«СОЛНЕЧНЫЙ ДАР»',id:1},
    {name:'«ОВОЩИ ЧЕРНОЗЕМЬЯ»',id:2},
    {name:'«ЧЕГЕМ АГРО»',id:3},
    {name:'«АНДРОПОВСКИЙ»',id:4},
    {name:'«МАРЬИНСКОЕ»',id:5},
    {name:'«КРУГЛЫЙ ГОД»',id:6},
    {name:'«ДАРЫ ПРИРОДЫ»',id:7},
    {name:'«ВОРОНЕЖСКИЙ»',id:8},
    {name:'«ПОДМОСКОВЬЕ»',id:9},
    {name:'«ТУЛЬСКИЙ»',id:10},
    {name:'«КАВКАЗ»',id:11},
    {name:'«КУРСК»',id:12},
    {name:'«АГРО СК ВЕСЕЛЫЙ»',id:13},
    {name:'«ГРИН ЛЭНД АЛАТАУ»',id:14},
    {name:'«АПХ»',id:15},
];

const dbNames =[
    {complex: 8, block: 1,  names: ['commonagro_12','t1']},
    {complex: 8, block: 2,  names: ['commonagro_12','t2']},
    {complex: 8, block: 3,  names: ['commonagro_12','t3']},
    {complex: 8, block: 4,  names: ['commonagro_12','t4']},
    {complex: 8, block: 5,  names: ['commonagro_12','t5']},
    {complex: 8, block: 6,  names: ['commonagro_345','t6']},
    {complex: 8, block: 7,  names: ['commonagro_345','t7']},
    {complex: 8, block: 8,  names: ['commonagro_345','t8']},
    {complex: 8, block: 9,  names: ['commonagro_345','t9']},
    {complex: 8, block: 10, names: ['commonagro_345','t10']},
    {complex: 8, block: 11, names: ['commonagro_345','t11']},
    {complex: 8, block: 12, names: ['commonagro_345','t12']},
    {complex: 8, block: 13, names: ['commonagro_345','t13']},
    {complex: 8, block: 14, names: ['commonagro_345','t14']},

]

const dbNamesWatering =[
    {complex: 8, block: 1,  names: ['watering12']},
    {complex: 8, block: 2,  names: ['watering12']},
    {complex: 8, block: 3,  names: ['watering12']},
    {complex: 8, block: 4,  names: ['watering12']},
    {complex: 8, block: 5,  names: ['watering12']},
    {complex: 8, block: 6,  names: ['watering345']},
    {complex: 8, block: 7,  names: ['watering345']},
    {complex: 8, block: 8,  names: ['watering345']},
    {complex: 8, block: 9,  names: ['watering345']},
    {complex: 8, block: 10, names: ['watering345']},
    {complex: 8, block: 11, names: ['watering345']},
    {complex: 8, block: 12, names: ['watering345']},
    {complex: 8, block: 13, names: ['watering345']},
    {complex: 8, block: 14, names: ['watering345']},

]


const MONTH=[
    {id:1,  name:'Январь'},
    {id:2,  name:'Февраль'},
    {id:3,  name:'Март'},
    {id:4,  name:'Апрель'},
    {id:5,  name:'Май'},
    {id:6,  name:'Июнь'},
    {id:7,  name:'Июль'},
    {id:8,  name:'Август'},
    {id:9,  name:'Сентябрь'},
    {id:10, name:'Октябрь'},
    {id:11, name:'Ноябрь'},
    {id:12, name:'Декабрь'},
]

const AVG_NAMES =[
    {name:'СумОсв,Дж/см²',                                          id: 'out_light'},
    {name:'Досвет, ч 50%',                                          id: 'art_light_50'},
    {name:'Досвет, ч 100%',                                         id: 'art_light_100'},
    {name:'Досвет, Дж/см²',                                         id: 'art_light_calc'},
    {name:'ИТОГО, Дж/см²',                                          id: 'total_light'},
    {name:'Средняя освещенность, Вт/м²',                            id: 'avg_light'},
    {name:'Макс. Осв-ть, Вт/м²',                                    id: 'max_light'},

    {name:'СО2 кг/га',                                              id: 'co2_ga'},
    {name:'CO2 средний ppm',                                        id: 'co2_ppm'},

    {name:'Макс. Скорость ветра, м/с',                              id: 'max_wind'},

    {name:'Расход Воды Всего, м³',                                  id: 'water_total'},
    {name:'Расход Воды л/м²',                                       id: 'water_litr'},

    {name:'Наружная температура, °С мин.',                          id: 'out_t_min'},
    {name:'Наружная температура, °С макс день',                     id: 'out_t_day_max'},
    {name:'Наружная температура, °С макс ночь',                     id: 'out_t_night_max'},
    {name:'Наружная температура, °С макс сутки',                    id: 'out_t_24_max'},
    {name:'Наружная температура, °С сред день',                     id: 'out_t_day_avg'},
    {name:'Наружная температура, °С сред ночь',                     id: 'out_t_night_avg'},
    {name:'Наружная температура, °С сред сутки',                    id: 'out_t_24_avg'},

    {name:'Заданная средняя температура в теплице, °С день',        id: 'plan_t_day'},
    {name:'Заданная средняя температура в теплице, °С ночь',        id: 'plan_t_night'},
    {name:'Заданная средняя температура в теплице, °С сутки',       id: 'plan_t_24'},

    {name:'Температура в теплице, °С мин',                          id: 'curr_t_min'},
    {name:'Температура в теплице, °С макс',                         id: 'curr_t_max'},
    {name:'Температура в теплице, °С сред день',                    id: 'curr_t_avg_day'},
    {name:'Температура в теплице, °С сред ночь',                    id: 'curr_t_avg_night'},
    {name:'Температура в теплице, °С сред сутки',                   id: 'curr_t_avg_24'},

    {name:'Относительная влажность, % макс',                        id: 'hum_max'},
    {name:'Относительная влажность, % сред день',                   id: 'hum_avg_day'},
    {name:'Относительная влажность, % сред ночь',                   id: 'hum_avg_night'},
    {name:'Относительная влажность, % сред сутки',                  id: 'hum_avg_24'},

    {name:'Ср. Дефицит влажности, г/м³ день',                       id: 'hum_def_day'},
    {name:'Ср. Дефицит влажности, г/м³ ночь',                       id: 'hum_def_night'},
    {name:'Ср. Дефицит влажности, г/м³ сутки',                      id: 'hum_def_24'},

];


const COMPLEX_FOR_FILE =[

    {name:'СОЛНЕЧНЫЙ_ДАР',id:1},
    {name:'ОВОЩИ_ЧЕРНОЗЕМЬЯ',id:2},
    {name:'ЧЕГЕМ_АГРО',id:3},
    {name:'АНДРОПОВСКИЙ',id:4},
    {name:'МАРЬИНСКОЕ',id:5},
    {name:'КРУГЛЫЙ_ГОД',id:6},
    {name:'ДАРЫ_ПРИРОДЫ',id:7},
    {name:'ВОРОНЕЖСКИЙ',id:8},
    {name:'ПОДМОСКОВЬЕ',id:9},
    {name:'ТУЛЬСКИЙ',id:10},
    {name:'КАВКАЗ',id:11},
    {name:'КУРСК',id:12},
    {name:'АГРО_СК_ВЕСЕЛЫЙ',id:13},
    {name:'ГРИН_ЛЭНД_АЛАТАУ',id:14},
    {name:'АПХ',id:15},

];

module.exports = {
    complex, COMPLEX, dbNames, dbNamesWatering, MONTH, AVG_NAMES,  COMPLEX_FOR_FILE
}
