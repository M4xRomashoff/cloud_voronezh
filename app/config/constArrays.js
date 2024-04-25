


const commonAGRO_12 =[
    {name: 'наружная темп'          , scad: 'M100.0N1R1.1V1' , column: 'out_t'          , value:'', dataType: 'temperature'},
    {name: 'скорость ветра '        , scad: 'M100.0N1R1.1V2' , column: 'wind_speed'     , value:'', dataType: 'wind'},
    {name: 'направление ветра '     , scad: 'M100.0N1R1.1V3' , column: 'wind_dir'       , value:'', dataType: 'wind'},
    {name: 'освещенность '          , scad: 'M100.0N1R1.1V4' , column: 'light'          , value:'', dataType: 'light'},
    {name: 'сумма освещенности'     , scad: 'M100.0N1R1.1V5' , column: 'out_sum_light1' , value:'', dataType: 'light'},
]

const commonAGRO_34 =[
    {name: 'наружная темп'          , scad: 'M100.0N1R1.1V1' , column: 'out_t'          , value:'', dataType: 'temperature'},
    {name: 'скорость ветра '        , scad: 'M100.0N1R1.1V2' , column: 'wind_speed'     , value:'', dataType: 'wind'},
    {name: 'направление ветра '     , scad: 'M100.0N1R1.1V3' , column: 'wind_dir'       , value:'', dataType: 'wind'},
    {name: 'освещенность '          , scad: 'M100.0N1R1.1V4' , column: 'light'          , value:'', dataType: 'light'},
    {name: 'сумма освещенности'     , scad: 'M100.0N1R1.1V5' , column: 'out_sum_light1' , value:'', dataType: 'light'},
]


const T1 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.42V19',  column: 'co2_1' ,        value:'', dataType: 'co2'},
    {name: 'СО2 2'                  ,    scad: 'M105.0N1R1.42V20',  column: 'co2_2' ,        value:'', dataType: 'co2'},

    {name: 'отделение 41 температура 1', scad: 'M105.0N1R1.41V1',   column: 'section41_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 41 температура 2', scad: 'M105.0N1R1.41V2',   column: 'section41_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 41 ОВ 1',          scad: 'M105.0N1R1.41V4',   column: 'section41_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 41 ОВ 2',          scad: 'M105.0N1R1.41V5',   column: 'section41_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 41 ДВ 1',          scad: 'M105.0N1R1.41V7',   column: 'section41_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 41 ДВ 2',          scad: 'M105.0N1R1.41V8',   column: 'section41_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 41 расч.темп. ',   scad: 'M100.0N1R4.41V1',   column: 'section41_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 41 расч.отопл.',   scad: 'M100.0N1R4.41V5',   column: 'section41_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 42 температура 1', scad: 'M105.0N1R1.42V1',   column: 'section42_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 42 температура 2', scad: 'M105.0N1R1.42V2',   column: 'section42_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 42 ОВ 1',          scad: 'M105.0N1R1.42V4',   column: 'section42_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 42 ОВ 2',          scad: 'M105.0N1R1.42V5',   column: 'section42_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 42 ДВ 1',          scad: 'M105.0N1R1.42V7',   column: 'section42_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 42 ДВ 2',          scad: 'M105.0N1R1.42V8',   column: 'section42_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 42 расч.темп. ',   scad: 'M100.0N1R4.42V1',   column: 'section42_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 42 расч.отопл.'  , scad: 'M100.0N1R4.42V5',   column: 'section42_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 43 температура 1', scad: 'M105.0N1R1.43V1',   column: 'section43_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 43 температура 2', scad: 'M105.0N1R1.43V2',   column: 'section43_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 43 ОВ 1',          scad: 'M105.0N1R1.43V4',   column: 'section43_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 43 ОВ 2',          scad: 'M105.0N1R1.43V5',   column: 'section43_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 43 ДВ 1',          scad: 'M105.0N1R1.43V7',   column: 'section43_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 43 ДВ 2',          scad: 'M105.0N1R1.43V8',   column: 'section43_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 43 расч.темп. ',   scad: 'M100.0N1R4.42V1',   column: 'section43_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 43 расч.отопл.'  , scad: 'M100.0N1R4.42V5',   column: 'section43_th',  value:'', dataType: 'temperature'},
]

const T2 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.52V19',  column: 'co2_1' ,        value:'', dataType: 'co2'},
    {name: 'СО2 2'                  ,    scad: 'M105.0N1R1.52V20',  column: 'co2_2' ,        value:'', dataType: 'co2'},

    {name: 'отделение 51 температура 1', scad: 'M105.0N1R1.51V1',   column: 'section51_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 51 температура 2', scad: 'M105.0N1R1.51V2',   column: 'section51_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 51 ОВ 1',          scad: 'M105.0N1R1.51V4',   column: 'section51_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 51 ОВ 2',          scad: 'M105.0N1R1.51V5',   column: 'section51_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 51 ДВ 1',          scad: 'M105.0N1R1.51V7',   column: 'section51_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 51 ДВ 2',          scad: 'M105.0N1R1.51V8',   column: 'section51_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 51 расч.темп. ',   scad: 'M100.0N1R4.51V1',   column: 'section51_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 51 расч.отопл.',   scad: 'M100.0N1R4.51V5',   column: 'section51_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 52 температура 1', scad: 'M105.0N1R1.52V1',   column: 'section52_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 52 температура 2', scad: 'M105.0N1R1.52V2',   column: 'section52_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 52 ОВ 1',          scad: 'M105.0N1R1.52V4',   column: 'section52_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 52 ОВ 2',          scad: 'M105.0N1R1.52V5',   column: 'section52_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 52 ДВ 1',          scad: 'M105.0N1R1.52V7',   column: 'section52_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 52 ДВ 2',          scad: 'M105.0N1R1.52V8',   column: 'section52_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 52 расч.темп. ',   scad: 'M100.0N1R4.52V1',   column: 'section52_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 52 расч.отопл.'  , scad: 'M100.0N1R4.52V5',   column: 'section52_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 53 температура 1', scad: 'M105.0N1R1.53V1',   column: 'section53_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 53 температура 2', scad: 'M105.0N1R1.53V2',   column: 'section53_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 53 ОВ 1',          scad: 'M105.0N1R1.53V4',   column: 'section53_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 53 ОВ 2',          scad: 'M105.0N1R1.53V5',   column: 'section53_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 53 ДВ 1',          scad: 'M105.0N1R1.53V7',   column: 'section53_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 53 ДВ 2',          scad: 'M105.0N1R1.53V8',   column: 'section53_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 53 расч.темп. ',   scad: 'M100.0N1R4.52V1',   column: 'section53_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 53 расч.отопл.'  , scad: 'M100.0N1R4.52V5',   column: 'section53_th',  value:'', dataType: 'temperature'},

]

const T3 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.11V19',  column: 'co2_1' ,        value:'', dataType: 'co2'},
    {name: 'СО2 2'                  ,    scad: 'M105.0N1R1.11V20',  column: 'co2_2' ,        value:'', dataType: 'co2'},

    {name: 'отделение 11 температура 1', scad: 'M105.0N1R1.11V1',   column: 'section11_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 11 температура 2', scad: 'M105.0N1R1.11V2',   column: 'section11_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 11 ОВ 1',          scad: 'M105.0N1R1.11V4',   column: 'section11_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 11 ОВ 2',          scad: 'M105.0N1R1.11V5',   column: 'section11_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 11 ДВ 1',          scad: 'M105.0N1R1.11V7',   column: 'section11_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 11 ДВ 2',          scad: 'M105.0N1R1.11V8',   column: 'section11_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 11 расч.темп. ',   scad: 'M100.0N1R4.11V1',   column: 'section11_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 11 расч.отопл.',   scad: 'M100.0N1R4.11V5',   column: 'section11_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 12 температура 1', scad: 'M105.0N1R1.12V1',   column: 'section12_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 12 ОВ 1',          scad: 'M105.0N1R1.12V4',   column: 'section12_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 12 ДВ 1',          scad: 'M105.0N1R1.12V7',   column: 'section12_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 12 расч.темп. ',   scad: 'M100.0N1R4.12V1',   column: 'section12_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 12 расч.отопл.'  , scad: 'M100.0N1R4.12V5',   column: 'section12_th',  value:'', dataType: 'temperature'},

]

const T4 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.31V19',  column: 'co2_1' ,        value:'', dataType: 'co2'},
    {name: 'СО2 2'                  ,    scad: 'M105.0N1R1.32V20',  column: 'co2_2' ,        value:'', dataType: 'co2'},

    {name: 'отделение 31 температура 1', scad: 'M105.0N1R1.31V1',   column: 'section31_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 31 температура 2', scad: 'M105.0N1R1.31V2',   column: 'section31_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 31 ОВ 1',          scad: 'M105.0N1R1.31V4',   column: 'section31_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 31 ОВ 2',          scad: 'M105.0N1R1.31V5',   column: 'section31_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 31 ДВ 1',          scad: 'M105.0N1R1.31V7',   column: 'section31_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 31 ДВ 2',          scad: 'M105.0N1R1.31V8',   column: 'section31_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 31 расч.темп. ',   scad: 'M100.0N1R4.31V1',   column: 'section31_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 31 расч.отопл.',   scad: 'M100.0N1R4.31V5',   column: 'section31_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 32 температура 1', scad: 'M105.0N1R1.32V1',   column: 'section32_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 32 температура 2', scad: 'M105.0N1R1.32V2',   column: 'section32_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 32 ОВ 1',          scad: 'M105.0N1R1.32V4',   column: 'section32_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 32 ОВ 2',          scad: 'M105.0N1R1.32V5',   column: 'section32_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 32 ДВ 1',          scad: 'M105.0N1R1.32V7',   column: 'section32_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 32 ДВ 2',          scad: 'M105.0N1R1.32V8',   column: 'section32_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 32 расч.темп. ',   scad: 'M100.0N1R4.32V1',   column: 'section32_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 32 расч.отопл.'  , scad: 'M100.0N1R4.32V5',   column: 'section32_th',  value:'', dataType: 'temperature'},


]

const T5 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.21V19',  column: 'co2_1' ,        value:'', dataType: 'co2'},
    {name: 'СО2 2'                  ,    scad: 'M105.0N1R1.22V20',  column: 'co2_2' ,        value:'', dataType: 'co2'},

    {name: 'отделение 21 температура 1', scad: 'M105.0N1R1.21V1',   column: 'section21_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 21 температура 2', scad: 'M105.0N1R1.21V2',   column: 'section21_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 21 ОВ 1',          scad: 'M105.0N1R1.21V4',   column: 'section21_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 21 ОВ 2',          scad: 'M105.0N1R1.21V5',   column: 'section21_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 21 ДВ 1',          scad: 'M105.0N1R1.21V7',   column: 'section21_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 21 ДВ 2',          scad: 'M105.0N1R1.21V8',   column: 'section21_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 21 расч.темп. ',   scad: 'M100.0N1R4.21V1',   column: 'section21_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 21 расч.отопл.',   scad: 'M100.0N1R4.21V5',   column: 'section21_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 22 температура 1', scad: 'M105.0N1R1.22V1',   column: 'section22_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 22 температура 2', scad: 'M105.0N1R1.22V2',   column: 'section22_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 22 ОВ 1',          scad: 'M105.0N1R1.22V4',   column: 'section22_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 22 ОВ 2',          scad: 'M105.0N1R1.22V5',   column: 'section22_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 22 ДВ 1',          scad: 'M105.0N1R1.22V7',   column: 'section22_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 22 ДВ 2',          scad: 'M105.0N1R1.22V8',   column: 'section22_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 22 расч.темп. ',   scad: 'M100.0N1R4.22V1',   column: 'section22_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 22 расч.отопл.'  , scad: 'M100.0N1R4.22V5',   column: 'section22_th',  value:'', dataType: 'temperature'},


]

const T6 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.14V19',  column: 'co2_1' ,        value:'', dataType: 'co2'},
    {name: 'СО2 2'                  ,    scad: 'M105.0N1R1.15V19',  column: 'co2_2' ,        value:'', dataType: 'co2'},

    {name: 'отделение 14 температура 1', scad: 'M105.0N1R1.14V1',   column: 'section14_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 14 температура 2', scad: 'M105.0N1R1.14V2',   column: 'section14_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 14 ОВ 1',          scad: 'M105.0N1R1.14V4',   column: 'section14_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 14 ОВ 2',          scad: 'M105.0N1R1.14V5',   column: 'section14_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 14 ДВ 1',          scad: 'M105.0N1R1.14V7',   column: 'section14_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 14 ДВ 2',          scad: 'M105.0N1R1.14V8',   column: 'section14_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 14 расч.темп. ',   scad: 'M100.0N1R4.14V1',   column: 'section14_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 14 расч.отопл.',   scad: 'M100.0N1R4.14V5',   column: 'section14_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 15 температура 1', scad: 'M105.0N1R1.15V1',   column: 'section15_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 15 температура 2', scad: 'M105.0N1R1.15V2',   column: 'section15_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 15 ОВ 1',          scad: 'M105.0N1R1.15V4',   column: 'section15_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 15 ОВ 2',          scad: 'M105.0N1R1.15V5',   column: 'section15_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 15 ДВ 1',          scad: 'M105.0N1R1.15V7',   column: 'section15_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 15 ДВ 2',          scad: 'M105.0N1R1.15V8',   column: 'section15_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 15 расч.темп. ',   scad: 'M100.0N1R4.15V1',   column: 'section15_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 15 расч.отопл.',   scad: 'M100.0N1R4.15V5',   column: 'section15_th',  value:'', dataType: 'temperature'},

]

const T7 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.13V19',  column: 'co2_1' ,        value:'', dataType: 'co2'},

    {name: 'отделение 13 температура 1', scad: 'M105.0N1R1.13V1',   column: 'section13_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 13 ОВ 1',          scad: 'M105.0N1R1.13V4',   column: 'section13_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 13 ДВ 1',          scad: 'M105.0N1R1.13V7',   column: 'section13_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 13 расч.темп. ',   scad: 'M100.0N1R4.13V1',   column: 'section13_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 13 расч.отопл.',   scad: 'M100.0N1R4.13V5',   column: 'section13_th',  value:'', dataType: 'temperature'},

]

const T8 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.72V14',  column: 'co2_1' ,        value:'', dataType: 'co2'},

    {name: 'отделение 71 температура 1', scad: 'M105.0N1R1.71V1',   column: 'section71_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 71 температура 2', scad: 'M105.0N1R1.71V2',   column: 'section71_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 71 ОВ 1',          scad: 'M105.0N1R1.71V3',   column: 'section71_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 71 ОВ 2',          scad: 'M105.0N1R1.71V4',   column: 'section71_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 71 ДВ 1',          scad: 'M105.0N1R1.71V5',   column: 'section71_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 71 ДВ 2',          scad: 'M105.0N1R1.71V6',   column: 'section71_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 71 расч.темп. ',   scad: 'M100.0N1R4.71V1',   column: 'section71_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 71 расч.отопл.',   scad: 'M100.0N1R4.71V5',   column: 'section71_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 72 температура 1', scad: 'M105.0N1R1.72V1',   column: 'section72_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 72 температура 2', scad: 'M105.0N1R1.72V2',   column: 'section72_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 72 ОВ 1',          scad: 'M105.0N1R1.72V3',   column: 'section72_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 72 ОВ 2',          scad: 'M105.0N1R1.72V4',   column: 'section72_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 72 ДВ 1',          scad: 'M105.0N1R1.72V5',   column: 'section72_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 72 ДВ 2',          scad: 'M105.0N1R1.72V6',   column: 'section72_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 72 расч.темп. ',   scad: 'M100.0N1R4.72V1',   column: 'section72_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 72 расч.отопл.'  , scad: 'M100.0N1R4.72V5',   column: 'section72_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 73 температура 1', scad: 'M105.0N1R1.73V1',   column: 'section73_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 73 температура 2', scad: 'M105.0N1R1.73V2',   column: 'section73_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 73 ОВ 1',          scad: 'M105.0N1R1.73V3',   column: 'section73_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 73 ОВ 2',          scad: 'M105.0N1R1.73V4',   column: 'section73_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 73 ДВ 1',          scad: 'M105.0N1R1.73V5',   column: 'section73_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 73 ДВ 2',          scad: 'M105.0N1R1.73V6',   column: 'section73_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 73 расч.темп. ',   scad: 'M100.0N1R4.72V1',   column: 'section73_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 73 расч.отопл.'  , scad: 'M100.0N1R4.72V5',   column: 'section73_th',  value:'', dataType: 'temperature'},

]

const T9 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.62V14',  column: 'co2_1' ,        value:'', dataType: 'co2'},

    {name: 'отделение 61 температура 1', scad: 'M105.0N1R1.61V1',   column: 'section61_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 61 температура 2', scad: 'M105.0N1R1.61V2',   column: 'section61_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 61 ОВ 1',          scad: 'M105.0N1R1.61V3',   column: 'section61_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 61 ОВ 2',          scad: 'M105.0N1R1.61V4',   column: 'section61_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 61 ДВ 1',          scad: 'M105.0N1R1.61V5',   column: 'section61_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 61 ДВ 2',          scad: 'M105.0N1R1.61V6',   column: 'section61_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 61 расч.темп. ',   scad: 'M100.0N1R4.61V1',   column: 'section61_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 61 расч.отопл.',   scad: 'M100.0N1R4.61V5',   column: 'section61_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 62 температура 1', scad: 'M105.0N1R1.62V1',   column: 'section62_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 62 температура 2', scad: 'M105.0N1R1.62V2',   column: 'section62_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 62 ОВ 1',          scad: 'M105.0N1R1.62V3',   column: 'section62_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 62 ОВ 2',          scad: 'M105.0N1R1.62V4',   column: 'section62_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 62 ДВ 1',          scad: 'M105.0N1R1.62V5',   column: 'section62_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 62 ДВ 2',          scad: 'M105.0N1R1.62V6',   column: 'section62_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 62 расч.темп. ',   scad: 'M100.0N1R4.62V1',   column: 'section62_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 62 расч.отопл.'  , scad: 'M100.0N1R4.62V5',   column: 'section62_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 63 температура 1', scad: 'M105.0N1R1.63V1',   column: 'section63_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 63 температура 2', scad: 'M105.0N1R1.63V2',   column: 'section63_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 63 ОВ 1',          scad: 'M105.0N1R1.63V3',   column: 'section63_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 63 ОВ 2',          scad: 'M105.0N1R1.63V4',   column: 'section63_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 63 ДВ 1',          scad: 'M105.0N1R1.63V5',   column: 'section63_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 63 ДВ 2',          scad: 'M105.0N1R1.63V6',   column: 'section63_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 63 расч.темп. ',   scad: 'M100.0N1R4.63V1',   column: 'section63_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 63 расч.отопл.'  , scad: 'M100.0N1R4.63V5',   column: 'section63_th',  value:'', dataType: 'temperature'},
]

const T10 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.92V14',  column: 'co2_1' ,        value:'', dataType: 'co2'},

    {name: 'отделение 91 температура 1', scad: 'M105.0N1R1.91V1',   column: 'section91_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 91 температура 2', scad: 'M105.0N1R1.91V2',   column: 'section91_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 91 ОВ 1',          scad: 'M105.0N1R1.91V3',   column: 'section91_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 91 ОВ 2',          scad: 'M105.0N1R1.91V4',   column: 'section91_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 91 ДВ 1',          scad: 'M105.0N1R1.91V5',   column: 'section91_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 91 ДВ 2',          scad: 'M105.0N1R1.91V6',   column: 'section91_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 91 расч.темп. ',   scad: 'M100.0N1R4.91V1',   column: 'section91_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 91 расч.отопл.',   scad: 'M100.0N1R4.91V5',   column: 'section91_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 92 температура 1', scad: 'M105.0N1R1.92V1',   column: 'section92_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 92 температура 2', scad: 'M105.0N1R1.92V2',   column: 'section92_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 92 ОВ 1',          scad: 'M105.0N1R1.92V3',   column: 'section92_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 92 ОВ 2',          scad: 'M105.0N1R1.92V4',   column: 'section92_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 92 ДВ 1',          scad: 'M105.0N1R1.92V5',   column: 'section92_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 92 ДВ 2',          scad: 'M105.0N1R1.92V6',   column: 'section92_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 92 расч.темп. ',   scad: 'M100.0N1R4.92V1',   column: 'section92_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 92 расч.отопл.'  , scad: 'M100.0N1R4.92V5',   column: 'section92_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 93 температура 1', scad: 'M105.0N1R1.93V1',   column: 'section93_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 93 температура 2', scad: 'M105.0N1R1.93V2',   column: 'section93_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 93 ОВ 1',          scad: 'M105.0N1R1.93V3',   column: 'section93_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 93 ОВ 2',          scad: 'M105.0N1R1.93V4',   column: 'section93_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 93 ДВ 1',          scad: 'M105.0N1R1.93V5',   column: 'section93_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 93 ДВ 2',          scad: 'M105.0N1R1.93V6',   column: 'section93_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 93 расч.темп. ',   scad: 'M100.0N1R4.92V1',   column: 'section93_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 93 расч.отопл.'  , scad: 'M100.0N1R4.92V5',   column: 'section93_th',  value:'', dataType: 'temperature'},
]

const T11 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.82V14',  column: 'co2_1' ,        value:'', dataType: 'co2'},

    {name: 'отделение 81 температура 1', scad: 'M105.0N1R1.81V1',   column: 'section81_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 81 температура 2', scad: 'M105.0N1R1.81V2',   column: 'section81_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 81 ОВ 1',          scad: 'M105.0N1R1.81V3',   column: 'section81_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 81 ОВ 2',          scad: 'M105.0N1R1.81V4',   column: 'section81_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 81 ДВ 1',          scad: 'M105.0N1R1.81V5',   column: 'section81_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 81 ДВ 2',          scad: 'M105.0N1R1.81V6',   column: 'section81_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 81 расч.темп. ',   scad: 'M100.0N1R4.81V1',   column: 'section81_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 81 расч.отопл.',   scad: 'M100.0N1R4.81V5',   column: 'section81_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 82 температура 1', scad: 'M105.0N1R1.82V1',   column: 'section82_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 82 температура 2', scad: 'M105.0N1R1.82V2',   column: 'section82_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 82 ОВ 1',          scad: 'M105.0N1R1.82V3',   column: 'section82_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 82 ОВ 2',          scad: 'M105.0N1R1.82V4',   column: 'section82_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 82 ДВ 1',          scad: 'M105.0N1R1.82V5',   column: 'section82_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 82 ДВ 2',          scad: 'M105.0N1R1.82V6',   column: 'section82_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 82 расч.темп. ',   scad: 'M100.0N1R4.82V1',   column: 'section82_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 82 расч.отопл.'  , scad: 'M100.0N1R4.82V5',   column: 'section82_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 83 температура 1', scad: 'M105.0N1R1.83V1',   column: 'section83_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 83 температура 2', scad: 'M105.0N1R1.83V2',   column: 'section83_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 83 ОВ 1',          scad: 'M105.0N1R1.83V3',   column: 'section83_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 83 ОВ 2',          scad: 'M105.0N1R1.83V4',   column: 'section83_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 83 ДВ 1',          scad: 'M105.0N1R1.83V5',   column: 'section83_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 83 ДВ 2',          scad: 'M105.0N1R1.83V6',   column: 'section83_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 83 расч.темп. ',   scad: 'M100.0N1R4.83V1',   column: 'section83_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 83 расч.отопл.'  , scad: 'M100.0N1R4.83V5',   column: 'section83_th',  value:'', dataType: 'temperature'},
]


const T12 = [
    {name: 'СО2 1'                  ,    scad: 'M105.0N1R1.103V13',   column: 'co2_1' ,        value:'', dataType: 'co2'},

    {name: 'отделение 101 температура 1', scad: 'M105.0N1R1.101V1',   column: 'section101_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 101 температура 2', scad: 'M105.0N1R1.101V2',   column: 'section101_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 101 ОВ 1',          scad: 'M105.0N1R1.101V3',   column: 'section101_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 101 ОВ 2',          scad: 'M105.0N1R1.101V4',   column: 'section101_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 101 ДВ 1',          scad: 'M105.0N1R1.101V5',   column: 'section101_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 101 ДВ 2',          scad: 'M105.0N1R1.101V6',   column: 'section101_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 101 расч.темп. ',   scad: 'M100.0N1R4.101V1',   column: 'section101_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 101 расч.отопл.',   scad: 'M100.0N1R4.101V5',   column: 'section101_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 102 температура 1', scad: 'M105.0N1R1.102V1',   column: 'section102_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 102 температура 2', scad: 'M105.0N1R1.102V2',   column: 'section102_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 102 ОВ 1',          scad: 'M105.0N1R1.102V3',   column: 'section102_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 102 ОВ 2',          scad: 'M105.0N1R1.102V4',   column: 'section102_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 102 ДВ 1',          scad: 'M105.0N1R1.102V5',   column: 'section102_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 102 ДВ 2',          scad: 'M105.0N1R1.102V6',   column: 'section102_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 102 расч.темп. ',   scad: 'M100.0N1R4.102V1',   column: 'section102_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 102 расч.отопл.'  , scad: 'M100.0N1R4.102V5',   column: 'section102_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 103 температура 1', scad: 'M105.0N1R1.103V1',   column: 'section103_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 103 температура 2', scad: 'M105.0N1R1.103V2',   column: 'section103_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 103 ОВ 1',          scad: 'M105.0N1R1.103V3',   column: 'section103_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 103 ОВ 2',          scad: 'M105.0N1R1.103V4',   column: 'section103_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 103 ДВ 1',          scad: 'M105.0N1R1.103V5',   column: 'section103_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 103 ДВ 2',          scad: 'M105.0N1R1.103V6',   column: 'section103_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 103 расч.темп. ',   scad: 'M100.0N1R4.102V1',   column: 'section103_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 103 расч.отопл.'  , scad: 'M100.0N1R4.102V5',   column: 'section103_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 104 температура 1', scad: 'M105.0N1R1.104V1',   column: 'section104_t1',  value:'', dataType: 'temperature'},
    {name: 'отделение 104 температура 2', scad: 'M105.0N1R1.104V2',   column: 'section104_t2',  value:'', dataType: 'temperature'},
    {name: 'отделение 104 ОВ 1',          scad: 'M105.0N1R1.104V3',   column: 'section104_ov_1',value:'', dataType: 'humidity'},
    {name: 'отделение 104 ОВ 2',          scad: 'M105.0N1R1.104V4',   column: 'section104_ov_2',value:'', dataType: 'humidity'},
    {name: 'отделение 104 ДВ 1',          scad: 'M105.0N1R1.104V5',   column: 'section104_dv_1',value:'', dataType: 'humidity'},
    {name: 'отделение 104 ДВ 2',          scad: 'M105.0N1R1.104V6',   column: 'section104_dv_2',value:'', dataType: 'humidity'},
    {name: 'отделение 104 расч.темп. ',   scad: 'M100.0N1R4.104V1',   column: 'section104_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 104 расч.отопл.'  , scad: 'M100.0N1R4.104V5',   column: 'section104_th',  value:'', dataType: 'temperature'},
]

//
// const AGRO_water =[
//     {name: 'расход 5 1'          , scad: 'M432.1N1R4.31V1',   column: 'water_5_1'          , value:''},
//     {name: 'расход 5 2'          , scad: 'M432.1N1R4.31V2',   column: 'water_5_2'          , value:''},
//     {name: 'расход 6 1'          , scad: 'M432.1N1R4.41V1',   column: 'water_6_1'          , value:''},
//     {name: 'расход 6 2'          , scad: 'M432.1N1R4.41V2',   column: 'water_6_2'          , value:''},
//     {name: 'расход 7 1'          , scad: 'M432.1N1R4.13V1',   column: 'water_7_1'          , value:''},
//     {name: 'расход 7 2'          , scad: 'M432.1N1R4.13V2',   column: 'water_7_2'          , value:''},
// ]
// const AGRO2_water =[
//     {name: 'расход 1 1'          , scad: 'M432.1N1R4.1V1',   column: 'water_1_1'          , value:''},
//     {name: 'расход 1 2'          , scad: 'M432.1N1R4.1V2',   column: 'water_1_2'          , value:''},
//     {name: 'расход 2 1'          , scad: 'M432.1N1R4.2V1',   column: 'water_2_1'          , value:''},
//     {name: 'расход 2 2'          , scad: 'M432.1N1R4.2V2',   column: 'water_2_2'          , value:''},
//     {name: 'расход 3 1'          , scad: 'M432.1N1R4.3V1',   column: 'water_3_1'          , value:''},
//     {name: 'расход 3 2'          , scad: 'M432.1N1R4.3V2',   column: 'water_3_2'          , value:''},
//     {name: 'расход 4 1'          , scad: 'M432.1N1R4.4V1',   column: 'water_4_1'          , value:''},
//     {name: 'расход 4 2'          , scad: 'M432.1N1R4.4V2',   column: 'water_4_2'          , value:''},
// ]
// const AGRO3_water =[
//     {name: 'расход 8 1'          , scad: 'M432.1N1R4.51V1',   column: 'water_8_1'          , value:''},
//     {name: 'расход 8 2'          , scad: 'M432.1N1R4.51V2',   column: 'water_8_2'          , value:''},
//     {name: 'расход 9 1'          , scad: 'M432.1N1R4.61V1',   column: 'water_9_1'          , value:''},
//     {name: 'расход 9 2'          , scad: 'M432.1N1R4.61V2',   column: 'water_9_2'          , value:''},
// ]
// const AGRO4_water =[
//     {name: 'расход 10 1'          , scad: 'M432.1N1R4.71V1',   column: 'water_10_1'          , value:''},
//     {name: 'расход 10 2'          , scad: 'M432.1N1R4.71V2',   column: 'water_10_2'          , value:''},
//     {name: 'расход 11 1'          , scad: 'M432.1N1R4.81V1',   column: 'water_11_1'          , value:''},
//     {name: 'расход 11 2'          , scad: 'M432.1N1R4.81V2',   column: 'water_11_2'          , value:''},
// ]
//
// const AGRO5_water =[
//     {name: 'расход 16 1'          , scad: 'M432.1N1R4.5V1',   column: 'water_16_1'          , value:''},
//     {name: 'расход 16 2'          , scad: 'M432.1N1R4.5V2',   column: 'water_16_2'          , value:''},
//     {name: 'расход 17 1'          , scad: 'M432.1N1R4.4V1',   column: 'water_17_1'          , value:''},
//     {name: 'расход 17 2'          , scad: 'M432.1N1R4.4V2',   column: 'water_17_2'          , value:''},
//     {name: 'расход 18 1'          , scad: 'M432.1N1R4.3V1',   column: 'water_18_1'          , value:''},
//     {name: 'расход 18 2'          , scad: 'M432.1N1R4.3V2',   column: 'water_18_2'          , value:''},
//     {name: 'расход 19 2'          , scad: 'M432.1N1R4.1V2',   column: 'water_19_2'          , value:''},
//     {name: 'расход 19 1'          , scad: 'M432.1N1R4.1V1',   column: 'water_19_1'          , value:''},
//     {name: 'расход 20 1'          , scad: 'M432.1N1R4.2V1',   column: 'water_20_1'          , value:''},
//     {name: 'расход 20 2'          , scad: 'M432.1N1R4.2V2',   column: 'water_20_2'          , value:''},
// ]
// const AGRO6_water =[
//     {name: 'расход 12 1'          , scad: 'M432.1N1R4.8V1',    column: 'water_12_1'          , value:''},
//     {name: 'расход 12 2'          , scad: 'M432.1N1R4.8V2',    column: 'water_12_2'          , value:''},
//     {name: 'расход 13 1'          , scad: 'M432.1N1R4.7V1',    column: 'water_13_1'          , value:''},
//     {name: 'расход 13 2'          , scad: 'M432.1N1R4.7V2',    column: 'water_13_2'          , value:''},
//     {name: 'расход 14 1'          , scad: 'M432.1N1R4.9V1',    column: 'water_14_1'          , value:''},
//     {name: 'расход 14 2'          , scad: 'M432.1N1R4.9V2',    column: 'water_14_2'          , value:''},
//     {name: 'расход 15 2'          , scad: 'M432.1N1R4.10V2',   column: 'water_15_2'          , value:''},
//     {name: 'расход 15 1'          , scad: 'M432.1N1R4.10V1',   column: 'water_15_1'          , value:''},
// ]
// const AGRO7_water =[
//     {name: 'расход 21 1'          , scad: 'M432.1N1R4.1V1',   column: 'water_21_1'          , value:''},
//     {name: 'расход 21 2'          , scad: 'M432.1N1R4.1V2',   column: 'water_21_2'          , value:''},
//     {name: 'расход 22 1'          , scad: 'M432.1N1R4.2V1',   column: 'water_22_1'          , value:''},
//     {name: 'расход 22 2'          , scad: 'M432.1N1R4.2V2',   column: 'water_22_2'          , value:''},
//     {name: 'расход 23 1'          , scad: 'M432.1N1R4.3V1',   column: 'water_23_1'          , value:''},
//     {name: 'расход 23 2'          , scad: 'M432.1N1R4.3V2',   column: 'water_23_2'          , value:''},
//     {name: 'расход 24 2'          , scad: 'M432.1N1R4.4V2',   column: 'water_24_2'          , value:''},
//     {name: 'расход 24 1'          , scad: 'M432.1N1R4.4V1',   column: 'water_24_1'          , value:''},
// ]
// const AGRO8_water =[
//     {name: 'расход 25 1'          , scad: 'M432.1N1R4.21V1',   column: 'water_25_1'          , value:''},
//     {name: 'расход 25 2'          , scad: 'M432.1N1R4.21V2',   column: 'water_25_2'          , value:''},
//     {name: 'расход 26 1'          , scad: 'M432.1N1R4.22V1',   column: 'water_26_1'          , value:''},
//     {name: 'расход 26 2'          , scad: 'M432.1N1R4.22V2',   column: 'water_26_2'          , value:''},
//     {name: 'расход 27 1'          , scad: 'M432.1N1R4.23V1',   column: 'water_27_1'          , value:''},
//     {name: 'расход 27 2'          , scad: 'M432.1N1R4.23V2',   column: 'water_27_2'          , value:''},
//     {name: 'расход 28 2'          , scad: 'M432.1N1R4.24V2',   column: 'water_28_2'          , value:''},
//     {name: 'расход 28 1'          , scad: 'M432.1N1R4.24V1',   column: 'water_28_1'          , value:''},
// ]
//
//
// const AGRO2_1_co2 =[
//     {name: 'дозация СО2 1'        , scad: 'M170.1N1R2.2V6',   column: 'co2_1'          , value:''},
// ]
// const AGRO2_2_co2 =[
//     {name: 'дозация СО2 2'        , scad: 'M170.1N2R2.2V6',   column: 'co2_2'          , value:''},
// ]
// const AGRO2_3_co2 =[
//     {name: 'дозация СО2 3'        , scad: 'M170.1N3R2.2V6',   column: 'co2_3'          , value:''},
// ]
// const AGRO2_4_co2 =[
//     {name: 'дозация СО2 4'        , scad: 'M170.1N4R2.2V6',   column: 'co2_4'          , value:''},
// ]
// const AGRO_5_co2 =[
//     {name: 'дозация СО2 5'        , scad: 'M170.1N31R2.2V6',   column: 'co2_5'          , value:''},
// ]
// const AGRO_6_co2 =[
//     {name: 'дозация СО2 6'        , scad: 'M170.1N41R2.2V6',   column: 'co2_6'          , value:''},
// ]
// const AGRO_7_co2 =[
//     {name: 'дозация СО2 7'        , scad: 'M170.1N5R2.2V6',    column: 'co2_7'          , value:''},
// ]
// const AGRO3_8_co2 =[
//     {name: 'дозация СО2 8'        , scad: 'M170.1N51R2.2V6',    column: 'co2_8'          , value:''},
// ]
// const AGRO3_9_co2 =[
//     {name: 'дозация СО2 9'        , scad: 'M170.1N61R2.2V6',    column: 'co2_9'          , value:''},
// ]
// const AGRO4_10_co2 =[
//     {name: 'дозация СО2 10'        , scad: 'M170.1N71R2.2V6',    column: 'co2_10'          , value:''},
// ]
// const AGRO4_11_co2 =[
//     {name: 'дозация СО2 11'        , scad: 'M170.1N81R2.2V6',    column: 'co2_11'          , value:''},
// ]
//
// const AGRO6_12_co2 =[
//     {name: 'дозация СО2 12'        , scad: 'M170.1N9R2.2V6',    column: 'co2_12'          , value:''},
// ]
// const AGRO6_13_co2 =[
//     {name: 'дозация СО2 13'        , scad: 'M170.1N10R2.2V6',    column: 'co2_13'          , value:''},
// ]
// const AGRO6_14_co2 =[
//     {name: 'дозация СО2 14'        , scad: 'M170.1N8R2.2V6',     column: 'co2_14'          , value:''},
// ]
// const AGRO6_15_co2 =[
//     {name: 'дозация СО2 15'        , scad: 'M170.1N7R2.2V6',     column: 'co2_15'          , value:''},
// ]
// const AGRO5_16_co2 =[
//     {name: 'дозация СО2 16'        , scad: 'M170.1N8R2.2V6',    column: 'co2_16'          , value:''},
// ]
// const AGRO5_17_co2 =[
//     {name: 'дозация СО2 17'        , scad: 'M170.1N7R2.2V6',    column: 'co2_17'          , value:''},
// ]
// const AGRO5_18_co2 =[
//     {name: 'дозация СО2 18'        , scad: 'M170.1N10R2.2V6',    column: 'co2_18'         , value:''},
// ]
// const AGRO5_19_co2 =[
//     {name: 'дозация СО2 19'        , scad: 'M170.1N9R2.2V6',    column: 'co2_19'          , value:''},
// ]
// const AGRO5_20_co2 =[
//     {name: 'дозация СО2 20'        , scad: 'M170.1N9R2.2V6',    column: 'co2_20'          , value:''},
// ]
// const AGRO7_21_co2 =[
//     {name: 'дозация СО2 21'        , scad: 'M170.1N1R2.2V6',     column: 'co2_21'          , value:''},
// ]
// const AGRO7_22_co2 =[
//     {name: 'дозация СО2 22'        , scad: 'M170.1N2R2.2V6',     column: 'co2_22'          , value:''},
// ]
// const AGRO7_23_co2 =[
//     {name: 'дозация СО2 23'        , scad: 'M170.1N3R2.2V6',     column: 'co2_23'          , value:''},
// ]
// const AGRO7_24_co2 =[
//     {name: 'дозация СО2 24'        , scad: 'M170.1N4R2.2V6',     column: 'co2_24'          , value:''},
// ]
// const AGRO8_25_co2 =[
//     {name: 'дозация СО2 25'        , scad: 'M170.1N5R2.2V6',     column: 'co2_25'          , value:''},
// ]
// const AGRO8_26_co2 =[
//     {name: 'дозация СО2 26'        , scad: 'M170.1N6R2.2V6',     column: 'co2_26'          , value:''},
// ]
// const AGRO8_27_co2 =[
//     {name: 'дозация СО2 27'        , scad: 'M170.1N7R2.2V6',     column: 'co2_27'          , value:''},
// ]
// const AGRO8_28_co2 =[
//     {name: 'дозация СО2 28'        , scad: 'M170.1N8R2.2V6',     column: 'co2_28'          , value:''},
// ]
//
//
//
// const AGRO2_light =[
//     {name: 'свет 1 контур 1a'      , scad: 'M203.1N1R3.1V1',    column: 'lamp_1_c1a'         , value:''},
//     {name: 'свет 1 контур 1b'      , scad: 'M203.1N1R3.1V2',    column: 'lamp_1_c1b'         , value:''},
//     {name: 'свет 1 контур 2c'      , scad: 'M203.1N1R3.2V1',    column: 'lamp_1_c2c'         , value:''},
//     {name: 'свет 1 контур 2d'      , scad: 'M203.1N1R3.2V2',    column: 'lamp_1_c2d'         , value:''},
//
//     {name: 'свет 2 контур 1a'      , scad: 'M203.1N1R3.3V1',    column: 'lamp_2_c1a'         , value:''},
//     {name: 'свет 2 контур 1b'      , scad: 'M203.1N1R3.3V2',    column: 'lamp_2_c1b'         , value:''},
//     {name: 'свет 2 контур 2c'      , scad: 'M203.1N1R3.4V1',    column: 'lamp_2_c2c'         , value:''},
//     {name: 'свет 2 контур 2d'      , scad: 'M203.1N1R3.4V2',    column: 'lamp_2_c2d'         , value:''},
//
//     {name: 'свет 3 контур 1a'      , scad: 'M203.1N1R3.5V1',    column: 'lamp_3_c1a'         , value:''},
//     {name: 'свет 3 контур 1b'      , scad: 'M203.1N1R3.5V2',    column: 'lamp_3_c1b'         , value:''},
//     {name: 'свет 3 контур 2c'      , scad: 'M203.1N1R3.6V1',    column: 'lamp_3_c2c'         , value:''},
//     {name: 'свет 3 контур 2d'      , scad: 'M203.1N1R3.6V2',    column: 'lamp_3_c2d'         , value:''},
//
//     {name: 'свет 4 контур 1a'      , scad: 'M203.1N1R3.7V1',    column: 'lamp_4_c1a'         , value:''},
//     {name: 'свет 4 контур 1b'      , scad: 'M203.1N1R3.7V2',    column: 'lamp_4_c1b'         , value:''},
//     {name: 'свет 4 контур 2c'      , scad: 'M203.1N1R3.8V1',    column: 'lamp_4_c2c'         , value:''},
//     {name: 'свет 4 контур 2d'      , scad: 'M203.1N1R3.8V2',    column: 'lamp_4_c2d'         , value:''},
// ]
// const AGRO_light =[
//     {name: 'свет 5 контур 1a'      , scad: 'M203.1N1R3.311V1',    column: 'lamp_5_c1a'         , value:''},
//     {name: 'свет 5 контур 1b'      , scad: 'M203.1N1R3.311V2',    column: 'lamp_5_c1b'         , value:''},
//     {name: 'свет 5 контур 2c'      , scad: 'M203.1N1R3.312V1',    column: 'lamp_5_c2c'         , value:''},
//     {name: 'свет 5 контур 2d'      , scad: 'M203.1N1R3.312V2',    column: 'lamp_5_c2d'         , value:''},
//
//     {name: 'свет 6 контур 1a'      , scad: 'M203.1N1R3.411V1',    column: 'lamp_6_c1a'         , value:''},
//     {name: 'свет 6 контур 1b'      , scad: 'M203.1N1R3.411V2',    column: 'lamp_6_c1b'         , value:''},
//     {name: 'свет 6 контур 2c'      , scad: 'M203.1N1R3.412V1',    column: 'lamp_6_c2c'         , value:''},
//     {name: 'свет 6 контур 2d'      , scad: 'M203.1N1R3.412V2',    column: 'lamp_6_c2d'         , value:''},
//
//     {name: 'свет 7 контур 1a'      , scad: 'M203.1N1R3.41V1',    column: 'lamp_7_c1a'         , value:''},
//     {name: 'свет 7 контур 1b'      , scad: 'M203.1N1R3.41V2',    column: 'lamp_7_c1b'         , value:''},
//     {name: 'свет 7 контур 2c'      , scad: 'M203.1N1R3.42V1',    column: 'lamp_7_c2c'         , value:''},
//     {name: 'свет 7 контур 2d'      , scad: 'M203.1N1R3.42V2',    column: 'lamp_7_c2d'         , value:''},
// ]
// const AGRO3_light =[
//     {name: 'свет 8 контур 1a'      , scad: 'M203.1N1R3.511V1',    column: 'lamp_8_c1a'         , value:''},
//     {name: 'свет 8 контур 1b'      , scad: 'M203.1N1R3.511V2',    column: 'lamp_8_c1b'         , value:''},
//     {name: 'свет 8 контур 2c'      , scad: 'M203.1N1R3.512V1',    column: 'lamp_8_c2c'         , value:''},
//     {name: 'свет 8 контур 2d'      , scad: 'M203.1N1R3.512V2',    column: 'lamp_8_c2d'         , value:''},
//
//     {name: 'свет 9 контур 1a'      , scad: 'M203.1N1R3.611V1',    column: 'lamp_9_c1a'         , value:''},
//     {name: 'свет 9 контур 1b'      , scad: 'M203.1N1R3.611V2',    column: 'lamp_9_c1b'         , value:''},
//     {name: 'свет 9 контур 2c'      , scad: 'M203.1N1R3.612V1',    column: 'lamp_9_c2c'         , value:''},
//     {name: 'свет 9 контур 2d'      , scad: 'M203.1N1R3.612V2',    column: 'lamp_9_c2d'         , value:''},
//
// ]
// const AGRO4_light =[
//     {name: 'свет 10 контур 1a'      , scad: 'M203.1N1R3.711V1',    column: 'lamp_10_c1a'        , value:''},
//     {name: 'свет 10 контур 1b'      , scad: 'M203.1N1R3.711V2',    column: 'lamp_10_c1b'        , value:''},
//     {name: 'свет 10 контур 2c'      , scad: 'M203.1N1R3.712V1',    column: 'lamp_10_c2c'        , value:''},
//     {name: 'свет 10 контур 2d'      , scad: 'M203.1N1R3.712V2',    column: 'lamp_10_c2d'        , value:''},
//
//     {name: 'свет 11 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_11_c1a'        , value:''},
//     {name: 'свет 11 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_11_c1b'        , value:''},
//     {name: 'свет 11 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_11_c2c'        , value:''},
//     {name: 'свет 11 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_11_c2d'        , value:''},
//
// ]


// const AGRO6_light =[
//     {name: 'свет 12 контур 1a'      , scad: 'M203.1N1R3.711V1',    column: 'lamp_12_c1a'        , value:''},
//     {name: 'свет 12 контур 1b'      , scad: 'M203.1N1R3.711V2',    column: 'lamp_12_c1b'        , value:''},
//     {name: 'свет 12 контур 2c'      , scad: 'M203.1N1R3.712V1',    column: 'lamp_12_c2c'        , value:''},
//     {name: 'свет 12 контур 2d'      , scad: 'M203.1N1R3.712V2',    column: 'lamp_12_c2d'        , value:''},
//
//     {name: 'свет 13 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_13_c1a'        , value:''},
//     {name: 'свет 13 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_13_c1b'        , value:''},
//     {name: 'свет 13 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_13_c2c'        , value:''},
//     {name: 'свет 13 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_13_c2d'        , value:''},
//
//     {name: 'свет 14 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_14_c1a'        , value:''},
//     {name: 'свет 14 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_14_c1b'        , value:''},
//     {name: 'свет 14 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_14_c2c'        , value:''},
//     {name: 'свет 14 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_14_c2d'        , value:''},
//
//     {name: 'свет 15 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_15_c1a'        , value:''},
//     {name: 'свет 15 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_15_c1b'        , value:''},
//     {name: 'свет 15 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_15_c2c'        , value:''},
//     {name: 'свет 15 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_15_c2d'        , value:''},
//
// ]
// const AGRO5_light =[
//     {name: 'свет 16 контур 1a'      , scad: 'M203.1N1R3.711V1',    column: 'lamp_16_c1a'        , value:''},
//     {name: 'свет 16 контур 1b'      , scad: 'M203.1N1R3.711V2',    column: 'lamp_16_c1b'        , value:''},
//     {name: 'свет 16 контур 2c'      , scad: 'M203.1N1R3.712V1',    column: 'lamp_16_c2c'        , value:''},
//     {name: 'свет 16 контур 2d'      , scad: 'M203.1N1R3.712V2',    column: 'lamp_16_c2d'        , value:''},
//
//     {name: 'свет 17 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_17_c1a'        , value:''},
//     {name: 'свет 17 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_17_c1b'        , value:''},
//     {name: 'свет 17 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_17_c2c'        , value:''},
//     {name: 'свет 17 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_17_c2d'        , value:''},
//
//     {name: 'свет 18 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_18_c1a'        , value:''},
//     {name: 'свет 18 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_18_c1b'        , value:''},
//     {name: 'свет 18 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_18_c2c'        , value:''},
//     {name: 'свет 18 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_18_c2d'        , value:''},
//
//     {name: 'свет 19 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_19_c1a'        , value:''},
//     {name: 'свет 19 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_19_c1b'        , value:''},
//     {name: 'свет 19 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_19_c2c'        , value:''},
//     {name: 'свет 19 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_19_c2d'        , value:''},
//
//     {name: 'свет 20 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_20_c1a'        , value:''},
//     {name: 'свет 20 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_20_c1b'        , value:''},
//     {name: 'свет 20 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_20_c2c'        , value:''},
//     {name: 'свет 20 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_20_c2d'        , value:''},
//
// ]
// const AGRO7_light =[
//     {name: 'свет 21 контур 1a'      , scad: 'M203.1N1R3.711V1',    column: 'lamp_21_c1a'        , value:''},
//     {name: 'свет 21 контур 1b'      , scad: 'M203.1N1R3.711V2',    column: 'lamp_21_c1b'        , value:''},
//     {name: 'свет 21 контур 2c'      , scad: 'M203.1N1R3.712V1',    column: 'lamp_21_c2c'        , value:''},
//     {name: 'свет 21 контур 2d'      , scad: 'M203.1N1R3.712V2',    column: 'lamp_21_c2d'        , value:''},
//
//     {name: 'свет 22 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_22_c1a'        , value:''},
//     {name: 'свет 22 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_22_c1b'        , value:''},
//     {name: 'свет 22 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_22_c2c'        , value:''},
//     {name: 'свет 22 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_22_c2d'        , value:''},
//
//     {name: 'свет 23 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_23_c1a'        , value:''},
//     {name: 'свет 23 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_23_c1b'        , value:''},
//     {name: 'свет 23 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_23_c2c'        , value:''},
//     {name: 'свет 23 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_23_c2d'        , value:''},
//
//     {name: 'свет 24 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_24_c1a'        , value:''},
//     {name: 'свет 24 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_24_c1b'        , value:''},
//     {name: 'свет 24 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_24_c2c'        , value:''},
//     {name: 'свет 24 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_24_c2d'        , value:''},
// ]
// const AGRO8_light =[
//     {name: 'свет 25 контур 1a'      , scad: 'M203.1N1R3.711V1',    column: 'lamp_25_c1a'        , value:''},
//     {name: 'свет 25 контур 1b'      , scad: 'M203.1N1R3.711V2',    column: 'lamp_25_c1b'        , value:''},
//     {name: 'свет 25 контур 2c'      , scad: 'M203.1N1R3.712V1',    column: 'lamp_25_c2c'        , value:''},
//     {name: 'свет 25 контур 2d'      , scad: 'M203.1N1R3.712V2',    column: 'lamp_25_c2d'        , value:''},
//
//     {name: 'свет 26 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_26_c1a'        , value:''},
//     {name: 'свет 26 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_26_c1b'        , value:''},
//     {name: 'свет 26 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_26_c2c'        , value:''},
//     {name: 'свет 26 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_26_c2d'        , value:''},
//
//     {name: 'свет 27 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_27_c1a'        , value:''},
//     {name: 'свет 27 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_27_c1b'        , value:''},
//     {name: 'свет 27 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_27_c2c'        , value:''},
//     {name: 'свет 27 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_27_c2d'        , value:''},
//
//     {name: 'свет 28 контур 1a'      , scad: 'M203.1N1R3.811V1',    column: 'lamp_28_c1a'        , value:''},
//     {name: 'свет 28 контур 1b'      , scad: 'M203.1N1R3.811V2',    column: 'lamp_28_c1b'        , value:''},
//     {name: 'свет 28 контур 2c'      , scad: 'M203.1N1R3.812V1',    column: 'lamp_28_c2c'        , value:''},
//     {name: 'свет 28 контур 2d'      , scad: 'M203.1N1R3.812V2',    column: 'lamp_28_c2d'        , value:''},
// ]
//
//
// const AGRO_light_str_1 =[
//     {name: 'свет стратегия 1 вкл1'  , scad: 'I205.0N1R6.1V1',      column: 'lamp_1_str_on1'       , value:''},
//     {name: 'свет стратегия 1 вкл2'  , scad: 'I205.0N1R6.1V2',      column: 'lamp_1_str_on2'       , value:''},
//     {name: 'свет стратегия 1 вкл3'  , scad: 'I205.0N1R6.1V3',      column: 'lamp_1_str_on3'       , value:''},
//     {name: 'свет стратегия 1 вкл4'  , scad: 'I205.0N1R6.1V4',      column: 'lamp_1_str_on4'       , value:''},
//     {name: 'свет стратегия 1 вкл5'  , scad: 'I205.0N1R6.1V5',      column: 'lamp_1_str_on5'       , value:''},
//     {name: 'свет стратегия 1 вкл6'  , scad: 'I205.0N1R6.1V6',      column: 'lamp_1_str_on6'       , value:''},
//     {name: 'свет стратегия 1 старт1', scad: 'I205.0N1R7.1V1',      column: 'lamp_1_str_start1'    , value:''},
//     {name: 'свет стратегия 1 старт2', scad: 'I205.0N1R7.1V2',      column: 'lamp_1_str_start2'    , value:''},
//     {name: 'свет стратегия 1 старт3', scad: 'I205.0N1R7.1V3',      column: 'lamp_1_str_start3'    , value:''},
//     {name: 'свет стратегия 1 старт4', scad: 'I205.0N1R7.1V4',      column: 'lamp_1_str_start4'    , value:''},
//     {name: 'свет стратегия 1 старт5', scad: 'I205.0N1R7.1V5',      column: 'lamp_1_str_start5'    , value:''},
//     {name: 'свет стратегия 1 старт6', scad: 'I205.0N1R7.1V6',      column: 'lamp_1_str_start6'    , value:''},
//     {name: 'свет стратегия 1 стоп1' , scad: 'I205.0N1R8.1V1',      column: 'lamp_1_str_stop1'     , value:''},
//     {name: 'свет стратегия 1 стоп2' , scad: 'I205.0N1R8.1V2',      column: 'lamp_1_str_stop2'     , value:''},
//     {name: 'свет стратегия 1 стоп3' , scad: 'I205.0N1R8.1V3',      column: 'lamp_1_str_stop3'     , value:''},
//     {name: 'свет стратегия 1 стоп4' , scad: 'I205.0N1R8.1V4',      column: 'lamp_1_str_stop4'     , value:''},
//     {name: 'свет стратегия 1 стоп5' , scad: 'I205.0N1R8.1V5',      column: 'lamp_1_str_stop5'     , value:''},
//     {name: 'свет стратегия 1 стоп6' , scad: 'I205.0N1R8.1V6',      column: 'lamp_1_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_2 =[
//     {name: 'свет стратегия 2 вкл1'  , scad: 'I205.0N2R6.1V1',      column: 'lamp_2_str_on1'       , value:''},
//     {name: 'свет стратегия 2 вкл2'  , scad: 'I205.0N2R6.1V2',      column: 'lamp_2_str_on2'       , value:''},
//     {name: 'свет стратегия 2 вкл3'  , scad: 'I205.0N2R6.1V3',      column: 'lamp_2_str_on3'       , value:''},
//     {name: 'свет стратегия 2 вкл4'  , scad: 'I205.0N2R6.1V4',      column: 'lamp_2_str_on4'       , value:''},
//     {name: 'свет стратегия 2 вкл5'  , scad: 'I205.0N2R6.1V5',      column: 'lamp_2_str_on5'       , value:''},
//     {name: 'свет стратегия 2 вкл6'  , scad: 'I205.0N2R6.1V6',      column: 'lamp_2_str_on6'       , value:''},
//     {name: 'свет стратегия 2 старт1', scad: 'I205.0N2R7.1V1',      column: 'lamp_2_str_start1'    , value:''},
//     {name: 'свет стратегия 2 старт2', scad: 'I205.0N2R7.1V2',      column: 'lamp_2_str_start2'    , value:''},
//     {name: 'свет стратегия 2 старт3', scad: 'I205.0N2R7.1V3',      column: 'lamp_2_str_start3'    , value:''},
//     {name: 'свет стратегия 2 старт4', scad: 'I205.0N2R7.1V4',      column: 'lamp_2_str_start4'    , value:''},
//     {name: 'свет стратегия 2 старт5', scad: 'I205.0N2R7.1V5',      column: 'lamp_2_str_start5'    , value:''},
//     {name: 'свет стратегия 2 старт6', scad: 'I205.0N2R7.1V6',      column: 'lamp_2_str_start6'    , value:''},
//     {name: 'свет стратегия 2 стоп1' , scad: 'I205.0N2R8.1V1',      column: 'lamp_2_str_stop1'     , value:''},
//     {name: 'свет стратегия 2 стоп2' , scad: 'I205.0N2R8.1V2',      column: 'lamp_2_str_stop2'     , value:''},
//     {name: 'свет стратегия 2 стоп3' , scad: 'I205.0N2R8.1V3',      column: 'lamp_2_str_stop3'     , value:''},
//     {name: 'свет стратегия 2 стоп4' , scad: 'I205.0N2R8.1V4',      column: 'lamp_2_str_stop4'     , value:''},
//     {name: 'свет стратегия 2 стоп5' , scad: 'I205.0N2R8.1V5',      column: 'lamp_2_str_stop5'     , value:''},
//     {name: 'свет стратегия 2 стоп6' , scad: 'I205.0N2R8.1V6',      column: 'lamp_2_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_3 =[
//     {name: 'свет стратегия 3 вкл1'  , scad: 'I205.0N3R6.1V1',      column: 'lamp_3_str_on1'       , value:''},
//     {name: 'свет стратегия 3 вкл2'  , scad: 'I205.0N3R6.1V2',      column: 'lamp_3_str_on2'       , value:''},
//     {name: 'свет стратегия 3 вкл3'  , scad: 'I205.0N3R6.1V3',      column: 'lamp_3_str_on3'       , value:''},
//     {name: 'свет стратегия 3 вкл4'  , scad: 'I205.0N3R6.1V4',      column: 'lamp_3_str_on4'       , value:''},
//     {name: 'свет стратегия 3 вкл5'  , scad: 'I205.0N3R6.1V5',      column: 'lamp_3_str_on5'       , value:''},
//     {name: 'свет стратегия 3 вкл6'  , scad: 'I205.0N3R6.1V6',      column: 'lamp_3_str_on6'       , value:''},
//     {name: 'свет стратегия 3 старт1', scad: 'I205.0N3R7.1V1',      column: 'lamp_3_str_start1'    , value:''},
//     {name: 'свет стратегия 3 старт2', scad: 'I205.0N3R7.1V2',      column: 'lamp_3_str_start2'    , value:''},
//     {name: 'свет стратегия 3 старт3', scad: 'I205.0N3R7.1V3',      column: 'lamp_3_str_start3'    , value:''},
//     {name: 'свет стратегия 3 старт4', scad: 'I205.0N3R7.1V4',      column: 'lamp_3_str_start4'    , value:''},
//     {name: 'свет стратегия 3 старт5', scad: 'I205.0N3R7.1V5',      column: 'lamp_3_str_start5'    , value:''},
//     {name: 'свет стратегия 3 старт6', scad: 'I205.0N3R7.1V6',      column: 'lamp_3_str_start6'    , value:''},
//     {name: 'свет стратегия 3 стоп1' , scad: 'I205.0N3R8.1V1',      column: 'lamp_3_str_stop1'     , value:''},
//     {name: 'свет стратегия 3 стоп2' , scad: 'I205.0N3R8.1V2',      column: 'lamp_3_str_stop2'     , value:''},
//     {name: 'свет стратегия 3 стоп3' , scad: 'I205.0N3R8.1V3',      column: 'lamp_3_str_stop3'     , value:''},
//     {name: 'свет стратегия 3 стоп4' , scad: 'I205.0N3R8.1V4',      column: 'lamp_3_str_stop4'     , value:''},
//     {name: 'свет стратегия 3 стоп5' , scad: 'I205.0N3R8.1V5',      column: 'lamp_3_str_stop5'     , value:''},
//     {name: 'свет стратегия 3 стоп6' , scad: 'I205.0N3R8.1V6',      column: 'lamp_3_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_4 =[
//     {name: 'свет стратегия 4 вкл1'  , scad: 'I205.0N4R6.1V1',      column: 'lamp_4_str_on1'       , value:''},
//     {name: 'свет стратегия 4 вкл2'  , scad: 'I205.0N4R6.1V2',      column: 'lamp_4_str_on2'       , value:''},
//     {name: 'свет стратегия 4 вкл3'  , scad: 'I205.0N4R6.1V3',      column: 'lamp_4_str_on3'       , value:''},
//     {name: 'свет стратегия 4 вкл4'  , scad: 'I205.0N4R6.1V4',      column: 'lamp_4_str_on4'       , value:''},
//     {name: 'свет стратегия 4 вкл5'  , scad: 'I205.0N4R6.1V5',      column: 'lamp_4_str_on5'       , value:''},
//     {name: 'свет стратегия 4 вкл6'  , scad: 'I205.0N4R6.1V6',      column: 'lamp_4_str_on6'       , value:''},
//     {name: 'свет стратегия 4 старт1', scad: 'I205.0N4R7.1V1',      column: 'lamp_4_str_start1'    , value:''},
//     {name: 'свет стратегия 4 старт2', scad: 'I205.0N4R7.1V2',      column: 'lamp_4_str_start2'    , value:''},
//     {name: 'свет стратегия 4 старт3', scad: 'I205.0N4R7.1V3',      column: 'lamp_4_str_start3'    , value:''},
//     {name: 'свет стратегия 4 старт4', scad: 'I205.0N4R7.1V4',      column: 'lamp_4_str_start4'    , value:''},
//     {name: 'свет стратегия 4 старт5', scad: 'I205.0N4R7.1V5',      column: 'lamp_4_str_start5'    , value:''},
//     {name: 'свет стратегия 4 старт6', scad: 'I205.0N4R7.1V6',      column: 'lamp_4_str_start6'    , value:''},
//     {name: 'свет стратегия 4 стоп1' , scad: 'I205.0N4R8.1V1',      column: 'lamp_4_str_stop1'     , value:''},
//     {name: 'свет стратегия 4 стоп2' , scad: 'I205.0N4R8.1V2',      column: 'lamp_4_str_stop2'     , value:''},
//     {name: 'свет стратегия 4 стоп3' , scad: 'I205.0N4R8.1V3',      column: 'lamp_4_str_stop3'     , value:''},
//     {name: 'свет стратегия 4 стоп4' , scad: 'I205.0N4R8.1V4',      column: 'lamp_4_str_stop4'     , value:''},
//     {name: 'свет стратегия 4 стоп5' , scad: 'I205.0N4R8.1V5',      column: 'lamp_4_str_stop5'     , value:''},
//     {name: 'свет стратегия 4 стоп6' , scad: 'I205.0N4R8.1V6',      column: 'lamp_4_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_5 =[
//     {name: 'свет стратегия 5 вкл1'  , scad: 'I205.0N31R6.1V1',      column: 'lamp_5_str_on1'       , value:''},
//     {name: 'свет стратегия 5 вкл2'  , scad: 'I205.0N31R6.1V2',      column: 'lamp_5_str_on2'       , value:''},
//     {name: 'свет стратегия 5 вкл3'  , scad: 'I205.0N31R6.1V3',      column: 'lamp_5_str_on3'       , value:''},
//     {name: 'свет стратегия 5 вкл4'  , scad: 'I205.0N31R6.1V4',      column: 'lamp_5_str_on4'       , value:''},
//     {name: 'свет стратегия 5 вкл5'  , scad: 'I205.0N31R6.1V5',      column: 'lamp_5_str_on5'       , value:''},
//     {name: 'свет стратегия 5 вкл6'  , scad: 'I205.0N31R6.1V6',      column: 'lamp_5_str_on6'       , value:''},
//     {name: 'свет стратегия 5 старт1', scad: 'I205.0N31R7.1V1',      column: 'lamp_5_str_start1'    , value:''},
//     {name: 'свет стратегия 5 старт2', scad: 'I205.0N31R7.1V2',      column: 'lamp_5_str_start2'    , value:''},
//     {name: 'свет стратегия 5 старт3', scad: 'I205.0N31R7.1V3',      column: 'lamp_5_str_start3'    , value:''},
//     {name: 'свет стратегия 5 старт4', scad: 'I205.0N31R7.1V4',      column: 'lamp_5_str_start4'    , value:''},
//     {name: 'свет стратегия 5 старт5', scad: 'I205.0N31R7.1V5',      column: 'lamp_5_str_start5'    , value:''},
//     {name: 'свет стратегия 5 старт6', scad: 'I205.0N31R7.1V6',      column: 'lamp_5_str_start6'    , value:''},
//     {name: 'свет стратегия 5 стоп1' , scad: 'I205.0N31R8.1V1',      column: 'lamp_5_str_stop1'     , value:''},
//     {name: 'свет стратегия 5 стоп2' , scad: 'I205.0N31R8.1V2',      column: 'lamp_5_str_stop2'     , value:''},
//     {name: 'свет стратегия 5 стоп3' , scad: 'I205.0N31R8.1V3',      column: 'lamp_5_str_stop3'     , value:''},
//     {name: 'свет стратегия 5 стоп4' , scad: 'I205.0N31R8.1V4',      column: 'lamp_5_str_stop4'     , value:''},
//     {name: 'свет стратегия 5 стоп5' , scad: 'I205.0N31R8.1V5',      column: 'lamp_5_str_stop5'     , value:''},
//     {name: 'свет стратегия 5 стоп6' , scad: 'I205.0N31R8.1V6',      column: 'lamp_5_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_6 =[
//     {name: 'свет стратегия 6 вкл1'  , scad: 'I205.0N41R6.1V1',      column: 'lamp_6_str_on1'       , value:''},
//     {name: 'свет стратегия 6 вкл2'  , scad: 'I205.0N41R6.1V2',      column: 'lamp_6_str_on2'       , value:''},
//     {name: 'свет стратегия 6 вкл3'  , scad: 'I205.0N41R6.1V3',      column: 'lamp_6_str_on3'       , value:''},
//     {name: 'свет стратегия 6 вкл4'  , scad: 'I205.0N41R6.1V4',      column: 'lamp_6_str_on4'       , value:''},
//     {name: 'свет стратегия 6 вкл5'  , scad: 'I205.0N41R6.1V5',      column: 'lamp_6_str_on5'       , value:''},
//     {name: 'свет стратегия 6 вкл6'  , scad: 'I205.0N41R6.1V6',      column: 'lamp_6_str_on6'       , value:''},
//     {name: 'свет стратегия 6 старт1', scad: 'I205.0N41R7.1V1',      column: 'lamp_6_str_start1'    , value:''},
//     {name: 'свет стратегия 6 старт2', scad: 'I205.0N41R7.1V2',      column: 'lamp_6_str_start2'    , value:''},
//     {name: 'свет стратегия 6 старт3', scad: 'I205.0N41R7.1V3',      column: 'lamp_6_str_start3'    , value:''},
//     {name: 'свет стратегия 6 старт4', scad: 'I205.0N41R7.1V4',      column: 'lamp_6_str_start4'    , value:''},
//     {name: 'свет стратегия 6 старт5', scad: 'I205.0N41R7.1V5',      column: 'lamp_6_str_start5'    , value:''},
//     {name: 'свет стратегия 6 старт6', scad: 'I205.0N41R7.1V6',      column: 'lamp_6_str_start6'    , value:''},
//     {name: 'свет стратегия 6 стоп1' , scad: 'I205.0N41R8.1V1',      column: 'lamp_6_str_stop1'     , value:''},
//     {name: 'свет стратегия 6 стоп2' , scad: 'I205.0N41R8.1V2',      column: 'lamp_6_str_stop2'     , value:''},
//     {name: 'свет стратегия 6 стоп3' , scad: 'I205.0N41R8.1V3',      column: 'lamp_6_str_stop3'     , value:''},
//     {name: 'свет стратегия 6 стоп4' , scad: 'I205.0N41R8.1V4',      column: 'lamp_6_str_stop4'     , value:''},
//     {name: 'свет стратегия 6 стоп5' , scad: 'I205.0N41R8.1V5',      column: 'lamp_6_str_stop5'     , value:''},
//     {name: 'свет стратегия 6 стоп6' , scad: 'I205.0N41R8.1V6',      column: 'lamp_6_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_7 =[
//     {name: 'свет стратегия 7 вкл1'  , scad: 'I205.0N5R6.1V1',      column: 'lamp_7_str_on1'       , value:''},
//     {name: 'свет стратегия 7 вкл2'  , scad: 'I205.0N5R6.1V2',      column: 'lamp_7_str_on2'       , value:''},
//     {name: 'свет стратегия 7 вкл3'  , scad: 'I205.0N5R6.1V3',      column: 'lamp_7_str_on3'       , value:''},
//     {name: 'свет стратегия 7 вкл4'  , scad: 'I205.0N5R6.1V4',      column: 'lamp_7_str_on4'       , value:''},
//     {name: 'свет стратегия 7 вкл5'  , scad: 'I205.0N5R6.1V5',      column: 'lamp_7_str_on5'       , value:''},
//     {name: 'свет стратегия 7 вкл6'  , scad: 'I205.0N5R6.1V6',      column: 'lamp_7_str_on6'       , value:''},
//     {name: 'свет стратегия 7 старт1', scad: 'I205.0N5R7.1V1',      column: 'lamp_7_str_start1'    , value:''},
//     {name: 'свет стратегия 7 старт2', scad: 'I205.0N5R7.1V2',      column: 'lamp_7_str_start2'    , value:''},
//     {name: 'свет стратегия 7 старт3', scad: 'I205.0N5R7.1V3',      column: 'lamp_7_str_start3'    , value:''},
//     {name: 'свет стратегия 7 старт4', scad: 'I205.0N5R7.1V4',      column: 'lamp_7_str_start4'    , value:''},
//     {name: 'свет стратегия 7 старт5', scad: 'I205.0N5R7.1V5',      column: 'lamp_7_str_start5'    , value:''},
//     {name: 'свет стратегия 7 старт6', scad: 'I205.0N5R7.1V6',      column: 'lamp_7_str_start6'    , value:''},
//     {name: 'свет стратегия 7 стоп1' , scad: 'I205.0N5R8.1V1',      column: 'lamp_7_str_stop1'     , value:''},
//     {name: 'свет стратегия 7 стоп2' , scad: 'I205.0N5R8.1V2',      column: 'lamp_7_str_stop2'     , value:''},
//     {name: 'свет стратегия 7 стоп3' , scad: 'I205.0N5R8.1V3',      column: 'lamp_7_str_stop3'     , value:''},
//     {name: 'свет стратегия 7 стоп4' , scad: 'I205.0N5R8.1V4',      column: 'lamp_7_str_stop4'     , value:''},
//     {name: 'свет стратегия 7 стоп5' , scad: 'I205.0N5R8.1V5',      column: 'lamp_7_str_stop5'     , value:''},
//     {name: 'свет стратегия 7 стоп6' , scad: 'I205.0N5R8.1V6',      column: 'lamp_7_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_8 =[
//     {name: 'свет стратегия 8 вкл1'  , scad: 'I205.0N51R6.1V1',      column: 'lamp_8_str_on1'       , value:''},
//     {name: 'свет стратегия 8 вкл2'  , scad: 'I205.0N51R6.1V2',      column: 'lamp_8_str_on2'       , value:''},
//     {name: 'свет стратегия 8 вкл3'  , scad: 'I205.0N51R6.1V3',      column: 'lamp_8_str_on3'       , value:''},
//     {name: 'свет стратегия 8 вкл4'  , scad: 'I205.0N51R6.1V4',      column: 'lamp_8_str_on4'       , value:''},
//     {name: 'свет стратегия 8 вкл5'  , scad: 'I205.0N51R6.1V5',      column: 'lamp_8_str_on5'       , value:''},
//     {name: 'свет стратегия 8 вкл6'  , scad: 'I205.0N51R6.1V6',      column: 'lamp_8_str_on6'       , value:''},
//     {name: 'свет стратегия 8 старт1', scad: 'I205.0N51R7.1V1',      column: 'lamp_8_str_start1'    , value:''},
//     {name: 'свет стратегия 8 старт2', scad: 'I205.0N51R7.1V2',      column: 'lamp_8_str_start2'    , value:''},
//     {name: 'свет стратегия 8 старт3', scad: 'I205.0N51R7.1V3',      column: 'lamp_8_str_start3'    , value:''},
//     {name: 'свет стратегия 8 старт4', scad: 'I205.0N51R7.1V4',      column: 'lamp_8_str_start4'    , value:''},
//     {name: 'свет стратегия 8 старт5', scad: 'I205.0N51R7.1V5',      column: 'lamp_8_str_start5'    , value:''},
//     {name: 'свет стратегия 8 старт6', scad: 'I205.0N51R7.1V6',      column: 'lamp_8_str_start6'    , value:''},
//     {name: 'свет стратегия 8 стоп1' , scad: 'I205.0N51R8.1V1',      column: 'lamp_8_str_stop1'     , value:''},
//     {name: 'свет стратегия 8 стоп2' , scad: 'I205.0N51R8.1V2',      column: 'lamp_8_str_stop2'     , value:''},
//     {name: 'свет стратегия 8 стоп3' , scad: 'I205.0N51R8.1V3',      column: 'lamp_8_str_stop3'     , value:''},
//     {name: 'свет стратегия 8 стоп4' , scad: 'I205.0N51R8.1V4',      column: 'lamp_8_str_stop4'     , value:''},
//     {name: 'свет стратегия 8 стоп5' , scad: 'I205.0N51R8.1V5',      column: 'lamp_8_str_stop5'     , value:''},
//     {name: 'свет стратегия 8 стоп6' , scad: 'I205.0N51R8.1V6',      column: 'lamp_8_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_9 =[
//     {name: 'свет стратегия 9 вкл1'  , scad: 'I205.0N61R6.1V1',      column: 'lamp_9_str_on1'       , value:''},
//     {name: 'свет стратегия 9 вкл2'  , scad: 'I205.0N61R6.1V2',      column: 'lamp_9_str_on2'       , value:''},
//     {name: 'свет стратегия 9 вкл3'  , scad: 'I205.0N61R6.1V3',      column: 'lamp_9_str_on3'       , value:''},
//     {name: 'свет стратегия 9 вкл4'  , scad: 'I205.0N61R6.1V4',      column: 'lamp_9_str_on4'       , value:''},
//     {name: 'свет стратегия 9 вкл5'  , scad: 'I205.0N61R6.1V5',      column: 'lamp_9_str_on5'       , value:''},
//     {name: 'свет стратегия 9 вкл6'  , scad: 'I205.0N61R6.1V6',      column: 'lamp_9_str_on6'       , value:''},
//     {name: 'свет стратегия 9 старт1', scad: 'I205.0N61R7.1V1',      column: 'lamp_9_str_start1'    , value:''},
//     {name: 'свет стратегия 9 старт2', scad: 'I205.0N61R7.1V2',      column: 'lamp_9_str_start2'    , value:''},
//     {name: 'свет стратегия 9 старт3', scad: 'I205.0N61R7.1V3',      column: 'lamp_9_str_start3'    , value:''},
//     {name: 'свет стратегия 9 старт4', scad: 'I205.0N61R7.1V4',      column: 'lamp_9_str_start4'    , value:''},
//     {name: 'свет стратегия 9 старт5', scad: 'I205.0N61R7.1V5',      column: 'lamp_9_str_start5'    , value:''},
//     {name: 'свет стратегия 9 старт6', scad: 'I205.0N61R7.1V6',      column: 'lamp_9_str_start6'    , value:''},
//     {name: 'свет стратегия 9 стоп1' , scad: 'I205.0N61R8.1V1',      column: 'lamp_9_str_stop1'     , value:''},
//     {name: 'свет стратегия 9 стоп2' , scad: 'I205.0N61R8.1V2',      column: 'lamp_9_str_stop2'     , value:''},
//     {name: 'свет стратегия 9 стоп3' , scad: 'I205.0N61R8.1V3',      column: 'lamp_9_str_stop3'     , value:''},
//     {name: 'свет стратегия 9 стоп4' , scad: 'I205.0N61R8.1V4',      column: 'lamp_9_str_stop4'     , value:''},
//     {name: 'свет стратегия 9 стоп5' , scad: 'I205.0N61R8.1V5',      column: 'lamp_9_str_stop5'     , value:''},
//     {name: 'свет стратегия 9 стоп6' , scad: 'I205.0N61R8.1V6',      column: 'lamp_9_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_10 =[
//     {name: 'свет стратегия 10 вкл1'  , scad: 'I205.0N71R6.1V1',      column: 'lamp_10_str_on1'       , value:''},
//     {name: 'свет стратегия 10 вкл2'  , scad: 'I205.0N71R6.1V2',      column: 'lamp_10_str_on2'       , value:''},
//     {name: 'свет стратегия 10 вкл3'  , scad: 'I205.0N71R6.1V3',      column: 'lamp_10_str_on3'       , value:''},
//     {name: 'свет стратегия 10 вкл4'  , scad: 'I205.0N71R6.1V4',      column: 'lamp_10_str_on4'       , value:''},
//     {name: 'свет стратегия 10 вкл5'  , scad: 'I205.0N71R6.1V5',      column: 'lamp_10_str_on5'       , value:''},
//     {name: 'свет стратегия 10 вкл6'  , scad: 'I205.0N71R6.1V6',      column: 'lamp_10_str_on6'       , value:''},
//     {name: 'свет стратегия 10 старт1', scad: 'I205.0N71R7.1V1',      column: 'lamp_10_str_start1'    , value:''},
//     {name: 'свет стратегия 10 старт2', scad: 'I205.0N71R7.1V2',      column: 'lamp_10_str_start2'    , value:''},
//     {name: 'свет стратегия 10 старт3', scad: 'I205.0N71R7.1V3',      column: 'lamp_10_str_start3'    , value:''},
//     {name: 'свет стратегия 10 старт4', scad: 'I205.0N71R7.1V4',      column: 'lamp_10_str_start4'    , value:''},
//     {name: 'свет стратегия 10 старт5', scad: 'I205.0N71R7.1V5',      column: 'lamp_10_str_start5'    , value:''},
//     {name: 'свет стратегия 10 старт6', scad: 'I205.0N71R7.1V6',      column: 'lamp_10_str_start6'    , value:''},
//     {name: 'свет стратегия 10 стоп1' , scad: 'I205.0N71R8.1V1',      column: 'lamp_10_str_stop1'     , value:''},
//     {name: 'свет стратегия 10 стоп2' , scad: 'I205.0N71R8.1V2',      column: 'lamp_10_str_stop2'     , value:''},
//     {name: 'свет стратегия 10 стоп3' , scad: 'I205.0N71R8.1V3',      column: 'lamp_10_str_stop3'     , value:''},
//     {name: 'свет стратегия 10 стоп4' , scad: 'I205.0N71R8.1V4',      column: 'lamp_10_str_stop4'     , value:''},
//     {name: 'свет стратегия 10 стоп5' , scad: 'I205.0N71R8.1V5',      column: 'lamp_10_str_stop5'     , value:''},
//     {name: 'свет стратегия 10 стоп6' , scad: 'I205.0N71R8.1V6',      column: 'lamp_10_str_stop6'     , value:''},
//
// ]
// const AGRO_light_str_11 =[
//     {name: 'свет стратегия 11 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_11_str_on1'       , value:''},
//     {name: 'свет стратегия 11 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_11_str_on2'       , value:''},
//     {name: 'свет стратегия 11 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_11_str_on3'       , value:''},
//     {name: 'свет стратегия 11 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_11_str_on4'       , value:''},
//     {name: 'свет стратегия 11 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_11_str_on5'       , value:''},
//     {name: 'свет стратегия 11 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_11_str_on6'       , value:''},
//     {name: 'свет стратегия 11 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_11_str_start1'    , value:''},
//     {name: 'свет стратегия 11 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_11_str_start2'    , value:''},
//     {name: 'свет стратегия 11 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_11_str_start3'    , value:''},
//     {name: 'свет стратегия 11 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_11_str_start4'    , value:''},
//     {name: 'свет стратегия 11 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_11_str_start5'    , value:''},
//     {name: 'свет стратегия 11 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_11_str_start6'    , value:''},
//     {name: 'свет стратегия 11 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_11_str_stop1'     , value:''},
//     {name: 'свет стратегия 11 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_11_str_stop2'     , value:''},
//     {name: 'свет стратегия 11 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_11_str_stop3'     , value:''},
//     {name: 'свет стратегия 11 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_11_str_stop4'     , value:''},
//     {name: 'свет стратегия 11 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_11_str_stop5'     , value:''},
//     {name: 'свет стратегия 11 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_11_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_12 =[
//     {name: 'свет стратегия 12 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_12_str_on1'       , value:''},
//     {name: 'свет стратегия 12 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_12_str_on2'       , value:''},
//     {name: 'свет стратегия 12 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_12_str_on3'       , value:''},
//     {name: 'свет стратегия 12 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_12_str_on4'       , value:''},
//     {name: 'свет стратегия 12 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_12_str_on5'       , value:''},
//     {name: 'свет стратегия 12 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_12_str_on6'       , value:''},
//     {name: 'свет стратегия 12 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_12_str_start1'    , value:''},
//     {name: 'свет стратегия 12 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_12_str_start2'    , value:''},
//     {name: 'свет стратегия 12 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_12_str_start3'    , value:''},
//     {name: 'свет стратегия 12 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_12_str_start4'    , value:''},
//     {name: 'свет стратегия 12 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_12_str_start5'    , value:''},
//     {name: 'свет стратегия 12 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_12_str_start6'    , value:''},
//     {name: 'свет стратегия 12 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_12_str_stop1'     , value:''},
//     {name: 'свет стратегия 12 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_12_str_stop2'     , value:''},
//     {name: 'свет стратегия 12 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_12_str_stop3'     , value:''},
//     {name: 'свет стратегия 12 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_12_str_stop4'     , value:''},
//     {name: 'свет стратегия 12 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_12_str_stop5'     , value:''},
//     {name: 'свет стратегия 12 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_12_str_stop6'     , value:''},
// ]
// const AGRO_light_str_13 =[
//     {name: 'свет стратегия 13 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_13_str_on1'       , value:''},
//     {name: 'свет стратегия 13 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_13_str_on2'       , value:''},
//     {name: 'свет стратегия 13 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_13_str_on3'       , value:''},
//     {name: 'свет стратегия 13 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_13_str_on4'       , value:''},
//     {name: 'свет стратегия 13 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_13_str_on5'       , value:''},
//     {name: 'свет стратегия 13 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_13_str_on6'       , value:''},
//     {name: 'свет стратегия 13 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_13_str_start1'    , value:''},
//     {name: 'свет стратегия 13 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_13_str_start2'    , value:''},
//     {name: 'свет стратегия 13 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_13_str_start3'    , value:''},
//     {name: 'свет стратегия 13 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_13_str_start4'    , value:''},
//     {name: 'свет стратегия 13 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_13_str_start5'    , value:''},
//     {name: 'свет стратегия 13 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_13_str_start6'    , value:''},
//     {name: 'свет стратегия 13 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_13_str_stop1'     , value:''},
//     {name: 'свет стратегия 13 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_13_str_stop2'     , value:''},
//     {name: 'свет стратегия 13 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_13_str_stop3'     , value:''},
//     {name: 'свет стратегия 13 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_13_str_stop4'     , value:''},
//     {name: 'свет стратегия 13 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_13_str_stop5'     , value:''},
//     {name: 'свет стратегия 13 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_13_str_stop6'     , value:''},
// ]
// const AGRO_light_str_14 =[
//     {name: 'свет стратегия 14 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_14_str_on1'       , value:''},
//     {name: 'свет стратегия 14 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_14_str_on2'       , value:''},
//     {name: 'свет стратегия 14 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_14_str_on3'       , value:''},
//     {name: 'свет стратегия 14 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_14_str_on4'       , value:''},
//     {name: 'свет стратегия 14 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_14_str_on5'       , value:''},
//     {name: 'свет стратегия 14 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_14_str_on6'       , value:''},
//     {name: 'свет стратегия 14 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_14_str_start1'    , value:''},
//     {name: 'свет стратегия 14 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_14_str_start2'    , value:''},
//     {name: 'свет стратегия 14 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_14_str_start3'    , value:''},
//     {name: 'свет стратегия 14 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_14_str_start4'    , value:''},
//     {name: 'свет стратегия 14 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_14_str_start5'    , value:''},
//     {name: 'свет стратегия 14 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_14_str_start6'    , value:''},
//     {name: 'свет стратегия 14 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_14_str_stop1'     , value:''},
//     {name: 'свет стратегия 14 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_14_str_stop2'     , value:''},
//     {name: 'свет стратегия 14 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_14_str_stop3'     , value:''},
//     {name: 'свет стратегия 14 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_14_str_stop4'     , value:''},
//     {name: 'свет стратегия 14 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_14_str_stop5'     , value:''},
//     {name: 'свет стратегия 14 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_14_str_stop6'     , value:''},
// ]
// const AGRO_light_str_15 =[
//     {name: 'свет стратегия 15 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_15_str_on1'       , value:''},
//     {name: 'свет стратегия 15 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_15_str_on2'       , value:''},
//     {name: 'свет стратегия 15 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_15_str_on3'       , value:''},
//     {name: 'свет стратегия 15 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_15_str_on4'       , value:''},
//     {name: 'свет стратегия 15 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_15_str_on5'       , value:''},
//     {name: 'свет стратегия 15 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_15_str_on6'       , value:''},
//     {name: 'свет стратегия 15 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_15_str_start1'    , value:''},
//     {name: 'свет стратегия 15 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_15_str_start2'    , value:''},
//     {name: 'свет стратегия 15 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_15_str_start3'    , value:''},
//     {name: 'свет стратегия 15 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_15_str_start4'    , value:''},
//     {name: 'свет стратегия 15 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_15_str_start5'    , value:''},
//     {name: 'свет стратегия 15 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_15_str_start6'    , value:''},
//     {name: 'свет стратегия 15 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_15_str_stop1'     , value:''},
//     {name: 'свет стратегия 15 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_15_str_stop2'     , value:''},
//     {name: 'свет стратегия 15 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_15_str_stop3'     , value:''},
//     {name: 'свет стратегия 15 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_15_str_stop4'     , value:''},
//     {name: 'свет стратегия 15 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_15_str_stop5'     , value:''},
//     {name: 'свет стратегия 15 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_15_str_stop6'     , value:''},
// ]
// const AGRO_light_str_16 =[
//     {name: 'свет стратегия 16 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_16_str_on1'       , value:''},
//     {name: 'свет стратегия 16 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_16_str_on2'       , value:''},
//     {name: 'свет стратегия 16 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_16_str_on3'       , value:''},
//     {name: 'свет стратегия 16 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_16_str_on4'       , value:''},
//     {name: 'свет стратегия 16 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_16_str_on5'       , value:''},
//     {name: 'свет стратегия 16 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_16_str_on6'       , value:''},
//     {name: 'свет стратегия 16 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_16_str_start1'    , value:''},
//     {name: 'свет стратегия 16 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_16_str_start2'    , value:''},
//     {name: 'свет стратегия 16 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_16_str_start3'    , value:''},
//     {name: 'свет стратегия 16 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_16_str_start4'    , value:''},
//     {name: 'свет стратегия 16 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_16_str_start5'    , value:''},
//     {name: 'свет стратегия 16 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_16_str_start6'    , value:''},
//     {name: 'свет стратегия 16 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_16_str_stop1'     , value:''},
//     {name: 'свет стратегия 16 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_16_str_stop2'     , value:''},
//     {name: 'свет стратегия 16 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_16_str_stop3'     , value:''},
//     {name: 'свет стратегия 16 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_16_str_stop4'     , value:''},
//     {name: 'свет стратегия 16 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_16_str_stop5'     , value:''},
//     {name: 'свет стратегия 16 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_16_str_stop6'     , value:''},
// ]
// const AGRO_light_str_17 =[
//     {name: 'свет стратегия 17 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_17_str_on1'       , value:''},
//     {name: 'свет стратегия 17 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_17_str_on2'       , value:''},
//     {name: 'свет стратегия 17 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_17_str_on3'       , value:''},
//     {name: 'свет стратегия 17 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_17_str_on4'       , value:''},
//     {name: 'свет стратегия 17 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_17_str_on5'       , value:''},
//     {name: 'свет стратегия 17 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_17_str_on6'       , value:''},
//     {name: 'свет стратегия 17 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_17_str_start1'    , value:''},
//     {name: 'свет стратегия 17 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_17_str_start2'    , value:''},
//     {name: 'свет стратегия 17 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_17_str_start3'    , value:''},
//     {name: 'свет стратегия 17 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_17_str_start4'    , value:''},
//     {name: 'свет стратегия 17 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_17_str_start5'    , value:''},
//     {name: 'свет стратегия 17 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_17_str_start6'    , value:''},
//     {name: 'свет стратегия 17 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_17_str_stop1'     , value:''},
//     {name: 'свет стратегия 17 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_17_str_stop2'     , value:''},
//     {name: 'свет стратегия 17 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_17_str_stop3'     , value:''},
//     {name: 'свет стратегия 17 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_17_str_stop4'     , value:''},
//     {name: 'свет стратегия 17 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_17_str_stop5'     , value:''},
//     {name: 'свет стратегия 17 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_17_str_stop6'     , value:''},
// ]
// const AGRO_light_str_18 =[
//     {name: 'свет стратегия 18 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_18_str_on1'       , value:''},
//     {name: 'свет стратегия 18 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_18_str_on2'       , value:''},
//     {name: 'свет стратегия 18 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_18_str_on3'       , value:''},
//     {name: 'свет стратегия 18 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_18_str_on4'       , value:''},
//     {name: 'свет стратегия 18 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_18_str_on5'       , value:''},
//     {name: 'свет стратегия 18 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_18_str_on6'       , value:''},
//     {name: 'свет стратегия 18 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_18_str_start1'    , value:''},
//     {name: 'свет стратегия 18 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_18_str_start2'    , value:''},
//     {name: 'свет стратегия 18 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_18_str_start3'    , value:''},
//     {name: 'свет стратегия 18 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_18_str_start4'    , value:''},
//     {name: 'свет стратегия 18 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_18_str_start5'    , value:''},
//     {name: 'свет стратегия 18 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_18_str_start6'    , value:''},
//     {name: 'свет стратегия 18 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_18_str_stop1'     , value:''},
//     {name: 'свет стратегия 18 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_18_str_stop2'     , value:''},
//     {name: 'свет стратегия 18 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_18_str_stop3'     , value:''},
//     {name: 'свет стратегия 18 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_18_str_stop4'     , value:''},
//     {name: 'свет стратегия 18 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_18_str_stop5'     , value:''},
//     {name: 'свет стратегия 18 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_18_str_stop6'     , value:''},
// ]
// const AGRO_light_str_19 =[
//     {name: 'свет стратегия 19 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_19_str_on1'       , value:''},
//     {name: 'свет стратегия 19 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_19_str_on2'       , value:''},
//     {name: 'свет стратегия 19 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_19_str_on3'       , value:''},
//     {name: 'свет стратегия 19 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_19_str_on4'       , value:''},
//     {name: 'свет стратегия 19 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_19_str_on5'       , value:''},
//     {name: 'свет стратегия 19 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_19_str_on6'       , value:''},
//     {name: 'свет стратегия 19 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_19_str_start1'    , value:''},
//     {name: 'свет стратегия 19 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_19_str_start2'    , value:''},
//     {name: 'свет стратегия 19 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_19_str_start3'    , value:''},
//     {name: 'свет стратегия 19 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_19_str_start4'    , value:''},
//     {name: 'свет стратегия 19 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_19_str_start5'    , value:''},
//     {name: 'свет стратегия 19 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_19_str_start6'    , value:''},
//     {name: 'свет стратегия 19 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_19_str_stop1'     , value:''},
//     {name: 'свет стратегия 19 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_19_str_stop2'     , value:''},
//     {name: 'свет стратегия 19 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_19_str_stop3'     , value:''},
//     {name: 'свет стратегия 19 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_19_str_stop4'     , value:''},
//     {name: 'свет стратегия 19 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_19_str_stop5'     , value:''},
//     {name: 'свет стратегия 19 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_19_str_stop6'     , value:''},
// ]
// const AGRO_light_str_20 =[
//     {name: 'свет стратегия 20 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_20_str_on1'       , value:''},
//     {name: 'свет стратегия 20 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_20_str_on2'       , value:''},
//     {name: 'свет стратегия 20 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_20_str_on3'       , value:''},
//     {name: 'свет стратегия 20 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_20_str_on4'       , value:''},
//     {name: 'свет стратегия 20 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_20_str_on5'       , value:''},
//     {name: 'свет стратегия 20 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_20_str_on6'       , value:''},
//     {name: 'свет стратегия 20 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_20_str_start1'    , value:''},
//     {name: 'свет стратегия 20 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_20_str_start2'    , value:''},
//     {name: 'свет стратегия 20 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_20_str_start3'    , value:''},
//     {name: 'свет стратегия 20 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_20_str_start4'    , value:''},
//     {name: 'свет стратегия 20 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_20_str_start5'    , value:''},
//     {name: 'свет стратегия 20 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_20_str_start6'    , value:''},
//     {name: 'свет стратегия 20 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_20_str_stop1'     , value:''},
//     {name: 'свет стратегия 20 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_20_str_stop2'     , value:''},
//     {name: 'свет стратегия 20 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_20_str_stop3'     , value:''},
//     {name: 'свет стратегия 20 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_20_str_stop4'     , value:''},
//     {name: 'свет стратегия 20 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_20_str_stop5'     , value:''},
//     {name: 'свет стратегия 20 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_20_str_stop6'     , value:''},
// ]
// const AGRO_light_str_21 =[
//     {name: 'свет стратегия 21 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_21_str_on1'       , value:''},
//     {name: 'свет стратегия 21 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_21_str_on2'       , value:''},
//     {name: 'свет стратегия 21 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_21_str_on3'       , value:''},
//     {name: 'свет стратегия 21 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_21_str_on4'       , value:''},
//     {name: 'свет стратегия 21 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_21_str_on5'       , value:''},
//     {name: 'свет стратегия 21 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_21_str_on6'       , value:''},
//     {name: 'свет стратегия 21 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_21_str_start1'    , value:''},
//     {name: 'свет стратегия 21 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_21_str_start2'    , value:''},
//     {name: 'свет стратегия 21 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_21_str_start3'    , value:''},
//     {name: 'свет стратегия 21 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_21_str_start4'    , value:''},
//     {name: 'свет стратегия 21 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_21_str_start5'    , value:''},
//     {name: 'свет стратегия 21 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_21_str_start6'    , value:''},
//     {name: 'свет стратегия 21 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_21_str_stop1'     , value:''},
//     {name: 'свет стратегия 21 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_21_str_stop2'     , value:''},
//     {name: 'свет стратегия 21 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_21_str_stop3'     , value:''},
//     {name: 'свет стратегия 21 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_21_str_stop4'     , value:''},
//     {name: 'свет стратегия 21 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_21_str_stop5'     , value:''},
//     {name: 'свет стратегия 21 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_21_str_stop6'     , value:''},
// ]
// const AGRO_light_str_22 =[
//     {name: 'свет стратегия 22 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_22_str_on1'       , value:''},
//     {name: 'свет стратегия 22 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_22_str_on2'       , value:''},
//     {name: 'свет стратегия 22 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_22_str_on3'       , value:''},
//     {name: 'свет стратегия 22 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_22_str_on4'       , value:''},
//     {name: 'свет стратегия 22 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_22_str_on5'       , value:''},
//     {name: 'свет стратегия 22 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_22_str_on6'       , value:''},
//     {name: 'свет стратегия 22 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_22_str_start1'    , value:''},
//     {name: 'свет стратегия 22 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_22_str_start2'    , value:''},
//     {name: 'свет стратегия 22 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_22_str_start3'    , value:''},
//     {name: 'свет стратегия 22 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_22_str_start4'    , value:''},
//     {name: 'свет стратегия 22 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_22_str_start5'    , value:''},
//     {name: 'свет стратегия 22 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_22_str_start6'    , value:''},
//     {name: 'свет стратегия 22 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_22_str_stop1'     , value:''},
//     {name: 'свет стратегия 22 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_22_str_stop2'     , value:''},
//     {name: 'свет стратегия 22 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_22_str_stop3'     , value:''},
//     {name: 'свет стратегия 22 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_22_str_stop4'     , value:''},
//     {name: 'свет стратегия 22 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_22_str_stop5'     , value:''},
//     {name: 'свет стратегия 22 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_22_str_stop6'     , value:''},
// ]
// const AGRO_light_str_23 =[
//     {name: 'свет стратегия 23 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_23_str_on1'       , value:''},
//     {name: 'свет стратегия 23 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_23_str_on2'       , value:''},
//     {name: 'свет стратегия 23 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_23_str_on3'       , value:''},
//     {name: 'свет стратегия 23 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_23_str_on4'       , value:''},
//     {name: 'свет стратегия 23 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_23_str_on5'       , value:''},
//     {name: 'свет стратегия 23 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_23_str_on6'       , value:''},
//     {name: 'свет стратегия 23 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_23_str_start1'    , value:''},
//     {name: 'свет стратегия 23 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_23_str_start2'    , value:''},
//     {name: 'свет стратегия 23 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_23_str_start3'    , value:''},
//     {name: 'свет стратегия 23 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_23_str_start4'    , value:''},
//     {name: 'свет стратегия 23 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_23_str_start5'    , value:''},
//     {name: 'свет стратегия 23 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_23_str_start6'    , value:''},
//     {name: 'свет стратегия 23 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_23_str_stop1'     , value:''},
//     {name: 'свет стратегия 23 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_23_str_stop2'     , value:''},
//     {name: 'свет стратегия 23 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_23_str_stop3'     , value:''},
//     {name: 'свет стратегия 23 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_23_str_stop4'     , value:''},
//     {name: 'свет стратегия 23 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_23_str_stop5'     , value:''},
//     {name: 'свет стратегия 23 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_23_str_stop6'     , value:''},
// ]
// const AGRO_light_str_24 =[
//     {name: 'свет стратегия 24 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_24_str_on1'       , value:''},
//     {name: 'свет стратегия 24 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_24_str_on2'       , value:''},
//     {name: 'свет стратегия 24 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_24_str_on3'       , value:''},
//     {name: 'свет стратегия 24 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_24_str_on4'       , value:''},
//     {name: 'свет стратегия 24 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_24_str_on5'       , value:''},
//     {name: 'свет стратегия 24 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_24_str_on6'       , value:''},
//     {name: 'свет стратегия 24 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_24_str_start1'    , value:''},
//     {name: 'свет стратегия 24 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_24_str_start2'    , value:''},
//     {name: 'свет стратегия 24 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_24_str_start3'    , value:''},
//     {name: 'свет стратегия 24 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_24_str_start4'    , value:''},
//     {name: 'свет стратегия 24 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_24_str_start5'    , value:''},
//     {name: 'свет стратегия 24 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_24_str_start6'    , value:''},
//     {name: 'свет стратегия 24 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_24_str_stop1'     , value:''},
//     {name: 'свет стратегия 24 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_24_str_stop2'     , value:''},
//     {name: 'свет стратегия 24 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_24_str_stop3'     , value:''},
//     {name: 'свет стратегия 24 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_24_str_stop4'     , value:''},
//     {name: 'свет стратегия 24 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_24_str_stop5'     , value:''},
//     {name: 'свет стратегия 24 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_24_str_stop6'     , value:''},
// ]
// const AGRO_light_str_25 =[
//     {name: 'свет стратегия 25 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_25_str_on1'       , value:''},
//     {name: 'свет стратегия 25 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_25_str_on2'       , value:''},
//     {name: 'свет стратегия 25 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_25_str_on3'       , value:''},
//     {name: 'свет стратегия 25 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_25_str_on4'       , value:''},
//     {name: 'свет стратегия 25 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_25_str_on5'       , value:''},
//     {name: 'свет стратегия 25 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_25_str_on6'       , value:''},
//     {name: 'свет стратегия 25 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_25_str_start1'    , value:''},
//     {name: 'свет стратегия 25 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_25_str_start2'    , value:''},
//     {name: 'свет стратегия 25 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_25_str_start3'    , value:''},
//     {name: 'свет стратегия 25 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_25_str_start4'    , value:''},
//     {name: 'свет стратегия 25 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_25_str_start5'    , value:''},
//     {name: 'свет стратегия 25 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_25_str_start6'    , value:''},
//     {name: 'свет стратегия 25 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_25_str_stop1'     , value:''},
//     {name: 'свет стратегия 25 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_25_str_stop2'     , value:''},
//     {name: 'свет стратегия 25 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_25_str_stop3'     , value:''},
//     {name: 'свет стратегия 25 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_25_str_stop4'     , value:''},
//     {name: 'свет стратегия 25 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_25_str_stop5'     , value:''},
//     {name: 'свет стратегия 25 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_25_str_stop6'     , value:''},
// ]
// const AGRO_light_str_26 =[
//     {name: 'свет стратегия 26 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_26_str_on1'       , value:''},
//     {name: 'свет стратегия 26 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_26_str_on2'       , value:''},
//     {name: 'свет стратегия 26 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_26_str_on3'       , value:''},
//     {name: 'свет стратегия 26 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_26_str_on4'       , value:''},
//     {name: 'свет стратегия 26 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_26_str_on5'       , value:''},
//     {name: 'свет стратегия 26 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_26_str_on6'       , value:''},
//     {name: 'свет стратегия 26 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_26_str_start1'    , value:''},
//     {name: 'свет стратегия 26 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_26_str_start2'    , value:''},
//     {name: 'свет стратегия 26 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_26_str_start3'    , value:''},
//     {name: 'свет стратегия 26 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_26_str_start4'    , value:''},
//     {name: 'свет стратегия 26 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_26_str_start5'    , value:''},
//     {name: 'свет стратегия 26 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_26_str_start6'    , value:''},
//     {name: 'свет стратегия 26 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_26_str_stop1'     , value:''},
//     {name: 'свет стратегия 26 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_26_str_stop2'     , value:''},
//     {name: 'свет стратегия 26 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_26_str_stop3'     , value:''},
//     {name: 'свет стратегия 26 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_26_str_stop4'     , value:''},
//     {name: 'свет стратегия 26 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_26_str_stop5'     , value:''},
//     {name: 'свет стратегия 26 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_26_str_stop6'     , value:''},
// ]
// const AGRO_light_str_27 =[
//     {name: 'свет стратегия 27 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_27_str_on1'       , value:''},
//     {name: 'свет стратегия 27 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_27_str_on2'       , value:''},
//     {name: 'свет стратегия 27 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_27_str_on3'       , value:''},
//     {name: 'свет стратегия 27 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_27_str_on4'       , value:''},
//     {name: 'свет стратегия 27 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_27_str_on5'       , value:''},
//     {name: 'свет стратегия 27 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_27_str_on6'       , value:''},
//     {name: 'свет стратегия 27 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_27_str_start1'    , value:''},
//     {name: 'свет стратегия 27 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_27_str_start2'    , value:''},
//     {name: 'свет стратегия 27 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_27_str_start3'    , value:''},
//     {name: 'свет стратегия 27 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_27_str_start4'    , value:''},
//     {name: 'свет стратегия 27 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_27_str_start5'    , value:''},
//     {name: 'свет стратегия 27 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_27_str_start6'    , value:''},
//     {name: 'свет стратегия 27 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_27_str_stop1'     , value:''},
//     {name: 'свет стратегия 27 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_27_str_stop3'     , value:''},
//     {name: 'свет стратегия 27 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_27_str_stop4'     , value:''},
//     {name: 'свет стратегия 27 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_27_str_stop5'     , value:''},
//     {name: 'свет стратегия 27 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_27_str_stop6'     , value:''},
// ]
// const AGRO_light_str_28 =[
//     {name: 'свет стратегия 28 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_28_str_on1'       , value:''},
//     {name: 'свет стратегия 28 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_28_str_on2'       , value:''},
//     {name: 'свет стратегия 28 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_28_str_on3'       , value:''},
//     {name: 'свет стратегия 28 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_28_str_on4'       , value:''},
//     {name: 'свет стратегия 28 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_28_str_on5'       , value:''},
//     {name: 'свет стратегия 28 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_28_str_on6'       , value:''},
//     {name: 'свет стратегия 28 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_28_str_start1'    , value:''},
//     {name: 'свет стратегия 28 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_28_str_start2'    , value:''},
//     {name: 'свет стратегия 28 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_28_str_start3'    , value:''},
//     {name: 'свет стратегия 28 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_28_str_start4'    , value:''},
//     {name: 'свет стратегия 28 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_28_str_start5'    , value:''},
//     {name: 'свет стратегия 28 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_28_str_start6'    , value:''},
//     {name: 'свет стратегия 28 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_28_str_stop1'     , value:''},
//     {name: 'свет стратегия 28 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_28_str_stop3'     , value:''},
//     {name: 'свет стратегия 28 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_28_str_stop4'     , value:''},
//     {name: 'свет стратегия 28 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_28_str_stop5'     , value:''},
//     {name: 'свет стратегия 28 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_28_str_stop6'     , value:''},
// ]
//
//
// const SunRise =[
//     {name: 'восход'  , scad: 'M4.0N1R18.1V1',      column: 'sunrise'       , value:''},
//     {name: 'закат'   , scad: 'M4.0N1R18.1V2',      column: 'sunset'        , value:''},
// ]


module.exports = {  commonAGRO_12, commonAGRO_34, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12,
    // AGRO_water, AGRO2_water, AGRO3_water, AGRO4_water,  AGRO5_water, AGRO6_water, AGRO7_water, AGRO8_water,
    // AGRO2_1_co2, AGRO2_2_co2, AGRO2_3_co2, AGRO2_4_co2, AGRO_5_co2, AGRO_6_co2, AGRO_7_co2,  AGRO3_8_co2, AGRO3_9_co2,  AGRO4_10_co2, AGRO4_11_co2,
    // AGRO6_12_co2, AGRO6_13_co2, AGRO6_14_co2, AGRO6_15_co2, AGRO5_16_co2, AGRO5_17_co2, AGRO5_18_co2,  AGRO5_19_co2, AGRO5_20_co2,
    // AGRO7_21_co2, AGRO7_22_co2, AGRO7_23_co2, AGRO7_24_co2, AGRO8_25_co2,  AGRO8_26_co2,  AGRO8_27_co2,  AGRO8_28_co2,
    // AGRO_light, AGRO2_light, AGRO3_light, AGRO4_light, // AGRO5_light, AGRO6_light, AGRO7_light, AGRO8_light,
    // AGRO_light_str_1, AGRO_light_str_2, AGRO_light_str_3, AGRO_light_str_4, AGRO_light_str_5, AGRO_light_str_6,
    // AGRO_light_str_7, AGRO_light_str_8, AGRO_light_str_9, AGRO_light_str_10, AGRO_light_str_11,
    // AGRO_light_str_12, AGRO_light_str_13, AGRO_light_str_14, AGRO_light_str_15, AGRO_light_str_16, AGRO_light_str_17, AGRO_light_str_18,
    // AGRO_light_str_19, AGRO_light_str_20, AGRO_light_str_21, AGRO_light_str_22, AGRO_light_str_23, AGRO_light_str_24, AGRO_light_str_25,
    // AGRO_light_str_26, AGRO_light_str_27, AGRO_light_str_28,
    //
    // SunRise,
}



