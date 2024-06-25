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


module.exports = {
    complex, COMPLEX, dbNames
}
