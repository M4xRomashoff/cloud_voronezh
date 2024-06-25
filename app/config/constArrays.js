

const commonAGRO_12 =[
    {name: 'наружная темп'          , scad: 'M100.0N1R1.1V1' , column: 'out_t'          , value:'', dataType: 'temperature'},
    {name: 'скорость ветра '        , scad: 'M100.0N1R1.1V2' , column: 'wind_speed'     , value:'', dataType: 'wind'},
    {name: 'направление ветра '     , scad: 'M100.0N1R1.1V3' , column: 'wind_dir'       , value:'', dataType: 'wind'},
    {name: 'освещенность '          , scad: 'M100.0N1R1.1V4' , column: 'light'          , value:'', dataType: 'light'},
    {name: 'сумма освещенности'     , scad: 'M100.0N1R1.1V5' , column: 'out_sum_light1' , value:'', dataType: 'light'},
]

const commonAGRO_345 =[
    {name: 'наружная темп'          , scad: 'M100.0N1R1.1V1' , column: 'out_t'          , value:'', dataType: 'temperature'},
    {name: 'скорость ветра '        , scad: 'M100.0N1R1.1V2' , column: 'wind_speed'     , value:'', dataType: 'wind'},
    {name: 'направление ветра '     , scad: 'M100.0N1R1.1V3' , column: 'wind_dir'       , value:'', dataType: 'wind'},
    {name: 'освещенность '          , scad: 'M100.0N1R1.1V4' , column: 'light'          , value:'', dataType: 'light'},
    {name: 'сумма освещенности'     , scad: 'M100.0N1R1.1V5' , column: 'out_sum_light1' , value:'', dataType: 'light'},
]


const T1 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.111V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 111 температура 1', scad: 'M100.0N1R2.111V1',   column: 'section111_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 111 ОВ',            scad: 'M100.0N1R2.111V2',   column: 'section111_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 111 ДВ',            scad: 'M100.0N1R2.111V3',   column: 'section111_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 111 расч.темп. ',   scad: 'M100.0N1R4.111V1',   column: 'section111_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 111 расч.отопл.',   scad: 'M100.0N1R4.111V3',   column: 'section111_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 112 температура 1', scad: 'M100.0N1R2.112V1',   column: 'section112_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 112 ОВ',            scad: 'M100.0N1R2.112V2',   column: 'section112_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 112 ДВ',            scad: 'M100.0N1R2.112V3',   column: 'section112_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 112 расч.темп. ',   scad: 'M100.0N1R4.112V1',   column: 'section112_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 112 расч.отопл.',   scad: 'M100.0N1R4.112V3',   column: 'section112_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 113 температура 1', scad: 'M100.0N1R2.113V1',   column: 'section113_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 113 ОВ',            scad: 'M100.0N1R2.113V2',   column: 'section113_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 113 ДВ',            scad: 'M100.0N1R2.113V3',   column: 'section113_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 113 расч.темп. ',   scad: 'M100.0N1R4.113V1',   column: 'section113_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 113 расч.отопл.',   scad: 'M100.0N1R4.113V3',   column: 'section113_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 114 температура 1', scad: 'M100.0N1R2.114V1',   column: 'section114_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 114 ОВ',            scad: 'M100.0N1R2.114V2',   column: 'section114_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 114 ДВ',            scad: 'M100.0N1R2.114V3',   column: 'section114_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 114 расч.темп. ',   scad: 'M100.0N1R4.114V1',   column: 'section114_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 114 расч.отопл.',   scad: 'M100.0N1R4.114V3',   column: 'section114_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 115 температура 1', scad: 'M100.0N1R2.115V1',   column: 'section115_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 115 ОВ',            scad: 'M100.0N1R2.115V2',   column: 'section115_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 115 ДВ',            scad: 'M100.0N1R2.115V3',   column: 'section115_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 115 расч.темп. ',   scad: 'M100.0N1R4.115V1',   column: 'section115_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 115 расч.отопл.',   scad: 'M100.0N1R4.115V3',   column: 'section115_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 116 температура 1', scad: 'M100.0N1R2.116V1',   column: 'section116_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 116 ОВ',            scad: 'M100.0N1R2.116V2',   column: 'section116_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 116 ДВ',            scad: 'M100.0N1R2.116V3',   column: 'section116_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 116 расч.темп. ',   scad: 'M100.0N1R4.116V1',   column: 'section116_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 116 расч.отопл.',   scad: 'M100.0N1R4.116V3',   column: 'section116_th',  value:'', dataType: 'temperature'},


]

const T2 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.121V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 121 температура 1', scad: 'M100.0N1R2.121V1',   column: 'section121_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 121 ОВ',            scad: 'M100.0N1R2.121V2',   column: 'section121_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 121 ДВ',            scad: 'M100.0N1R2.121V3',   column: 'section121_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 121 расч.темп. ',   scad: 'M100.0N1R4.121V1',   column: 'section121_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 121 расч.отопл.',   scad: 'M100.0N1R4.121V3',   column: 'section121_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 122 температура 1', scad: 'M100.0N1R2.122V1',   column: 'section122_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 122 ОВ',            scad: 'M100.0N1R2.122V2',   column: 'section122_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 122 ДВ',            scad: 'M100.0N1R2.122V3',   column: 'section122_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 122 расч.темп. ',   scad: 'M100.0N1R4.122V1',   column: 'section122_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 122 расч.отопл.',   scad: 'M100.0N1R4.122V3',   column: 'section122_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 123 температура 1', scad: 'M100.0N1R2.123V1',   column: 'section123_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 123 ОВ',            scad: 'M100.0N1R2.123V2',   column: 'section123_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 123 ДВ',            scad: 'M100.0N1R2.123V3',   column: 'section123_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 123 расч.темп. ',   scad: 'M100.0N1R4.123V1',   column: 'section123_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 123 расч.отопл.',   scad: 'M100.0N1R4.123V3',   column: 'section123_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 124 температура 1', scad: 'M100.0N1R2.124V1',   column: 'section124_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 124 ОВ',            scad: 'M100.0N1R2.124V2',   column: 'section124_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 124 ДВ',            scad: 'M100.0N1R2.124V3',   column: 'section124_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 124 расч.темп. ',   scad: 'M100.0N1R4.124V1',   column: 'section124_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 124 расч.отопл.',   scad: 'M100.0N1R4.124V3',   column: 'section124_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 125 температура 1', scad: 'M100.0N1R2.125V1',   column: 'section125_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 125 ОВ',            scad: 'M100.0N1R2.125V2',   column: 'section125_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 125 ДВ',            scad: 'M100.0N1R2.125V3',   column: 'section125_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 125 расч.темп. ',   scad: 'M100.0N1R4.125V1',   column: 'section125_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 125 расч.отопл.',   scad: 'M100.0N1R4.125V3',   column: 'section125_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 126 температура 1', scad: 'M100.0N1R2.126V1',   column: 'section126_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 126 ОВ',            scad: 'M100.0N1R2.126V2',   column: 'section126_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 126 ДВ',            scad: 'M100.0N1R2.126V3',   column: 'section126_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 126 расч.темп. ',   scad: 'M100.0N1R4.126V1',   column: 'section126_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 126 расч.отопл.',   scad: 'M100.0N1R4.126V3',   column: 'section126_th',  value:'', dataType: 'temperature'},
]

const T3 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.212V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 211 температура 1', scad: 'M100.0N1R2.211V1',   column: 'section211_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 211 ОВ',            scad: 'M100.0N1R2.211V2',   column: 'section211_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 211 ДВ',            scad: 'M100.0N1R2.211V3',   column: 'section211_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 211 расч.темп. ',   scad: 'M100.0N1R4.211V1',   column: 'section211_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 211 расч.отопл.',   scad: 'M100.0N1R4.211V3',   column: 'section211_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 212 температура 1', scad: 'M100.0N1R2.212V1',   column: 'section212_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 212 ОВ',            scad: 'M100.0N1R2.212V2',   column: 'section212_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 212 ДВ',            scad: 'M100.0N1R2.212V3',   column: 'section212_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 212 расч.темп. ',   scad: 'M100.0N1R4.212V1',   column: 'section212_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 212 расч.отопл.',   scad: 'M100.0N1R4.212V3',   column: 'section212_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 213 температура 1', scad: 'M100.0N1R2.213V1',   column: 'section213_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 213 ОВ',            scad: 'M100.0N1R2.213V2',   column: 'section213_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 213 ДВ',            scad: 'M100.0N1R2.213V3',   column: 'section213_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 213 расч.темп. ',   scad: 'M100.0N1R4.213V1',   column: 'section213_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 213 расч.отопл.',   scad: 'M100.0N1R4.213V3',   column: 'section213_th',  value:'', dataType: 'temperature'},


]

const T4 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.215V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 214 температура 1', scad: 'M100.0N1R2.214V1',   column: 'section214_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 214 ОВ',            scad: 'M100.0N1R2.214V2',   column: 'section214_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 214 ДВ',            scad: 'M100.0N1R2.214V3',   column: 'section214_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 214 расч.темп. ',   scad: 'M100.0N1R4.214V1',   column: 'section214_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 214 расч.отопл.',   scad: 'M100.0N1R4.214V3',   column: 'section214_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 215 температура 1', scad: 'M100.0N1R2.215V1',   column: 'section215_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 215 ОВ',            scad: 'M100.0N1R2.215V2',   column: 'section215_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 215 ДВ',            scad: 'M100.0N1R2.215V3',   column: 'section215_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 215 расч.темп. ',   scad: 'M100.0N1R4.215V1',   column: 'section215_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 215 расч.отопл.',   scad: 'M100.0N1R4.215V3',   column: 'section215_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 216 температура 1', scad: 'M100.0N1R2.216V1',   column: 'section216_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 216 ОВ',            scad: 'M100.0N1R2.216V2',   column: 'section216_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 216 ДВ',            scad: 'M100.0N1R2.216V3',   column: 'section216_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 216 расч.темп. ',   scad: 'M100.0N1R4.216V1',   column: 'section216_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 216 расч.отопл.',   scad: 'M100.0N1R4.216V3',   column: 'section216_th',  value:'', dataType: 'temperature'},


]

const T5 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.222V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 221 температура 1', scad: 'M100.0N1R2.221V1',   column: 'section221_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 221 ОВ',            scad: 'M100.0N1R2.221V2',   column: 'section221_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 221 ДВ',            scad: 'M100.0N1R2.221V3',   column: 'section221_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 221 расч.темп. ',   scad: 'M100.0N1R4.221V1',   column: 'section221_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 221 расч.отопл.',   scad: 'M100.0N1R4.221V3',   column: 'section221_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 222 температура 1', scad: 'M100.0N1R2.222V1',   column: 'section222_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 222 ОВ',            scad: 'M100.0N1R2.222V2',   column: 'section222_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 222 ДВ',            scad: 'M100.0N1R2.222V3',   column: 'section222_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 222 расч.темп. ',   scad: 'M100.0N1R4.222V1',   column: 'section222_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 222 расч.отопл.',   scad: 'M100.0N1R4.222V3',   column: 'section222_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 223 температура 1', scad: 'M100.0N1R2.223V1',   column: 'section223_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 223 ОВ',            scad: 'M100.0N1R2.223V2',   column: 'section223_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 223 ДВ',            scad: 'M100.0N1R2.223V3',   column: 'section223_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 223 расч.темп. ',   scad: 'M100.0N1R4.223V1',   column: 'section223_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 223 расч.отопл.',   scad: 'M100.0N1R4.223V3',   column: 'section223_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 224 температура 1', scad: 'M100.0N1R2.224V1',   column: 'section224_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 224 ОВ',            scad: 'M100.0N1R2.224V2',   column: 'section224_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 224 ДВ',            scad: 'M100.0N1R2.224V3',   column: 'section224_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 224 расч.темп. ',   scad: 'M100.0N1R4.224V1',   column: 'section224_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 224 расч.отопл.',   scad: 'M100.0N1R4.224V3',   column: 'section224_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 225 температура 1', scad: 'M100.0N1R2.225V1',   column: 'section225_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 225 ОВ',            scad: 'M100.0N1R2.225V2',   column: 'section225_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 225 ДВ',            scad: 'M100.0N1R2.225V3',   column: 'section225_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 225 расч.темп. ',   scad: 'M100.0N1R4.225V1',   column: 'section225_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 225 расч.отопл.',   scad: 'M100.0N1R4.225V3',   column: 'section225_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 226 температура 1', scad: 'M100.0N1R2.226V1',   column: 'section226_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 226 ОВ',            scad: 'M100.0N1R2.226V2',   column: 'section226_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 226 ДВ',            scad: 'M100.0N1R2.226V3',   column: 'section226_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 226 расч.темп. ',   scad: 'M100.0N1R4.226V1',   column: 'section226_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 226 расч.отопл.',   scad: 'M100.0N1R4.226V3',   column: 'section226_th',  value:'', dataType: 'temperature'},

]

const T6 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.311V5',    column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 311 температура 1', scad: 'M100.0N1R2.311V1',   column: 'section311_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 311 ОВ',            scad: 'M100.0N1R2.311V2',   column: 'section311_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 311 ДВ',            scad: 'M100.0N1R2.311V3',   column: 'section311_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 311 расч.темп. ',   scad: 'M100.0N1R4.311V1',   column: 'section311_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 311 расч.отопл.',   scad: 'M100.0N1R4.311V3',   column: 'section311_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 312 температура 1', scad: 'M100.0N1R2.312V1',   column: 'section312_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 312 ОВ',            scad: 'M100.0N1R2.312V2',   column: 'section312_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 312 ДВ',            scad: 'M100.0N1R2.312V3',   column: 'section312_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 312 расч.темп. ',   scad: 'M100.0N1R4.312V1',   column: 'section312_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 312 расч.отопл.',   scad: 'M100.0N1R4.312V3',   column: 'section312_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 313 температура 1', scad: 'M100.0N1R2.313V1',   column: 'section313_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 313 ОВ',            scad: 'M100.0N1R2.313V2',   column: 'section313_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 313 ДВ',            scad: 'M100.0N1R2.313V3',   column: 'section313_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 313 расч.темп. ',   scad: 'M100.0N1R4.313V1',   column: 'section313_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 313 расч.отопл.',   scad: 'M100.0N1R4.313V3',   column: 'section313_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 314 температура 1', scad: 'M100.0N1R2.314V1',   column: 'section314_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 314 ОВ',            scad: 'M100.0N1R2.314V2',   column: 'section314_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 314 ДВ',            scad: 'M100.0N1R2.314V3',   column: 'section314_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 314 расч.темп. ',   scad: 'M100.0N1R4.314V1',   column: 'section314_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 314 расч.отопл.',   scad: 'M100.0N1R4.314V3',   column: 'section314_th',  value:'', dataType: 'temperature'},

]

const T7 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.321V5',    column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 321 температура 1', scad: 'M100.0N1R2.321V1',   column: 'section321_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 321 ОВ',            scad: 'M100.0N1R2.321V2',   column: 'section321_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 321 ДВ',            scad: 'M100.0N1R2.321V3',   column: 'section321_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 321 расч.темп. ',   scad: 'M100.0N1R4.321V1',   column: 'section321_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 321 расч.отопл.',   scad: 'M100.0N1R4.321V3',   column: 'section321_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 322 температура 1', scad: 'M100.0N1R2.322V1',   column: 'section322_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 322 ОВ',            scad: 'M100.0N1R2.322V2',   column: 'section322_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 322 ДВ',            scad: 'M100.0N1R2.322V3',   column: 'section322_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 322 расч.темп. ',   scad: 'M100.0N1R4.322V1',   column: 'section322_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 322 расч.отопл.',   scad: 'M100.0N1R4.322V3',   column: 'section322_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 323 температура 1', scad: 'M100.0N1R2.323V1',   column: 'section323_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 323 ОВ',            scad: 'M100.0N1R2.323V2',   column: 'section323_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 323 ДВ',            scad: 'M100.0N1R2.323V3',   column: 'section323_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 323 расч.темп. ',   scad: 'M100.0N1R4.323V1',   column: 'section323_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 323 расч.отопл.',   scad: 'M100.0N1R4.323V3',   column: 'section323_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 324 температура 1', scad: 'M100.0N1R2.324V1',   column: 'section324_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 324 ОВ',            scad: 'M100.0N1R2.324V2',   column: 'section324_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 324 ДВ',            scad: 'M100.0N1R2.324V3',   column: 'section324_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 324 расч.темп. ',   scad: 'M100.0N1R4.324V1',   column: 'section324_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 324 расч.отопл.',   scad: 'M100.0N1R4.324V3',   column: 'section324_th',  value:'', dataType: 'temperature'},

]

const T8 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.612V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 611 температура 1', scad: 'M100.0N1R2.611V1',   column: 'section611_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 611 ОВ',            scad: 'M100.0N1R2.611V2',   column: 'section611_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 611 ДВ',            scad: 'M100.0N1R2.611V3',   column: 'section611_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 611 расч.темп. ',   scad: 'M100.0N1R4.611V1',   column: 'section611_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 611 расч.отопл.',   scad: 'M100.0N1R4.611V3',   column: 'section611_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 612 температура 1', scad: 'M100.0N1R2.612V1',   column: 'section612_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 612 ОВ',            scad: 'M100.0N1R2.612V2',   column: 'section612_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 612 ДВ',            scad: 'M100.0N1R2.612V3',   column: 'section612_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 612 расч.темп. ',   scad: 'M100.0N1R4.612V1',   column: 'section612_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 612 расч.отопл.',   scad: 'M100.0N1R4.612V3',   column: 'section612_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 613 температура 1', scad: 'M100.0N1R2.613V1',   column: 'section613_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 613 ОВ',            scad: 'M100.0N1R2.613V2',   column: 'section613_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 613 ДВ',            scad: 'M100.0N1R2.613V3',   column: 'section613_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 613 расч.темп. ',   scad: 'M100.0N1R4.613V1',   column: 'section613_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 613 расч.отопл.',   scad: 'M100.0N1R4.613V3',   column: 'section613_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 614 температура 1', scad: 'M100.0N1R2.614V1',   column: 'section614_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 614 ОВ',            scad: 'M100.0N1R2.614V2',   column: 'section614_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 614 ДВ',            scad: 'M100.0N1R2.614V3',   column: 'section614_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 614 расч.темп. ',   scad: 'M100.0N1R4.614V1',   column: 'section614_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 614 расч.отопл.',   scad: 'M100.0N1R4.614V3',   column: 'section614_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 615 температура 1', scad: 'M100.0N1R2.615V1',   column: 'section615_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 615 ОВ',            scad: 'M100.0N1R2.615V2',   column: 'section615_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 615 ДВ',            scad: 'M100.0N1R2.615V3',   column: 'section615_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 615 расч.темп. ',   scad: 'M100.0N1R4.615V1',   column: 'section615_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 615 расч.отопл.',   scad: 'M100.0N1R4.615V3',   column: 'section615_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 616 температура 1', scad: 'M100.0N1R2.616V1',   column: 'section616_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 616 ОВ',            scad: 'M100.0N1R2.616V2',   column: 'section616_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 616 ДВ',            scad: 'M100.0N1R2.616V3',   column: 'section616_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 616 расч.темп. ',   scad: 'M100.0N1R4.616V1',   column: 'section616_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 616 расч.отопл.',   scad: 'M100.0N1R4.616V3',   column: 'section616_th',  value:'', dataType: 'temperature'},

]

const T9 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.622V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 621 температура 1', scad: 'M100.0N1R2.621V1',   column: 'section621_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 621 ОВ',            scad: 'M100.0N1R2.621V2',   column: 'section621_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 621 ДВ',            scad: 'M100.0N1R2.621V3',   column: 'section621_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 621 расч.темп. ',   scad: 'M100.0N1R4.621V1',   column: 'section621_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 621 расч.отопл.',   scad: 'M100.0N1R4.621V3',   column: 'section621_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 622 температура 1', scad: 'M100.0N1R2.622V1',   column: 'section622_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 622 ОВ',            scad: 'M100.0N1R2.622V2',   column: 'section622_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 622 ДВ',            scad: 'M100.0N1R2.622V3',   column: 'section622_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 622 расч.темп. ',   scad: 'M100.0N1R4.622V1',   column: 'section622_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 622 расч.отопл.',   scad: 'M100.0N1R4.622V3',   column: 'section622_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 623 температура 1', scad: 'M100.0N1R2.623V1',   column: 'section623_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 623 ОВ',            scad: 'M100.0N1R2.623V2',   column: 'section623_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 623 ДВ',            scad: 'M100.0N1R2.623V3',   column: 'section623_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 623 расч.темп. ',   scad: 'M100.0N1R4.623V1',   column: 'section623_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 623 расч.отопл.',   scad: 'M100.0N1R4.623V3',   column: 'section623_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 624 температура 1', scad: 'M100.0N1R2.624V1',   column: 'section624_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 624 ОВ',            scad: 'M100.0N1R2.624V2',   column: 'section624_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 624 ДВ',            scad: 'M100.0N1R2.624V3',   column: 'section624_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 624 расч.темп. ',   scad: 'M100.0N1R4.624V1',   column: 'section624_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 624 расч.отопл.',   scad: 'M100.0N1R4.624V3',   column: 'section624_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 625 температура 1', scad: 'M100.0N1R2.625V1',   column: 'section625_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 625 ОВ',            scad: 'M100.0N1R2.625V2',   column: 'section625_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 625 ДВ',            scad: 'M100.0N1R2.625V3',   column: 'section625_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 625 расч.темп. ',   scad: 'M100.0N1R4.625V1',   column: 'section625_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 625 расч.отопл.',   scad: 'M100.0N1R4.625V3',   column: 'section625_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 626 температура 1', scad: 'M100.0N1R2.626V1',   column: 'section626_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 626 ОВ',            scad: 'M100.0N1R2.626V2',   column: 'section626_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 626 ДВ',            scad: 'M100.0N1R2.626V3',   column: 'section626_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 626 расч.темп. ',   scad: 'M100.0N1R4.626V1',   column: 'section626_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 626 расч.отопл.',   scad: 'M100.0N1R4.626V3',   column: 'section626_th',  value:'', dataType: 'temperature'},
]

const T10 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.515V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 514 температура 1', scad: 'M100.0N1R2.514V1',   column: 'section514_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 514 ОВ',            scad: 'M100.0N1R2.514V2',   column: 'section514_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 514 ДВ',            scad: 'M100.0N1R2.514V3',   column: 'section514_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 514 расч.темп. ',   scad: 'M100.0N1R4.514V1',   column: 'section514_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 514 расч.отопл.',   scad: 'M100.0N1R4.514V3',   column: 'section514_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 515 температура 1', scad: 'M100.0N1R2.515V1',   column: 'section515_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 515 ОВ',            scad: 'M100.0N1R2.515V2',   column: 'section515_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 515 ДВ',            scad: 'M100.0N1R2.515V3',   column: 'section515_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 515 расч.темп. ',   scad: 'M100.0N1R4.515V1',   column: 'section515_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 515 расч.отопл.',   scad: 'M100.0N1R4.515V3',   column: 'section515_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 516 температура 1', scad: 'M100.0N1R2.516V1',   column: 'section516_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 516 ОВ',            scad: 'M100.0N1R2.516V2',   column: 'section516_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 516 ДВ',            scad: 'M100.0N1R2.516V3',   column: 'section516_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 516 расч.темп. ',   scad: 'M100.0N1R4.516V1',   column: 'section516_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 516 расч.отопл.',   scad: 'M100.0N1R4.516V3',   column: 'section516_th',  value:'', dataType: 'temperature'},
]

const T11 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.512V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 511 температура 1', scad: 'M100.0N1R2.511V1',   column: 'section511_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 511 ОВ',            scad: 'M100.0N1R2.511V2',   column: 'section511_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 511 ДВ',            scad: 'M100.0N1R2.511V3',   column: 'section511_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 511 расч.темп. ',   scad: 'M100.0N1R4.511V1',   column: 'section511_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 511 расч.отопл.',   scad: 'M100.0N1R4.511V3',   column: 'section511_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 512 температура 1', scad: 'M100.0N1R2.512V1',   column: 'section512_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 512 ОВ',            scad: 'M100.0N1R2.512V2',   column: 'section512_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 512 ДВ',            scad: 'M100.0N1R2.512V3',   column: 'section512_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 512 расч.темп. ',   scad: 'M100.0N1R4.512V1',   column: 'section512_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 512 расч.отопл.',   scad: 'M100.0N1R4.512V3',   column: 'section512_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 513 температура 1', scad: 'M100.0N1R2.513V1',   column: 'section513_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 513 ОВ',            scad: 'M100.0N1R2.513V2',   column: 'section513_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 513 ДВ',            scad: 'M100.0N1R2.513V3',   column: 'section513_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 513 расч.темп. ',   scad: 'M100.0N1R4.513V1',   column: 'section513_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 513 расч.отопл.',   scad: 'M100.0N1R4.513V3',   column: 'section513_th',  value:'', dataType: 'temperature'},
]


const T12 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.522V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 521 температура 1', scad: 'M100.0N1R2.521V1',   column: 'section521_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 521 ОВ',            scad: 'M100.0N1R2.521V2',   column: 'section521_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 521 ДВ',            scad: 'M100.0N1R2.521V3',   column: 'section521_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 521 расч.темп. ',   scad: 'M100.0N1R4.521V1',   column: 'section521_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 521 расч.отопл.',   scad: 'M100.0N1R4.521V3',   column: 'section521_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 522 температура 1', scad: 'M100.0N1R2.522V1',   column: 'section522_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 522 ОВ',            scad: 'M100.0N1R2.522V2',   column: 'section522_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 522 ДВ',            scad: 'M100.0N1R2.522V3',   column: 'section522_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 522 расч.темп. ',   scad: 'M100.0N1R4.522V1',   column: 'section522_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 522 расч.отопл.',   scad: 'M100.0N1R4.522V3',   column: 'section522_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 523 температура 1', scad: 'M100.0N1R2.523V1',   column: 'section523_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 523 ОВ',            scad: 'M100.0N1R2.523V2',   column: 'section523_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 523 ДВ',            scad: 'M100.0N1R2.523V3',   column: 'section523_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 523 расч.темп. ',   scad: 'M100.0N1R4.523V1',   column: 'section523_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 523 расч.отопл.',   scad: 'M100.0N1R4.523V3',   column: 'section523_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 524 температура 1', scad: 'M100.0N1R2.524V1',   column: 'section524_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 524 ОВ',            scad: 'M100.0N1R2.524V2',   column: 'section524_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 524 ДВ',            scad: 'M100.0N1R2.524V3',   column: 'section524_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 524 расч.темп. ',   scad: 'M100.0N1R4.524V1',   column: 'section524_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 524 расч.отопл.',   scad: 'M100.0N1R4.524V3',   column: 'section524_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 525 температура 1', scad: 'M100.0N1R2.525V1',   column: 'section525_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 525 ОВ',            scad: 'M100.0N1R2.525V2',   column: 'section525_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 525 ДВ',            scad: 'M100.0N1R2.525V3',   column: 'section525_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 525 расч.темп. ',   scad: 'M100.0N1R4.525V1',   column: 'section525_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 525 расч.отопл.',   scad: 'M100.0N1R4.525V3',   column: 'section525_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 526 температура 1', scad: 'M100.0N1R2.526V1',   column: 'section526_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 526 ОВ',            scad: 'M100.0N1R2.526V2',   column: 'section526_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 526 ДВ',            scad: 'M100.0N1R2.526V3',   column: 'section526_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 526 расч.темп. ',   scad: 'M100.0N1R4.526V1',   column: 'section526_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 526 расч.отопл.',   scad: 'M100.0N1R4.526V3',   column: 'section526_th',  value:'', dataType: 'temperature'},

]



const T13 = [
    {name: 'СО2',                         scad: 'M100.0N1R2.412V5',   column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 411 температура 1', scad: 'M100.0N1R2.411V1',   column: 'section411_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 411 ОВ',            scad: 'M100.0N1R2.411V2',   column: 'section411_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 411 ДВ',            scad: 'M100.0N1R2.411V3',   column: 'section411_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 411 расч.темп. ',   scad: 'M100.0N1R4.411V1',   column: 'section411_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 411 расч.отопл.',   scad: 'M100.0N1R4.411V3',   column: 'section411_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 412 температура 1', scad: 'M100.0N1R2.412V1',   column: 'section412_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 412 ОВ',            scad: 'M100.0N1R2.412V2',   column: 'section412_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 412 ДВ',            scad: 'M100.0N1R2.412V3',   column: 'section412_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 412 расч.темп. ',   scad: 'M100.0N1R4.412V1',   column: 'section412_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 412 расч.отопл.',   scad: 'M100.0N1R4.412V3',   column: 'section412_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 413 температура 1', scad: 'M100.0N1R2.413V1',   column: 'section413_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 413 ОВ',            scad: 'M100.0N1R2.413V2',   column: 'section413_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 413 ДВ',            scad: 'M100.0N1R2.413V3',   column: 'section413_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 413 расч.темп. ',   scad: 'M100.0N1R4.413V1',   column: 'section413_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 413 расч.отопл.',   scad: 'M100.0N1R4.413V3',   column: 'section413_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 414 температура 1', scad: 'M100.0N1R2.414V1',   column: 'section414_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 414 ОВ',            scad: 'M100.0N1R2.414V2',   column: 'section414_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 414 ДВ',            scad: 'M100.0N1R2.414V3',   column: 'section414_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 414 расч.темп. ',   scad: 'M100.0N1R4.414V1',   column: 'section414_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 414 расч.отопл.',   scad: 'M100.0N1R4.414V3',   column: 'section414_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 415 температура 1', scad: 'M100.0N1R2.415V1',   column: 'section415_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 415 ОВ',            scad: 'M100.0N1R2.415V2',   column: 'section415_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 415 ДВ',            scad: 'M100.0N1R2.415V3',   column: 'section415_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 415 расч.темп. ',   scad: 'M100.0N1R4.415V1',   column: 'section415_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 415 расч.отопл.',   scad: 'M100.0N1R4.415V3',   column: 'section415_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 416 температура 1', scad: 'M100.0N1R2.416V1',   column: 'section416_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 416 ОВ',            scad: 'M100.0N1R2.416V2',   column: 'section416_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 416 ДВ',            scad: 'M100.0N1R2.416V3',   column: 'section416_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 416 расч.темп. ',   scad: 'M100.0N1R4.416V1',   column: 'section416_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 416 расч.отопл.',   scad: 'M100.0N1R4.416V3',   column: 'section416_th',  value:'', dataType: 'temperature'},
]



const T14 = [
    {name: 'СО2',                        scad: 'M100.0N1R2.422V5',  column: 'co2',             value:'', dataType: 'co2'},

    {name: 'отделение 421 температура 1', scad: 'M100.0N1R2.421V1',   column: 'section421_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 421 ОВ',            scad: 'M100.0N1R2.421V2',   column: 'section421_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 421 ДВ',            scad: 'M100.0N1R2.421V3',   column: 'section421_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 421 расч.темп. ',   scad: 'M100.0N1R4.421V1',   column: 'section421_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 421 расч.отопл.',   scad: 'M100.0N1R4.421V3',   column: 'section421_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 422 температура 1', scad: 'M100.0N1R2.422V1',   column: 'section422_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 422 ОВ',            scad: 'M100.0N1R2.422V2',   column: 'section422_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 422 ДВ',            scad: 'M100.0N1R2.422V3',   column: 'section422_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 422 расч.темп. ',   scad: 'M100.0N1R4.422V1',   column: 'section422_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 422 расч.отопл.',   scad: 'M100.0N1R4.422V3',   column: 'section422_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 423 температура 1', scad: 'M100.0N1R2.423V1',   column: 'section423_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 423 ОВ',            scad: 'M100.0N1R2.423V2',   column: 'section423_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 423 ДВ',            scad: 'M100.0N1R2.423V3',   column: 'section423_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 423 расч.темп. ',   scad: 'M100.0N1R4.423V1',   column: 'section423_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 423 расч.отопл.',   scad: 'M100.0N1R4.423V3',   column: 'section423_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 424 температура 1', scad: 'M100.0N1R2.424V1',   column: 'section424_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 424 ОВ',            scad: 'M100.0N1R2.424V2',   column: 'section424_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 424 ДВ',            scad: 'M100.0N1R2.424V3',   column: 'section424_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 424 расч.темп. ',   scad: 'M100.0N1R4.424V1',   column: 'section424_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 424 расч.отопл.',   scad: 'M100.0N1R4.424V3',   column: 'section424_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 425 температура 1', scad: 'M100.0N1R2.425V1',   column: 'section425_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 425 ОВ',            scad: 'M100.0N1R2.425V2',   column: 'section425_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 425 ДВ',            scad: 'M100.0N1R2.425V3',   column: 'section425_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 425 расч.темп. ',   scad: 'M100.0N1R4.425V1',   column: 'section425_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 425 расч.отопл.',   scad: 'M100.0N1R4.425V3',   column: 'section425_th',  value:'', dataType: 'temperature'},

    {name: 'отделение 426 температура 1', scad: 'M100.0N1R2.426V1',   column: 'section426_t',   value:'', dataType: 'temperature'},
    {name: 'отделение 426 ОВ',            scad: 'M100.0N1R2.426V2',   column: 'section426_ov',  value:'', dataType: 'humidity'},
    {name: 'отделение 426 ДВ',            scad: 'M100.0N1R2.426V3',   column: 'section426_dv',  value:'', dataType: 'humidity'},
    {name: 'отделение 426 расч.темп. ',   scad: 'M100.0N1R4.426V1',   column: 'section426_tv',  value:'', dataType: 'temperature'},
    {name: 'отделение 426 расч.отопл.',   scad: 'M100.0N1R4.426V3',   column: 'section426_th',  value:'', dataType: 'temperature'},

]




//
// const AGRO605_water =[
//     {name: 'расход 1 1'          , scad: 'M432.1N1R4.1V1',   column: 'water_1_1'          , value:''},
//     {name: 'расход 1 2'          , scad: 'M432.1N1R4.1V2',   column: 'water_1_2'          , value:''},
//
// ]
//
// const AGRO606_water =[
//     {name: 'расход 2 1'          , scad: 'M432.1N1R4.1V1',   column: 'water_2_1'          , value:''},
//     {name: 'расход 2 2'          , scad: 'M432.1N1R4.1V2',   column: 'water_2_2'          , value:''},
//     {name: 'расход 6 1'          , scad: 'M432.1N1R4.6V1',   column: 'water_6_1'          , value:''},
//     {name: 'расход 6 2'          , scad: 'M432.1N1R4.6V2',   column: 'water_6_2'          , value:''},
//     {name: 'расход 7 1'          , scad: 'M432.1N1R4.4V1',   column: 'water_7_1'          , value:''},
//     {name: 'расход 7 2'          , scad: 'M432.1N1R4.4V2',   column: 'water_7_2'          , value:''},
// ]
//
// const AGRO607_water =[
//     {name: 'расход 3 1'          , scad: 'M432.1N1R4.3V1',   column: 'water_3_1'          , value:''},
//     {name: 'расход 3 2'          , scad: 'M432.1N1R4.3V2',   column: 'water_3_2'          , value:''},
//     {name: 'расход 4 1'          , scad: 'M432.1N1R4.4V1',   column: 'water_4_1'          , value:''},
//     {name: 'расход 4 2'          , scad: 'M432.1N1R4.4V2',   column: 'water_4_2'          , value:''},
//     {name: 'расход 5 1'          , scad: 'M432.1N1R4.5V1',   column: 'water_5_1'          , value:''},
//     {name: 'расход 5 2'          , scad: 'M432.1N1R4.5V2',   column: 'water_5_2'          , value:''},
//     {name: 'расход 8 1'          , scad: 'M432.1N1R4.8V1',   column: 'water_8_1'          , value:''},
//     {name: 'расход 8 2'          , scad: 'M432.1N1R4.8V2',   column: 'water_8_2'          , value:''},
//     {name: 'расход 9 1'          , scad: 'M432.1N1R4.9V1',   column: 'water_9_1'          , value:''},
//     {name: 'расход 9 2'          , scad: 'M432.1N1R4.9V2',   column: 'water_9_2'          , value:''},
// ]
//
//
// const AGRO605_10_co2 =[
//     {name: 'дозация СО2 1'        , scad: 'M170.1N10R2.2V6',   column: 'co2_1'          , value:''},
// ]
//
// const AGRO605_50_co2 =[
//     {name: 'дозация СО2 5'        , scad: 'M170.1N50R2.2V6',   column: 'co2_5'          , value:''},
// ]
//
// const AGRO606_20_co2 =[
//     {name: 'дозация СО2 2'        , scad: 'M170.1N20R2.2V6',   column: 'co2_2'          , value:''},
// ]
//
// const AGRO606_60_co2 =[
//     {name: 'дозация СО2 6'        , scad: 'M170.1N60R2.2V6',   column: 'co2_6'          , value:''},
// ]
//
// const AGRO606_70_co2 =[
//     {name: 'дозация СО2 7'        , scad: 'M170.1N70R2.2V6',   column: 'co2_7'          , value:''},
// ]
//
// const AGRO607_30_co2 =[
//     {name: 'дозация СО2 3'        , scad: 'M170.1N30R2.2V6',   column: 'co2_3'          , value:''},
// ]
//
// const AGRO607_40_co2 =[
//     {name: 'дозация СО2 4'        , scad: 'M170.1N40R2.2V6',   column: 'co2_4'           , value:''},
// ]
//
// const AGRO607_80_co2 =[
//     {name: 'дозация СО2 8'        , scad: 'M170.1N80R2.2V6',   column: 'co2_8'           , value:''},
// ]
//
// const AGRO607_90_co2 =[
//     {name: 'дозация СО2 9'        , scad: 'M170.1N90R2.2V6',   column: 'co2_9'           , value:''},
// ]
//
//
//
// const AGRO605_light =[
//     {name: 'свет 11 контур 1a'      , scad: 'M203.1N1R3.11V1',    column: 'lamp_11_c1a'         , value:''},
//     {name: 'свет 11 контур 1b'      , scad: 'M203.1N1R3.11V2',    column: 'lamp_11_c1b'         , value:''},
//     {name: 'свет 11 контур 2c'      , scad: 'M203.1N1R3.11V3',    column: 'lamp_11_c2c'         , value:''},
//     {name: 'свет 11 контур 2d'      , scad: 'M203.1N1R3.11V4',    column: 'lamp_11_c2d'         , value:''},
//
//     {name: 'свет 12 контур 1a'      , scad: 'M203.1N1R3.12V1',    column: 'lamp_12_c1a'         , value:''},
//     {name: 'свет 12 контур 1b'      , scad: 'M203.1N1R3.12V2',    column: 'lamp_12_c1b'         , value:''},
//     {name: 'свет 12 контур 2c'      , scad: 'M203.1N1R3.12V3',    column: 'lamp_12_c2c'         , value:''},
//     {name: 'свет 12 контур 2d'      , scad: 'M203.1N1R3.12V4',    column: 'lamp_12_c2d'         , value:''},
//
//     {name: 'свет 13 контур 1a'      , scad: 'M203.1N1R3.13V1',    column: 'lamp_13_c1a'         , value:''},
//     {name: 'свет 13 контур 1b'      , scad: 'M203.1N1R3.13V2',    column: 'lamp_13_c1b'         , value:''},
//     {name: 'свет 13 контур 2c'      , scad: 'M203.1N1R3.13V3',    column: 'lamp_13_c2c'         , value:''},
//     {name: 'свет 13 контур 2d'      , scad: 'M203.1N1R3.13V4',    column: 'lamp_13_c2d'         , value:''},
//
//     {name: 'свет 14 контур 1a'      , scad: 'M203.1N1R3.14V1',    column: 'lamp_14_c1a'         , value:''},
//     {name: 'свет 14 контур 1b'      , scad: 'M203.1N1R3.14V2',    column: 'lamp_14_c1b'         , value:''},
//     {name: 'свет 14 контур 2c'      , scad: 'M203.1N1R3.14V3',    column: 'lamp_14_c2c'         , value:''},
//     {name: 'свет 14 контур 2d'      , scad: 'M203.1N1R3.14V4',    column: 'lamp_14_c2d'         , value:''},
//
//     {name: 'свет 51 контур 1a'      , scad: 'M203.1N1R3.51V1',    column: 'lamp_51_c1a'         , value:''},
//     {name: 'свет 51 контур 1b'      , scad: 'M203.1N1R3.51V2',    column: 'lamp_51_c1b'         , value:''},
//     {name: 'свет 51 контур 2c'      , scad: 'M203.1N1R3.51V3',    column: 'lamp_51_c2c'         , value:''},
//     {name: 'свет 51 контур 2d'      , scad: 'M203.1N1R3.51V3',    column: 'lamp_51_c2d'         , value:''},
//
//     {name: 'свет 52 контур 1a'      , scad: 'M203.1N1R3.52V1',    column: 'lamp_52_c1a'         , value:''},
//     {name: 'свет 52 контур 1b'      , scad: 'M203.1N1R3.52V2',    column: 'lamp_52_c1b'         , value:''},
//     {name: 'свет 52 контур 2c'      , scad: 'M203.1N1R3.52V3',    column: 'lamp_52_c2c'         , value:''},
//     {name: 'свет 52 контур 2d'      , scad: 'M203.1N1R3.52V3',    column: 'lamp_52_c2d'         , value:''},
//
// ]
//
// const AGRO606_light =[
//     {name: 'свет 21 контур 1a'      , scad: 'M203.1N1R3.21V1',    column: 'lamp_21_c1a'         , value:''},
//     {name: 'свет 21 контур 1b'      , scad: 'M203.1N1R3.21V2',    column: 'lamp_21_c1b'         , value:''},
//     {name: 'свет 21 контур 2c'      , scad: 'M203.1N1R3.21V4',    column: 'lamp_21_c2c'         , value:''},
//     {name: 'свет 21 контур 2d'      , scad: 'M203.1N1R3.21V4',    column: 'lamp_21_c2d'         , value:''},
//
//     {name: 'свет 22 контур 1a'      , scad: 'M203.1N1R3.22V1',    column: 'lamp_22_c1a'         , value:''},
//     {name: 'свет 22 контур 1b'      , scad: 'M203.1N1R3.22V2',    column: 'lamp_22_c1b'         , value:''},
//     {name: 'свет 22 контур 2c'      , scad: 'M203.1N1R3.22V3',    column: 'lamp_22_c2c'         , value:''},
//     {name: 'свет 22 контур 2d'      , scad: 'M203.1N1R3.22V4',    column: 'lamp_22_c2d'         , value:''},
//
//     {name: 'свет 23 контур 1a'      , scad: 'M203.1N1R3.23V1',    column: 'lamp_23_c1a'         , value:''},
//     {name: 'свет 23 контур 1b'      , scad: 'M203.1N1R3.23V2',    column: 'lamp_23_c1b'         , value:''},
//     {name: 'свет 21 контур 2c'      , scad: 'M203.1N1R3.23V3',    column: 'lamp_23_c2c'         , value:''},
//     {name: 'свет 23 контур 2d'      , scad: 'M203.1N1R3.23V4',    column: 'lamp_23_c2d'         , value:''},
//
//     {name: 'свет 24 контур 1a'      , scad: 'M203.1N1R3.24V1',    column: 'lamp_24_c1a'         , value:''},
//     {name: 'свет 24 контур 1b'      , scad: 'M203.1N1R3.24V2',    column: 'lamp_24_c1b'         , value:''},
//     {name: 'свет 24 контур 2c'      , scad: 'M203.1N1R3.24V3',    column: 'lamp_24_c2c'         , value:''},
//     {name: 'свет 24 контур 2d'      , scad: 'M203.1N1R3.24V4',    column: 'lamp_24_c2d'         , value:''},
//
//     {name: 'свет 61 контур 1a'      , scad: 'M203.1N1R3.61V1',    column: 'lamp_61_c1a'         , value:''},
//     {name: 'свет 61 контур 1b'      , scad: 'M203.1N1R3.61V2',    column: 'lamp_61_c1b'         , value:''},
//     {name: 'свет 61 контур 2c'      , scad: 'M203.1N1R3.61V3',    column: 'lamp_61_c2c'         , value:''},
//     {name: 'свет 61 контур 2d'      , scad: 'M203.1N1R3.61V4',    column: 'lamp_61_c2d'         , value:''},
//
//     {name: 'свет 62 контур 1a'      , scad: 'M203.1N1R3.62V1',    column: 'lamp_62_c1a'         , value:''},
//     {name: 'свет 62 контур 1b'      , scad: 'M203.1N1R3.62V2',    column: 'lamp_62_c1b'         , value:''},
//     {name: 'свет 62 контур 2c'      , scad: 'M203.1N1R3.62V3',    column: 'lamp_62_c2c'         , value:''},
//     {name: 'свет 62 контур 2d'      , scad: 'M203.1N1R3.62V4',    column: 'lamp_62_c2d'         , value:''},
//
//     {name: 'свет 63 контур 1a'      , scad: 'M203.1N1R3.63V1',    column: 'lamp_63_c1a'         , value:''},
//     {name: 'свет 63 контур 1b'      , scad: 'M203.1N1R3.63V2',    column: 'lamp_63_c1b'         , value:''},
//     {name: 'свет 63 контур 2c'      , scad: 'M203.1N1R3.63V3',    column: 'lamp_63_c2c'         , value:''},
//     {name: 'свет 63 контур 2d'      , scad: 'M203.1N1R3.63V4',    column: 'lamp_63_c2d'         , value:''},
//
//     {name: 'свет 71 контур 1a'      , scad: 'M203.1N1R3.71V1',    column: 'lamp_71_c1a'         , value:''},
//     {name: 'свет 71 контур 1b'      , scad: 'M203.1N1R3.71V2',    column: 'lamp_71_c1b'         , value:''},
//     {name: 'свет 71 контур 2c'      , scad: 'M203.1N1R3.71V3',    column: 'lamp_71_c2c'         , value:''},
//     {name: 'свет 71 контур 2d'      , scad: 'M203.1N1R3.71V4',    column: 'lamp_71_c2d'         , value:''},
//
//     {name: 'свет 72 контур 1a'      , scad: 'M203.1N1R3.72V1',    column: 'lamp_72_c1a'         , value:''},
//     {name: 'свет 72 контур 1b'      , scad: 'M203.1N1R3.72V2',    column: 'lamp_72_c1b'         , value:''},
//     {name: 'свет 72 контур 2c'      , scad: 'M203.1N1R3.72V3',    column: 'lamp_72_c2c'         , value:''},
//     {name: 'свет 72 контур 2d'      , scad: 'M203.1N1R3.72V4',    column: 'lamp_72_c2d'         , value:''},
//
//     {name: 'свет 73 контур 1a'      , scad: 'M203.1N1R3.73V1',    column: 'lamp_73_c1a'         , value:''},
//     {name: 'свет 73 контур 1b'      , scad: 'M203.1N1R3.73V2',    column: 'lamp_73_c1b'         , value:''},
//     {name: 'свет 73 контур 2c'      , scad: 'M203.1N1R3.73V3',    column: 'lamp_73_c2c'         , value:''},
//     {name: 'свет 73 контур 2d'      , scad: 'M203.1N1R3.73V4',    column: 'lamp_73_c2d'         , value:''},
// ]
//
// const AGRO607_light =[
//
//     {name: 'свет 31 контур 1a'      , scad: 'M203.1N1R3.31V1',    column: 'lamp_31_c1a'         , value:''},
//     {name: 'свет 31 контур 1b'      , scad: 'M203.1N1R3.31V2',    column: 'lamp_31_c1b'         , value:''},
//     {name: 'свет 31 контур 2c'      , scad: 'M203.1N1R3.31V3',    column: 'lamp_31_c2c'         , value:''},
//     {name: 'свет 31 контур 2d'      , scad: 'M203.1N1R3.31V4',    column: 'lamp_31_c2d'         , value:''},
//
//     {name: 'свет 32 контур 1a'      , scad: 'M203.1N1R3.32V1',    column: 'lamp_32_c1a'         , value:''},
//     {name: 'свет 32 контур 1b'      , scad: 'M203.1N1R3.32V2',    column: 'lamp_32_c1b'         , value:''},
//     {name: 'свет 32 контур 2c'      , scad: 'M203.1N1R3.32V3',    column: 'lamp_32_c2c'         , value:''},
//     {name: 'свет 32 контур 2d'      , scad: 'M203.1N1R3.32V4',    column: 'lamp_32_c2d'         , value:''},
//
//     {name: 'свет 41 контур 1a'      , scad: 'M203.1N1R3.41V1',    column: 'lamp_41_c1a'         , value:''},
//     {name: 'свет 41 контур 1b'      , scad: 'M203.1N1R3.41V2',    column: 'lamp_41_c1b'         , value:''},
//     {name: 'свет 41 контур 2c'      , scad: 'M203.1N1R3.41V3',    column: 'lamp_41_c2c'         , value:''},
//     {name: 'свет 41 контур 2d'      , scad: 'M203.1N1R3.41V4',    column: 'lamp_41_c2d'         , value:''},
//
//     {name: 'свет 42 контур 1a'      , scad: 'M203.1N1R3.42V1',    column: 'lamp_42_c1a'         , value:''},
//     {name: 'свет 42 контур 1b'      , scad: 'M203.1N1R3.42V2',    column: 'lamp_42_c1b'         , value:''},
//     {name: 'свет 42 контур 2c'      , scad: 'M203.1N1R3.42V3',    column: 'lamp_42_c2c'         , value:''},
//     {name: 'свет 42 контур 2d'      , scad: 'M203.1N1R3.42V4',    column: 'lamp_42_c2d'         , value:''},
//
//     {name: 'свет 81 контур 1a'      , scad: 'M203.1N1R3.81V1',    column: 'lamp_81_c1a'         , value:''},
//     {name: 'свет 81 контур 1b'      , scad: 'M203.1N1R3.81V2',    column: 'lamp_81_c1b'         , value:''},
//     {name: 'свет 81 контур 2c'      , scad: 'M203.1N1R3.81V3',    column: 'lamp_81_c2c'         , value:''},
//     {name: 'свет 81 контур 2d'      , scad: 'M203.1N1R3.81V4',    column: 'lamp_81_c2d'         , value:''},
//
//     {name: 'свет 82 контур 1a'      , scad: 'M203.1N1R3.82V1',    column: 'lamp_82_c1a'         , value:''},
//     {name: 'свет 82 контур 1b'      , scad: 'M203.1N1R3.82V2',    column: 'lamp_82_c1b'         , value:''},
//     {name: 'свет 82 контур 2c'      , scad: 'M203.1N1R3.82V3',    column: 'lamp_82_c2c'         , value:''},
//     {name: 'свет 82 контур 2d'      , scad: 'M203.1N1R3.82V4',    column: 'lamp_82_c2d'         , value:''},
//
//     {name: 'свет 83 контур 1a'      , scad: 'M203.1N1R3.83V1',    column: 'lamp_83_c1a'         , value:''},
//     {name: 'свет 83 контур 1b'      , scad: 'M203.1N1R3.83V2',    column: 'lamp_83_c1b'         , value:''},
//     {name: 'свет 83 контур 2c'      , scad: 'M203.1N1R3.83V3',    column: 'lamp_83_c2c'         , value:''},
//     {name: 'свет 83 контур 2d'      , scad: 'M203.1N1R3.83V4',    column: 'lamp_83_c2d'         , value:''},
//
//     {name: 'свет 91 контур 1a'      , scad: 'M203.1N1R3.91V1',    column: 'lamp_91_c1a'         , value:''},
//     {name: 'свет 91 контур 1b'      , scad: 'M203.1N1R3.91V2',    column: 'lamp_91_c1b'         , value:''},
//     {name: 'свет 91 контур 2c'      , scad: 'M203.1N1R3.91V3',    column: 'lamp_91_c2c'         , value:''},
//     {name: 'свет 91 контур 2d'      , scad: 'M203.1N1R3.91V4',    column: 'lamp_91_c2d'         , value:''},
//
//     {name: 'свет 92 контур 1a'      , scad: 'M203.1N1R3.92V1',    column: 'lamp_92_c1a'         , value:''},
//     {name: 'свет 92 контур 1b'      , scad: 'M203.1N1R3.92V2',    column: 'lamp_92_c1b'         , value:''},
//     {name: 'свет 92 контур 2c'      , scad: 'M203.1N1R3.92V3',    column: 'lamp_92_c2c'         , value:''},
//     {name: 'свет 92 контур 2d'      , scad: 'M203.1N1R3.92V4',    column: 'lamp_92_c2d'         , value:''},
//
//     {name: 'свет 93 контур 1a'      , scad: 'M203.1N1R3.93V1',    column: 'lamp_93_c1a'         , value:''},
//     {name: 'свет 93 контур 1b'      , scad: 'M203.1N1R3.93V2',    column: 'lamp_93_c1b'         , value:''},
//     {name: 'свет 93 контур 2c'      , scad: 'M203.1N1R3.93V3',    column: 'lamp_93_c2c'         , value:''},
//     {name: 'свет 93 контур 2d'      , scad: 'M203.1N1R3.93V4',    column: 'lamp_93_c2d'         , value:''},
//
//
//
//
// ]
//
//
// const AGRO_light_str_11 =[
//     {name: 'свет стратегия 11 вкл1'  , scad: 'I205.0N1R6.1V1',      column: 'lamp_11_str_on1'       , value:''},
//     {name: 'свет стратегия 11 вкл2'  , scad: 'I205.0N1R6.1V2',      column: 'lamp_11_str_on2'       , value:''},
//     {name: 'свет стратегия 11 вкл3'  , scad: 'I205.0N1R6.1V3',      column: 'lamp_11_str_on3'       , value:''},
//     {name: 'свет стратегия 11 вкл4'  , scad: 'I205.0N1R6.1V4',      column: 'lamp_11_str_on4'       , value:''},
//     {name: 'свет стратегия 11 вкл5'  , scad: 'I205.0N1R6.1V5',      column: 'lamp_11_str_on5'       , value:''},
//     {name: 'свет стратегия 11 вкл6'  , scad: 'I205.0N1R6.1V6',      column: 'lamp_11_str_on6'       , value:''},
//     {name: 'свет стратегия 11 старт1', scad: 'I205.0N1R7.1V1',      column: 'lamp_11_str_start1'    , value:''},
//     {name: 'свет стратегия 11 старт2', scad: 'I205.0N1R7.1V2',      column: 'lamp_11_str_start2'    , value:''},
//     {name: 'свет стратегия 11 старт3', scad: 'I205.0N1R7.1V3',      column: 'lamp_11_str_start3'    , value:''},
//     {name: 'свет стратегия 11 старт4', scad: 'I205.0N1R7.1V4',      column: 'lamp_11_str_start4'    , value:''},
//     {name: 'свет стратегия 11 старт5', scad: 'I205.0N1R7.1V5',      column: 'lamp_11_str_start5'    , value:''},
//     {name: 'свет стратегия 11 старт6', scad: 'I205.0N1R7.1V6',      column: 'lamp_11_str_start6'    , value:''},
//     {name: 'свет стратегия 11 стоп1' , scad: 'I205.0N1R8.1V1',      column: 'lamp_11_str_stop1'     , value:''},
//     {name: 'свет стратегия 11 стоп2' , scad: 'I205.0N1R8.1V2',      column: 'lamp_11_str_stop2'     , value:''},
//     {name: 'свет стратегия 11 стоп3' , scad: 'I205.0N1R8.1V3',      column: 'lamp_11_str_stop3'     , value:''},
//     {name: 'свет стратегия 11 стоп4' , scad: 'I205.0N1R8.1V4',      column: 'lamp_11_str_stop4'     , value:''},
//     {name: 'свет стратегия 11 стоп5' , scad: 'I205.0N1R8.1V5',      column: 'lamp_11_str_stop5'     , value:''},
//     {name: 'свет стратегия 11 стоп6' , scad: 'I205.0N1R8.1V6',      column: 'lamp_11_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_12 =[
//     {name: 'свет стратегия 12 вкл1'  , scad: 'I205.0N2R6.1V1',      column: 'lamp_12_str_on1'       , value:''},
//     {name: 'свет стратегия 12 вкл2'  , scad: 'I205.0N2R6.1V2',      column: 'lamp_12_str_on2'       , value:''},
//     {name: 'свет стратегия 12 вкл3'  , scad: 'I205.0N2R6.1V3',      column: 'lamp_12_str_on3'       , value:''},
//     {name: 'свет стратегия 12 вкл4'  , scad: 'I205.0N2R6.1V4',      column: 'lamp_12_str_on4'       , value:''},
//     {name: 'свет стратегия 12 вкл5'  , scad: 'I205.0N2R6.1V5',      column: 'lamp_12_str_on5'       , value:''},
//     {name: 'свет стратегия 12 вкл6'  , scad: 'I205.0N2R6.1V6',      column: 'lamp_12_str_on6'       , value:''},
//     {name: 'свет стратегия 12 старт1', scad: 'I205.0N2R7.1V1',      column: 'lamp_12_str_start1'    , value:''},
//     {name: 'свет стратегия 12 старт2', scad: 'I205.0N2R7.1V2',      column: 'lamp_12_str_start2'    , value:''},
//     {name: 'свет стратегия 12 старт3', scad: 'I205.0N2R7.1V3',      column: 'lamp_12_str_start3'    , value:''},
//     {name: 'свет стратегия 12 старт4', scad: 'I205.0N2R7.1V4',      column: 'lamp_12_str_start4'    , value:''},
//     {name: 'свет стратегия 12 старт5', scad: 'I205.0N2R7.1V5',      column: 'lamp_12_str_start5'    , value:''},
//     {name: 'свет стратегия 12 старт6', scad: 'I205.0N2R7.1V6',      column: 'lamp_12_str_start6'    , value:''},
//     {name: 'свет стратегия 12 стоп1' , scad: 'I205.0N2R8.1V1',      column: 'lamp_12_str_stop1'     , value:''},
//     {name: 'свет стратегия 12 стоп2' , scad: 'I205.0N2R8.1V2',      column: 'lamp_12_str_stop2'     , value:''},
//     {name: 'свет стратегия 12 стоп3' , scad: 'I205.0N2R8.1V3',      column: 'lamp_12_str_stop3'     , value:''},
//     {name: 'свет стратегия 12 стоп4' , scad: 'I205.0N2R8.1V4',      column: 'lamp_12_str_stop4'     , value:''},
//     {name: 'свет стратегия 12 стоп5' , scad: 'I205.0N2R8.1V5',      column: 'lamp_12_str_stop5'     , value:''},
//     {name: 'свет стратегия 12 стоп6' , scad: 'I205.0N2R8.1V6',      column: 'lamp_12_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_13 =[
//     {name: 'свет стратегия 13 вкл1'  , scad: 'I205.0N3R6.1V1',      column: 'lamp_13_str_on1'       , value:''},
//     {name: 'свет стратегия 13 вкл2'  , scad: 'I205.0N3R6.1V2',      column: 'lamp_13_str_on2'       , value:''},
//     {name: 'свет стратегия 13 вкл3'  , scad: 'I205.0N3R6.1V3',      column: 'lamp_13_str_on3'       , value:''},
//     {name: 'свет стратегия 13 вкл4'  , scad: 'I205.0N3R6.1V4',      column: 'lamp_13_str_on4'       , value:''},
//     {name: 'свет стратегия 13 вкл5'  , scad: 'I205.0N3R6.1V5',      column: 'lamp_13_str_on5'       , value:''},
//     {name: 'свет стратегия 13 вкл6'  , scad: 'I205.0N3R6.1V6',      column: 'lamp_13_str_on6'       , value:''},
//     {name: 'свет стратегия 13 старт1', scad: 'I205.0N3R7.1V1',      column: 'lamp_13_str_start1'    , value:''},
//     {name: 'свет стратегия 13 старт2', scad: 'I205.0N3R7.1V2',      column: 'lamp_13_str_start2'    , value:''},
//     {name: 'свет стратегия 13 старт3', scad: 'I205.0N3R7.1V3',      column: 'lamp_13_str_start3'    , value:''},
//     {name: 'свет стратегия 13 старт4', scad: 'I205.0N3R7.1V4',      column: 'lamp_13_str_start4'    , value:''},
//     {name: 'свет стратегия 13 старт5', scad: 'I205.0N3R7.1V5',      column: 'lamp_13_str_start5'    , value:''},
//     {name: 'свет стратегия 13 старт6', scad: 'I205.0N3R7.1V6',      column: 'lamp_13_str_start6'    , value:''},
//     {name: 'свет стратегия 13 стоп1' , scad: 'I205.0N3R8.1V1',      column: 'lamp_13_str_stop1'     , value:''},
//     {name: 'свет стратегия 13 стоп2' , scad: 'I205.0N3R8.1V2',      column: 'lamp_13_str_stop2'     , value:''},
//     {name: 'свет стратегия 13 стоп3' , scad: 'I205.0N3R8.1V3',      column: 'lamp_13_str_stop3'     , value:''},
//     {name: 'свет стратегия 13 стоп4' , scad: 'I205.0N3R8.1V4',      column: 'lamp_13_str_stop4'     , value:''},
//     {name: 'свет стратегия 13 стоп5' , scad: 'I205.0N3R8.1V5',      column: 'lamp_13_str_stop5'     , value:''},
//     {name: 'свет стратегия 13 стоп6' , scad: 'I205.0N3R8.1V6',      column: 'lamp_13_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_14 =[
//     {name: 'свет стратегия 14 вкл1'  , scad: 'I205.0N4R6.1V1',      column: 'lamp_14_str_on1'       , value:''},
//     {name: 'свет стратегия 14 вкл2'  , scad: 'I205.0N4R6.1V2',      column: 'lamp_14_str_on2'       , value:''},
//     {name: 'свет стратегия 14 вкл3'  , scad: 'I205.0N4R6.1V3',      column: 'lamp_14_str_on3'       , value:''},
//     {name: 'свет стратегия 14 вкл4'  , scad: 'I205.0N4R6.1V4',      column: 'lamp_14_str_on4'       , value:''},
//     {name: 'свет стратегия 14 вкл5'  , scad: 'I205.0N4R6.1V5',      column: 'lamp_14_str_on5'       , value:''},
//     {name: 'свет стратегия 14 вкл6'  , scad: 'I205.0N4R6.1V6',      column: 'lamp_14_str_on6'       , value:''},
//     {name: 'свет стратегия 14 старт1', scad: 'I205.0N4R7.1V1',      column: 'lamp_14_str_start1'    , value:''},
//     {name: 'свет стратегия 14 старт2', scad: 'I205.0N4R7.1V2',      column: 'lamp_14_str_start2'    , value:''},
//     {name: 'свет стратегия 14 старт3', scad: 'I205.0N4R7.1V3',      column: 'lamp_14_str_start3'    , value:''},
//     {name: 'свет стратегия 14 старт4', scad: 'I205.0N4R7.1V4',      column: 'lamp_14_str_start4'    , value:''},
//     {name: 'свет стратегия 14 старт5', scad: 'I205.0N4R7.1V5',      column: 'lamp_14_str_start5'    , value:''},
//     {name: 'свет стратегия 14 старт6', scad: 'I205.0N4R7.1V6',      column: 'lamp_14_str_start6'    , value:''},
//     {name: 'свет стратегия 14 стоп1' , scad: 'I205.0N4R8.1V1',      column: 'lamp_14_str_stop1'     , value:''},
//     {name: 'свет стратегия 14 стоп2' , scad: 'I205.0N4R8.1V2',      column: 'lamp_14_str_stop2'     , value:''},
//     {name: 'свет стратегия 14 стоп3' , scad: 'I205.0N4R8.1V3',      column: 'lamp_14_str_stop3'     , value:''},
//     {name: 'свет стратегия 14 стоп4' , scad: 'I205.0N4R8.1V4',      column: 'lamp_14_str_stop4'     , value:''},
//     {name: 'свет стратегия 14 стоп5' , scad: 'I205.0N4R8.1V5',      column: 'lamp_14_str_stop5'     , value:''},
//     {name: 'свет стратегия 14 стоп6' , scad: 'I205.0N4R8.1V6',      column: 'lamp_14_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_51 =[
//     {name: 'свет стратегия 51 вкл1'  , scad: 'I205.0N31R6.1V1',      column: 'lamp_51_str_on1'       , value:''},
//     {name: 'свет стратегия 51 вкл2'  , scad: 'I205.0N31R6.1V2',      column: 'lamp_51_str_on2'       , value:''},
//     {name: 'свет стратегия 51 вкл3'  , scad: 'I205.0N31R6.1V3',      column: 'lamp_51_str_on3'       , value:''},
//     {name: 'свет стратегия 51 вкл4'  , scad: 'I205.0N31R6.1V4',      column: 'lamp_51_str_on4'       , value:''},
//     {name: 'свет стратегия 51 вкл5'  , scad: 'I205.0N31R6.1V5',      column: 'lamp_51_str_on5'       , value:''},
//     {name: 'свет стратегия 51 вкл6'  , scad: 'I205.0N31R6.1V6',      column: 'lamp_51_str_on6'       , value:''},
//     {name: 'свет стратегия 51 старт1', scad: 'I205.0N31R7.1V1',      column: 'lamp_51_str_start1'    , value:''},
//     {name: 'свет стратегия 51 старт2', scad: 'I205.0N31R7.1V2',      column: 'lamp_51_str_start2'    , value:''},
//     {name: 'свет стратегия 51 старт3', scad: 'I205.0N31R7.1V3',      column: 'lamp_51_str_start3'    , value:''},
//     {name: 'свет стратегия 51 старт4', scad: 'I205.0N31R7.1V4',      column: 'lamp_51_str_start4'    , value:''},
//     {name: 'свет стратегия 51 старт5', scad: 'I205.0N31R7.1V5',      column: 'lamp_51_str_start5'    , value:''},
//     {name: 'свет стратегия 51 старт6', scad: 'I205.0N31R7.1V6',      column: 'lamp_51_str_start6'    , value:''},
//     {name: 'свет стратегия 51 стоп1' , scad: 'I205.0N31R8.1V1',      column: 'lamp_51_str_stop1'     , value:''},
//     {name: 'свет стратегия 51 стоп2' , scad: 'I205.0N31R8.1V2',      column: 'lamp_51_str_stop2'     , value:''},
//     {name: 'свет стратегия 51 стоп3' , scad: 'I205.0N31R8.1V3',      column: 'lamp_51_str_stop3'     , value:''},
//     {name: 'свет стратегия 51 стоп4' , scad: 'I205.0N31R8.1V4',      column: 'lamp_51_str_stop4'     , value:''},
//     {name: 'свет стратегия 51 стоп5' , scad: 'I205.0N31R8.1V5',      column: 'lamp_51_str_stop5'     , value:''},
//     {name: 'свет стратегия 51 стоп6' , scad: 'I205.0N31R8.1V6',      column: 'lamp_51_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_52 =[
//     {name: 'свет стратегия 52 вкл1'  , scad: 'I205.0N41R6.1V1',      column: 'lamp_52_str_on1'       , value:''},
//     {name: 'свет стратегия 52 вкл2'  , scad: 'I205.0N41R6.1V2',      column: 'lamp_52_str_on2'       , value:''},
//     {name: 'свет стратегия 52 вкл3'  , scad: 'I205.0N41R6.1V3',      column: 'lamp_52_str_on3'       , value:''},
//     {name: 'свет стратегия 52 вкл4'  , scad: 'I205.0N41R6.1V4',      column: 'lamp_52_str_on4'       , value:''},
//     {name: 'свет стратегия 52 вкл5'  , scad: 'I205.0N41R6.1V5',      column: 'lamp_52_str_on5'       , value:''},
//     {name: 'свет стратегия 52 вкл6'  , scad: 'I205.0N41R6.1V6',      column: 'lamp_52_str_on6'       , value:''},
//     {name: 'свет стратегия 52 старт1', scad: 'I205.0N41R7.1V1',      column: 'lamp_52_str_start1'    , value:''},
//     {name: 'свет стратегия 52 старт2', scad: 'I205.0N41R7.1V2',      column: 'lamp_52_str_start2'    , value:''},
//     {name: 'свет стратегия 52 старт3', scad: 'I205.0N41R7.1V3',      column: 'lamp_52_str_start3'    , value:''},
//     {name: 'свет стратегия 52 старт4', scad: 'I205.0N41R7.1V4',      column: 'lamp_52_str_start4'    , value:''},
//     {name: 'свет стратегия 52 старт5', scad: 'I205.0N41R7.1V5',      column: 'lamp_52_str_start5'    , value:''},
//     {name: 'свет стратегия 52 старт6', scad: 'I205.0N41R7.1V6',      column: 'lamp_52_str_start6'    , value:''},
//     {name: 'свет стратегия 52 стоп1' , scad: 'I205.0N41R8.1V1',      column: 'lamp_52_str_stop1'     , value:''},
//     {name: 'свет стратегия 52 стоп2' , scad: 'I205.0N41R8.1V2',      column: 'lamp_52_str_stop2'     , value:''},
//     {name: 'свет стратегия 52 стоп3' , scad: 'I205.0N41R8.1V3',      column: 'lamp_52_str_stop3'     , value:''},
//     {name: 'свет стратегия 52 стоп4' , scad: 'I205.0N41R8.1V4',      column: 'lamp_52_str_stop4'     , value:''},
//     {name: 'свет стратегия 52 стоп5' , scad: 'I205.0N41R8.1V5',      column: 'lamp_52_str_stop5'     , value:''},
//     {name: 'свет стратегия 52 стоп6' , scad: 'I205.0N41R8.1V6',      column: 'lamp_52_str_stop6'     , value:''},
//
// ]
//
//
// const AGRO_light_str_21 =[
//     {name: 'свет стратегия 21 вкл1'  , scad: 'I205.0N5R6.1V1',      column: 'lamp_21_str_on1'       , value:''},
//     {name: 'свет стратегия 21 вкл2'  , scad: 'I205.0N5R6.1V2',      column: 'lamp_21_str_on2'       , value:''},
//     {name: 'свет стратегия 21 вкл3'  , scad: 'I205.0N5R6.1V3',      column: 'lamp_21_str_on3'       , value:''},
//     {name: 'свет стратегия 21 вкл4'  , scad: 'I205.0N5R6.1V4',      column: 'lamp_21_str_on4'       , value:''},
//     {name: 'свет стратегия 21 вкл5'  , scad: 'I205.0N5R6.1V5',      column: 'lamp_21_str_on5'       , value:''},
//     {name: 'свет стратегия 21 вкл6'  , scad: 'I205.0N5R6.1V6',      column: 'lamp_21_str_on6'       , value:''},
//     {name: 'свет стратегия 21 старт1', scad: 'I205.0N5R7.1V1',      column: 'lamp_21_str_start1'    , value:''},
//     {name: 'свет стратегия 21 старт2', scad: 'I205.0N5R7.1V2',      column: 'lamp_21_str_start2'    , value:''},
//     {name: 'свет стратегия 21 старт3', scad: 'I205.0N5R7.1V3',      column: 'lamp_21_str_start3'    , value:''},
//     {name: 'свет стратегия 21 старт4', scad: 'I205.0N5R7.1V4',      column: 'lamp_21_str_start4'    , value:''},
//     {name: 'свет стратегия 21 старт5', scad: 'I205.0N5R7.1V5',      column: 'lamp_21_str_start5'    , value:''},
//     {name: 'свет стратегия 21 старт6', scad: 'I205.0N5R7.1V6',      column: 'lamp_21_str_start6'    , value:''},
//     {name: 'свет стратегия 21 стоп1' , scad: 'I205.0N5R8.1V1',      column: 'lamp_21_str_stop1'     , value:''},
//     {name: 'свет стратегия 21 стоп2' , scad: 'I205.0N5R8.1V2',      column: 'lamp_21_str_stop2'     , value:''},
//     {name: 'свет стратегия 21 стоп3' , scad: 'I205.0N5R8.1V3',      column: 'lamp_21_str_stop3'     , value:''},
//     {name: 'свет стратегия 21 стоп4' , scad: 'I205.0N5R8.1V4',      column: 'lamp_21_str_stop4'     , value:''},
//     {name: 'свет стратегия 21 стоп5' , scad: 'I205.0N5R8.1V5',      column: 'lamp_21_str_stop5'     , value:''},
//     {name: 'свет стратегия 21 стоп6' , scad: 'I205.0N5R8.1V6',      column: 'lamp_21_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_22 =[
//     {name: 'свет стратегия 22 вкл1'  , scad: 'I205.0N51R6.1V1',      column: 'lamp_22_str_on1'       , value:''},
//     {name: 'свет стратегия 22 вкл2'  , scad: 'I205.0N51R6.1V2',      column: 'lamp_22_str_on2'       , value:''},
//     {name: 'свет стратегия 22 вкл3'  , scad: 'I205.0N51R6.1V3',      column: 'lamp_22_str_on3'       , value:''},
//     {name: 'свет стратегия 22 вкл4'  , scad: 'I205.0N51R6.1V4',      column: 'lamp_22_str_on4'       , value:''},
//     {name: 'свет стратегия 22 вкл5'  , scad: 'I205.0N51R6.1V5',      column: 'lamp_22_str_on5'       , value:''},
//     {name: 'свет стратегия 22 вкл6'  , scad: 'I205.0N51R6.1V6',      column: 'lamp_22_str_on6'       , value:''},
//     {name: 'свет стратегия 22 старт1', scad: 'I205.0N51R7.1V1',      column: 'lamp_22_str_start1'    , value:''},
//     {name: 'свет стратегия 22 старт2', scad: 'I205.0N51R7.1V2',      column: 'lamp_22_str_start2'    , value:''},
//     {name: 'свет стратегия 22 старт3', scad: 'I205.0N51R7.1V3',      column: 'lamp_22_str_start3'    , value:''},
//     {name: 'свет стратегия 22 старт4', scad: 'I205.0N51R7.1V4',      column: 'lamp_22_str_start4'    , value:''},
//     {name: 'свет стратегия 22 старт5', scad: 'I205.0N51R7.1V5',      column: 'lamp_22_str_start5'    , value:''},
//     {name: 'свет стратегия 22 старт6', scad: 'I205.0N51R7.1V6',      column: 'lamp_22_str_start6'    , value:''},
//     {name: 'свет стратегия 22 стоп1' , scad: 'I205.0N51R8.1V1',      column: 'lamp_22_str_stop1'     , value:''},
//     {name: 'свет стратегия 22 стоп2' , scad: 'I205.0N51R8.1V2',      column: 'lamp_22_str_stop2'     , value:''},
//     {name: 'свет стратегия 22 стоп3' , scad: 'I205.0N51R8.1V3',      column: 'lamp_22_str_stop3'     , value:''},
//     {name: 'свет стратегия 22 стоп4' , scad: 'I205.0N51R8.1V4',      column: 'lamp_22_str_stop4'     , value:''},
//     {name: 'свет стратегия 22 стоп5' , scad: 'I205.0N51R8.1V5',      column: 'lamp_22_str_stop5'     , value:''},
//     {name: 'свет стратегия 22 стоп6' , scad: 'I205.0N51R8.1V6',      column: 'lamp_22_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_23 =[
//     {name: 'свет стратегия 23 вкл1'  , scad: 'I205.0N61R6.1V1',      column: 'lamp_23_str_on1'       , value:''},
//     {name: 'свет стратегия 23 вкл2'  , scad: 'I205.0N61R6.1V2',      column: 'lamp_23_str_on2'       , value:''},
//     {name: 'свет стратегия 23 вкл3'  , scad: 'I205.0N61R6.1V3',      column: 'lamp_23_str_on3'       , value:''},
//     {name: 'свет стратегия 23 вкл4'  , scad: 'I205.0N61R6.1V4',      column: 'lamp_23_str_on4'       , value:''},
//     {name: 'свет стратегия 23 вкл5'  , scad: 'I205.0N61R6.1V5',      column: 'lamp_23_str_on5'       , value:''},
//     {name: 'свет стратегия 23 вкл6'  , scad: 'I205.0N61R6.1V6',      column: 'lamp_23_str_on6'       , value:''},
//     {name: 'свет стратегия 23 старт1', scad: 'I205.0N61R7.1V1',      column: 'lamp_23_str_start1'    , value:''},
//     {name: 'свет стратегия 23 старт2', scad: 'I205.0N61R7.1V2',      column: 'lamp_23_str_start2'    , value:''},
//     {name: 'свет стратегия 23 старт3', scad: 'I205.0N61R7.1V3',      column: 'lamp_23_str_start3'    , value:''},
//     {name: 'свет стратегия 23 старт4', scad: 'I205.0N61R7.1V4',      column: 'lamp_23_str_start4'    , value:''},
//     {name: 'свет стратегия 23 старт5', scad: 'I205.0N61R7.1V5',      column: 'lamp_23_str_start5'    , value:''},
//     {name: 'свет стратегия 23 старт6', scad: 'I205.0N61R7.1V6',      column: 'lamp_23_str_start6'    , value:''},
//     {name: 'свет стратегия 23 стоп1' , scad: 'I205.0N61R8.1V1',      column: 'lamp_23_str_stop1'     , value:''},
//     {name: 'свет стратегия 23 стоп2' , scad: 'I205.0N61R8.1V2',      column: 'lamp_23_str_stop2'     , value:''},
//     {name: 'свет стратегия 23 стоп3' , scad: 'I205.0N61R8.1V3',      column: 'lamp_23_str_stop3'     , value:''},
//     {name: 'свет стратегия 23 стоп4' , scad: 'I205.0N61R8.1V4',      column: 'lamp_23_str_stop4'     , value:''},
//     {name: 'свет стратегия 23 стоп5' , scad: 'I205.0N61R8.1V5',      column: 'lamp_23_str_stop5'     , value:''},
//     {name: 'свет стратегия 23 стоп6' , scad: 'I205.0N61R8.1V6',      column: 'lamp_23_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_24 =[
//     {name: 'свет стратегия 24 вкл1'  , scad: 'I205.0N71R6.1V1',      column: 'lamp_24_str_on1'       , value:''},
//     {name: 'свет стратегия 24 вкл2'  , scad: 'I205.0N71R6.1V2',      column: 'lamp_24_str_on2'       , value:''},
//     {name: 'свет стратегия 24 вкл3'  , scad: 'I205.0N71R6.1V3',      column: 'lamp_24_str_on3'       , value:''},
//     {name: 'свет стратегия 24 вкл4'  , scad: 'I205.0N71R6.1V4',      column: 'lamp_24_str_on4'       , value:''},
//     {name: 'свет стратегия 24 вкл5'  , scad: 'I205.0N71R6.1V5',      column: 'lamp_24_str_on5'       , value:''},
//     {name: 'свет стратегия 24 вкл6'  , scad: 'I205.0N71R6.1V6',      column: 'lamp_24_str_on6'       , value:''},
//     {name: 'свет стратегия 24 старт1', scad: 'I205.0N71R7.1V1',      column: 'lamp_24_str_start1'    , value:''},
//     {name: 'свет стратегия 24 старт2', scad: 'I205.0N71R7.1V2',      column: 'lamp_24_str_start2'    , value:''},
//     {name: 'свет стратегия 24 старт3', scad: 'I205.0N71R7.1V3',      column: 'lamp_24_str_start3'    , value:''},
//     {name: 'свет стратегия 24 старт4', scad: 'I205.0N71R7.1V4',      column: 'lamp_24_str_start4'    , value:''},
//     {name: 'свет стратегия 24 старт5', scad: 'I205.0N71R7.1V5',      column: 'lamp_24_str_start5'    , value:''},
//     {name: 'свет стратегия 24 старт6', scad: 'I205.0N71R7.1V6',      column: 'lamp_24_str_start6'    , value:''},
//     {name: 'свет стратегия 24 стоп1' , scad: 'I205.0N71R8.1V1',      column: 'lamp_24_str_stop1'     , value:''},
//     {name: 'свет стратегия 24 стоп2' , scad: 'I205.0N71R8.1V2',      column: 'lamp_24_str_stop2'     , value:''},
//     {name: 'свет стратегия 24 стоп3' , scad: 'I205.0N71R8.1V3',      column: 'lamp_24_str_stop3'     , value:''},
//     {name: 'свет стратегия 24 стоп4' , scad: 'I205.0N71R8.1V4',      column: 'lamp_24_str_stop5'     , value:''},
//     {name: 'свет стратегия 24 стоп6' , scad: 'I205.0N71R8.1V6',      column: 'lamp_24_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_61 =[
//     {name: 'свет стратегия 61 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_61_str_on1'       , value:''},
//     {name: 'свет стратегия 61 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_61_str_on2'       , value:''},
//     {name: 'свет стратегия 61 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_61_str_on3'       , value:''},
//     {name: 'свет стратегия 61 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_61_str_on4'       , value:''},
//     {name: 'свет стратегия 61 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_61_str_on5'       , value:''},
//     {name: 'свет стратегия 61 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_61_str_on6'       , value:''},
//     {name: 'свет стратегия 61 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_61_str_start1'    , value:''},
//     {name: 'свет стратегия 61 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_61_str_start2'    , value:''},
//     {name: 'свет стратегия 61 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_61_str_start3'    , value:''},
//     {name: 'свет стратегия 61 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_61_str_start4'    , value:''},
//     {name: 'свет стратегия 61 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_61_str_start5'    , value:''},
//     {name: 'свет стратегия 61 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_61_str_start6'    , value:''},
//     {name: 'свет стратегия 61 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_61_str_stop1'     , value:''},
//     {name: 'свет стратегия 61 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_61_str_stop2'     , value:''},
//     {name: 'свет стратегия 61 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_61_str_stop3'     , value:''},
//     {name: 'свет стратегия 61 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_61_str_stop4'     , value:''},
//     {name: 'свет стратегия 61 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_61_str_stop5'     , value:''},
//     {name: 'свет стратегия 61 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_61_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_62 =[
//     {name: 'свет стратегия 62 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_62_str_on1'       , value:''},
//     {name: 'свет стратегия 62 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_62_str_on2'       , value:''},
//     {name: 'свет стратегия 62 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_62_str_on3'       , value:''},
//     {name: 'свет стратегия 62 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_62_str_on4'       , value:''},
//     {name: 'свет стратегия 62 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_62_str_on5'       , value:''},
//     {name: 'свет стратегия 62 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_62_str_on6'       , value:''},
//     {name: 'свет стратегия 62 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_62_str_start1'    , value:''},
//     {name: 'свет стратегия 62 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_62_str_start2'    , value:''},
//     {name: 'свет стратегия 62 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_62_str_start3'    , value:''},
//     {name: 'свет стратегия 62 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_62_str_start4'    , value:''},
//     {name: 'свет стратегия 62 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_62_str_start5'    , value:''},
//     {name: 'свет стратегия 62 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_62_str_start6'    , value:''},
//     {name: 'свет стратегия 62 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_62_str_stop1'     , value:''},
//     {name: 'свет стратегия 62 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_62_str_stop2'     , value:''},
//     {name: 'свет стратегия 62 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_62_str_stop3'     , value:''},
//     {name: 'свет стратегия 62 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_62_str_stop4'     , value:''},
//     {name: 'свет стратегия 62 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_62_str_stop5'     , value:''},
//     {name: 'свет стратегия 62 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_62_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_63 =[
//     {name: 'свет стратегия 63 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_63_str_on1'       , value:''},
//     {name: 'свет стратегия 63 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_63_str_on2'       , value:''},
//     {name: 'свет стратегия 63 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_63_str_on3'       , value:''},
//     {name: 'свет стратегия 63 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_63_str_on4'       , value:''},
//     {name: 'свет стратегия 63 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_63_str_on5'       , value:''},
//     {name: 'свет стратегия 63 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_63_str_on6'       , value:''},
//     {name: 'свет стратегия 63 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_63_str_start1'    , value:''},
//     {name: 'свет стратегия 63 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_63_str_start2'    , value:''},
//     {name: 'свет стратегия 63 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_63_str_start3'    , value:''},
//     {name: 'свет стратегия 63 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_63_str_start4'    , value:''},
//     {name: 'свет стратегия 63 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_63_str_start5'    , value:''},
//     {name: 'свет стратегия 63 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_63_str_start6'    , value:''},
//     {name: 'свет стратегия 63 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_63_str_stop1'     , value:''},
//     {name: 'свет стратегия 63 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_63_str_stop2'     , value:''},
//     {name: 'свет стратегия 63 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_63_str_stop3'     , value:''},
//     {name: 'свет стратегия 63 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_63_str_stop4'     , value:''},
//     {name: 'свет стратегия 63 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_63_str_stop5'     , value:''},
//     {name: 'свет стратегия 63 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_63_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_71 =[
//     {name: 'свет стратегия 71 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_71_str_on1'       , value:''},
//     {name: 'свет стратегия 71 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_71_str_on2'       , value:''},
//     {name: 'свет стратегия 71 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_71_str_on3'       , value:''},
//     {name: 'свет стратегия 71 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_71_str_on4'       , value:''},
//     {name: 'свет стратегия 71 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_71_str_on5'       , value:''},
//     {name: 'свет стратегия 71 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_71_str_on6'       , value:''},
//     {name: 'свет стратегия 71 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_71_str_start1'    , value:''},
//     {name: 'свет стратегия 71 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_71_str_start2'    , value:''},
//     {name: 'свет стратегия 71 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_71_str_start3'    , value:''},
//     {name: 'свет стратегия 71 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_71_str_start4'    , value:''},
//     {name: 'свет стратегия 71 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_71_str_start5'    , value:''},
//     {name: 'свет стратегия 71 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_71_str_start6'    , value:''},
//     {name: 'свет стратегия 71 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_71_str_stop1'     , value:''},
//     {name: 'свет стратегия 71 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_71_str_stop2'     , value:''},
//     {name: 'свет стратегия 71 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_71_str_stop3'     , value:''},
//     {name: 'свет стратегия 71 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_71_str_stop4'     , value:''},
//     {name: 'свет стратегия 71 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_71_str_stop5'     , value:''},
//     {name: 'свет стратегия 71 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_71_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_72 =[
//     {name: 'свет стратегия 72 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_72_str_on1'       , value:''},
//     {name: 'свет стратегия 72 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_72_str_on2'       , value:''},
//     {name: 'свет стратегия 72 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_72_str_on3'       , value:''},
//     {name: 'свет стратегия 72 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_72_str_on4'       , value:''},
//     {name: 'свет стратегия 72 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_72_str_on5'       , value:''},
//     {name: 'свет стратегия 72 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_72_str_on6'       , value:''},
//     {name: 'свет стратегия 72 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_72_str_start1'    , value:''},
//     {name: 'свет стратегия 72 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_72_str_start2'    , value:''},
//     {name: 'свет стратегия 72 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_72_str_start3'    , value:''},
//     {name: 'свет стратегия 72 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_72_str_start4'    , value:''},
//     {name: 'свет стратегия 72 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_72_str_start5'    , value:''},
//     {name: 'свет стратегия 72 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_72_str_start6'    , value:''},
//     {name: 'свет стратегия 72 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_72_str_stop1'     , value:''},
//     {name: 'свет стратегия 72 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_72_str_stop2'     , value:''},
//     {name: 'свет стратегия 72 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_72_str_stop3'     , value:''},
//     {name: 'свет стратегия 72 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_72_str_stop4'     , value:''},
//     {name: 'свет стратегия 72 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_72_str_stop5'     , value:''},
//     {name: 'свет стратегия 72 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_72_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_73 =[
//     {name: 'свет стратегия 73 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_73_str_on1'       , value:''},
//     {name: 'свет стратегия 73 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_73_str_on2'       , value:''},
//     {name: 'свет стратегия 73 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_73_str_on3'       , value:''},
//     {name: 'свет стратегия 73 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_73_str_on4'       , value:''},
//     {name: 'свет стратегия 73 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_73_str_on5'       , value:''},
//     {name: 'свет стратегия 73 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_73_str_on6'       , value:''},
//     {name: 'свет стратегия 73 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_73_str_start1'    , value:''},
//     {name: 'свет стратегия 73 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_73_str_start2'    , value:''},
//     {name: 'свет стратегия 73 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_73_str_start3'    , value:''},
//     {name: 'свет стратегия 73 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_73_str_start4'    , value:''},
//     {name: 'свет стратегия 73 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_73_str_start5'    , value:''},
//     {name: 'свет стратегия 73 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_73_str_start6'    , value:''},
//     {name: 'свет стратегия 73 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_73_str_stop1'     , value:''},
//     {name: 'свет стратегия 73 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_73_str_stop2'     , value:''},
//     {name: 'свет стратегия 73 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_73_str_stop3'     , value:''},
//     {name: 'свет стратегия 73 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_73_str_stop4'     , value:''},
//     {name: 'свет стратегия 73 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_73_str_stop5'     , value:''},
//     {name: 'свет стратегия 73 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_73_str_stop6'     , value:''},
//
// ]
//
//
// const AGRO_light_str_31 =[
//     {name: 'свет стратегия 31 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_31_str_on1'       , value:''},
//     {name: 'свет стратегия 31 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_31_str_on2'       , value:''},
//     {name: 'свет стратегия 31 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_31_str_on3'       , value:''},
//     {name: 'свет стратегия 31 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_31_str_on4'       , value:''},
//     {name: 'свет стратегия 31 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_31_str_on5'       , value:''},
//     {name: 'свет стратегия 31 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_31_str_on6'       , value:''},
//     {name: 'свет стратегия 31 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_31_str_start1'    , value:''},
//     {name: 'свет стратегия 31 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_31_str_start2'    , value:''},
//     {name: 'свет стратегия 31 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_31_str_start3'    , value:''},
//     {name: 'свет стратегия 31 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_31_str_start4'    , value:''},
//     {name: 'свет стратегия 31 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_31_str_start5'    , value:''},
//     {name: 'свет стратегия 31 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_31_str_start6'    , value:''},
//     {name: 'свет стратегия 31 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_31_str_stop1'     , value:''},
//     {name: 'свет стратегия 31 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_31_str_stop2'     , value:''},
//     {name: 'свет стратегия 31 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_31_str_stop3'     , value:''},
//     {name: 'свет стратегия 31 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_31str_stop4'     , value:''},
//     {name: 'свет стратегия 31 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_31_str_stop5'     , value:''},
//     {name: 'свет стратегия 31 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_31_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_32 =[
//     {name: 'свет стратегия 32 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_32_str_on1'       , value:''},
//     {name: 'свет стратегия 32 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_32_str_on2'       , value:''},
//     {name: 'свет стратегия 32 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_32_str_on3'       , value:''},
//     {name: 'свет стратегия 32 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_32_str_on4'       , value:''},
//     {name: 'свет стратегия 32 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_32_str_on5'       , value:''},
//     {name: 'свет стратегия 32 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_32_str_on6'       , value:''},
//     {name: 'свет стратегия 32 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_32_str_start1'    , value:''},
//     {name: 'свет стратегия 32 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_32_str_start2'    , value:''},
//     {name: 'свет стратегия 32 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_32_str_start3'    , value:''},
//     {name: 'свет стратегия 32 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_32_str_start4'    , value:''},
//     {name: 'свет стратегия 32 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_32_str_start5'    , value:''},
//     {name: 'свет стратегия 32 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_32_str_start6'    , value:''},
//     {name: 'свет стратегия 32 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_32_str_stop1'     , value:''},
//     {name: 'свет стратегия 32 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_32_str_stop2'     , value:''},
//     {name: 'свет стратегия 32 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_32_str_stop3'     , value:''},
//     {name: 'свет стратегия 32 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_32_str_stop4'     , value:''},
//     {name: 'свет стратегия 32 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_32_str_stop5'     , value:''},
//     {name: 'свет стратегия 32 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_32_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_41 =[
//     {name: 'свет стратегия 41 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_41_str_on1'       , value:''},
//     {name: 'свет стратегия 41 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_41_str_on2'       , value:''},
//     {name: 'свет стратегия 41 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_41_str_on3'       , value:''},
//     {name: 'свет стратегия 41 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_41_str_on4'       , value:''},
//     {name: 'свет стратегия 41 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_41_str_on5'       , value:''},
//     {name: 'свет стратегия 41 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_41_str_on6'       , value:''},
//     {name: 'свет стратегия 41 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_41_str_start1'    , value:''},
//     {name: 'свет стратегия 41 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_41_str_start2'    , value:''},
//     {name: 'свет стратегия 41 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_41_str_start3'    , value:''},
//     {name: 'свет стратегия 41 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_41_str_start4'    , value:''},
//     {name: 'свет стратегия 41 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_41_str_start5'    , value:''},
//     {name: 'свет стратегия 41 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_41_str_start6'    , value:''},
//     {name: 'свет стратегия 41 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_41_str_stop1'     , value:''},
//     {name: 'свет стратегия 41 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_41_str_stop2'     , value:''},
//     {name: 'свет стратегия 41 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_41_str_stop3'     , value:''},
//     {name: 'свет стратегия 41 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_41_str_stop4'     , value:''},
//     {name: 'свет стратегия 41 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_41_str_stop5'     , value:''},
//     {name: 'свет стратегия 41 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_41_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_42 =[
//     {name: 'свет стратегия 42 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_42_str_on1'       , value:''},
//     {name: 'свет стратегия 42 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_42_str_on2'       , value:''},
//     {name: 'свет стратегия 42 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_42_str_on3'       , value:''},
//     {name: 'свет стратегия 42 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_42_str_on4'       , value:''},
//     {name: 'свет стратегия 42 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_42_str_on5'       , value:''},
//     {name: 'свет стратегия 42 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_42_str_on6'       , value:''},
//     {name: 'свет стратегия 42 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_42_str_start1'    , value:''},
//     {name: 'свет стратегия 42 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_42_str_start2'    , value:''},
//     {name: 'свет стратегия 42 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_42_str_start3'    , value:''},
//     {name: 'свет стратегия 42 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_42_str_start4'    , value:''},
//     {name: 'свет стратегия 42 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_42_str_start5'    , value:''},
//     {name: 'свет стратегия 42 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_42_str_start6'    , value:''},
//     {name: 'свет стратегия 42 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_42_str_stop1'     , value:''},
//     {name: 'свет стратегия 42 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_42_str_stop2'     , value:''},
//     {name: 'свет стратегия 42 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_42_str_stop3'     , value:''},
//     {name: 'свет стратегия 42 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_42_str_stop4'     , value:''},
//     {name: 'свет стратегия 42 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_42_str_stop5'     , value:''},
//     {name: 'свет стратегия 42 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_42_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_81 =[
//     {name: 'свет стратегия 81 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_81_str_on1'       , value:''},
//     {name: 'свет стратегия 81 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_81_str_on2'       , value:''},
//     {name: 'свет стратегия 81 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_81_str_on3'       , value:''},
//     {name: 'свет стратегия 81 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_81_str_on4'       , value:''},
//     {name: 'свет стратегия 81 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_81_str_on5'       , value:''},
//     {name: 'свет стратегия 81 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_81_str_on6'       , value:''},
//     {name: 'свет стратегия 81 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_81_str_start1'    , value:''},
//     {name: 'свет стратегия 81 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_81_str_start2'    , value:''},
//     {name: 'свет стратегия 81 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_81_str_start3'    , value:''},
//     {name: 'свет стратегия 81 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_81_str_start4'    , value:''},
//     {name: 'свет стратегия 81 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_81_str_start5'    , value:''},
//     {name: 'свет стратегия 81 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_81_str_start6'    , value:''},
//     {name: 'свет стратегия 81 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_81_str_stop1'     , value:''},
//     {name: 'свет стратегия 81 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_81_str_stop2'     , value:''},
//     {name: 'свет стратегия 81 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_81_str_stop3'     , value:''},
//     {name: 'свет стратегия 81 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_81_str_stop4'     , value:''},
//     {name: 'свет стратегия 81 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_81_str_stop5'     , value:''},
//     {name: 'свет стратегия 81 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_81_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_82 =[
//     {name: 'свет стратегия 82 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_82_str_on1'       , value:''},
//     {name: 'свет стратегия 82 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_82_str_on2'       , value:''},
//     {name: 'свет стратегия 82 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_82_str_on3'       , value:''},
//     {name: 'свет стратегия 82 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_82_str_on4'       , value:''},
//     {name: 'свет стратегия 82 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_82_str_on5'       , value:''},
//     {name: 'свет стратегия 82 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_82_str_on6'       , value:''},
//     {name: 'свет стратегия 82 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_82_str_start1'    , value:''},
//     {name: 'свет стратегия 82 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_82_str_start2'    , value:''},
//     {name: 'свет стратегия 82 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_82_str_start3'    , value:''},
//     {name: 'свет стратегия 82 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_82_str_start4'    , value:''},
//     {name: 'свет стратегия 82 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_82_str_start5'    , value:''},
//     {name: 'свет стратегия 82 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_82_str_start6'    , value:''},
//     {name: 'свет стратегия 82 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_82_str_stop1'     , value:''},
//     {name: 'свет стратегия 82 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_82_str_stop2'     , value:''},
//     {name: 'свет стратегия 82 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_82_str_stop3'     , value:''},
//     {name: 'свет стратегия 82 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_82_str_stop4'     , value:''},
//     {name: 'свет стратегия 82 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_82_str_stop5'     , value:''},
//     {name: 'свет стратегия 82 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_82_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_83 =[
//     {name: 'свет стратегия 83 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_83_str_on1'       , value:''},
//     {name: 'свет стратегия 83 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_83_str_on2'       , value:''},
//     {name: 'свет стратегия 83 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_83_str_on3'       , value:''},
//     {name: 'свет стратегия 83 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_83_str_on4'       , value:''},
//     {name: 'свет стратегия 83 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_83_str_on5'       , value:''},
//     {name: 'свет стратегия 83 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_83_str_on6'       , value:''},
//     {name: 'свет стратегия 83 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_83_str_start1'    , value:''},
//     {name: 'свет стратегия 83 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_83_str_start2'    , value:''},
//     {name: 'свет стратегия 83 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_83_str_start3'    , value:''},
//     {name: 'свет стратегия 83 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_83_str_start4'    , value:''},
//     {name: 'свет стратегия 83 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_83_str_start5'    , value:''},
//     {name: 'свет стратегия 83 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_83_str_start6'    , value:''},
//     {name: 'свет стратегия 83 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_83_str_stop1'     , value:''},
//     {name: 'свет стратегия 83 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_83_str_stop2'     , value:''},
//     {name: 'свет стратегия 83 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_83_str_stop3'     , value:''},
//     {name: 'свет стратегия 83 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_83_str_stop4'     , value:''},
//     {name: 'свет стратегия 83 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_83_str_stop5'     , value:''},
//     {name: 'свет стратегия 83 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_83_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_91 =[
//     {name: 'свет стратегия 91 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_91_str_on1'       , value:''},
//     {name: 'свет стратегия 91 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_91_str_on2'       , value:''},
//     {name: 'свет стратегия 91 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_91_str_on3'       , value:''},
//     {name: 'свет стратегия 91 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_91_str_on4'       , value:''},
//     {name: 'свет стратегия 91 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_91_str_on5'       , value:''},
//     {name: 'свет стратегия 91 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_91_str_on6'       , value:''},
//     {name: 'свет стратегия 91 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_91_str_start1'    , value:''},
//     {name: 'свет стратегия 91 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_91_str_start2'    , value:''},
//     {name: 'свет стратегия 91 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_91_str_start3'    , value:''},
//     {name: 'свет стратегия 91 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_91_str_start4'    , value:''},
//     {name: 'свет стратегия 91 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_91_str_start5'    , value:''},
//     {name: 'свет стратегия 91 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_91_str_start6'    , value:''},
//     {name: 'свет стратегия 91 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_91_str_stop1'     , value:''},
//     {name: 'свет стратегия 91 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_91_str_stop2'     , value:''},
//     {name: 'свет стратегия 91 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_91_str_stop3'     , value:''},
//     {name: 'свет стратегия 91 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_91_str_stop4'     , value:''},
//     {name: 'свет стратегия 91 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_91_str_stop6'     , value:''},
// ]
//
// const AGRO_light_str_92 =[
//     {name: 'свет стратегия 92 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_92_str_on1'       , value:''},
//     {name: 'свет стратегия 92 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_92_str_on2'       , value:''},
//     {name: 'свет стратегия 92 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_92_str_on3'       , value:''},
//     {name: 'свет стратегия 92 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_92_str_on4'       , value:''},
//     {name: 'свет стратегия 92 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_92_str_on5'       , value:''},
//     {name: 'свет стратегия 92 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_92_str_on6'       , value:''},
//     {name: 'свет стратегия 92 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_92_str_start1'    , value:''},
//     {name: 'свет стратегия 92 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_92_str_start2'    , value:''},
//     {name: 'свет стратегия 92 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_92_str_start3'    , value:''},
//     {name: 'свет стратегия 92 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_92_str_start4'    , value:''},
//     {name: 'свет стратегия 92 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_92_str_start5'    , value:''},
//     {name: 'свет стратегия 92 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_92_str_start6'    , value:''},
//     {name: 'свет стратегия 92 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_92_str_stop1'     , value:''},
//     {name: 'свет стратегия 92 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_92_str_stop2'     , value:''},
//     {name: 'свет стратегия 92 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_92_str_stop3'     , value:''},
//     {name: 'свет стратегия 92 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_92_str_stop4'     , value:''},
//     {name: 'свет стратегия 92 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_92_str_stop5'     , value:''},
//     {name: 'свет стратегия 92 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_92_str_stop6'     , value:''},
//
// ]
//
// const AGRO_light_str_93 =[
//     {name: 'свет стратегия 93 вкл1'  , scad: 'I205.0N81R6.1V1',      column: 'lamp_93_str_on1'       , value:''},
//     {name: 'свет стратегия 93 вкл2'  , scad: 'I205.0N81R6.1V2',      column: 'lamp_93_str_on2'       , value:''},
//     {name: 'свет стратегия 93 вкл3'  , scad: 'I205.0N81R6.1V3',      column: 'lamp_93_str_on3'       , value:''},
//     {name: 'свет стратегия 93 вкл4'  , scad: 'I205.0N81R6.1V4',      column: 'lamp_93_str_on4'       , value:''},
//     {name: 'свет стратегия 93 вкл5'  , scad: 'I205.0N81R6.1V5',      column: 'lamp_93_str_on5'       , value:''},
//     {name: 'свет стратегия 93 вкл6'  , scad: 'I205.0N81R6.1V6',      column: 'lamp_93_str_on6'       , value:''},
//     {name: 'свет стратегия 93 старт1', scad: 'I205.0N81R7.1V1',      column: 'lamp_93_str_start1'    , value:''},
//     {name: 'свет стратегия 93 старт2', scad: 'I205.0N81R7.1V2',      column: 'lamp_93_str_start2'    , value:''},
//     {name: 'свет стратегия 93 старт3', scad: 'I205.0N81R7.1V3',      column: 'lamp_93_str_start3'    , value:''},
//     {name: 'свет стратегия 93 старт4', scad: 'I205.0N81R7.1V4',      column: 'lamp_93_str_start4'    , value:''},
//     {name: 'свет стратегия 93 старт5', scad: 'I205.0N81R7.1V5',      column: 'lamp_93_str_start5'    , value:''},
//     {name: 'свет стратегия 93 старт6', scad: 'I205.0N81R7.1V6',      column: 'lamp_93_str_start6'    , value:''},
//     {name: 'свет стратегия 93 стоп1' , scad: 'I205.0N81R8.1V1',      column: 'lamp_93_str_stop1'     , value:''},
//     {name: 'свет стратегия 93 стоп2' , scad: 'I205.0N81R8.1V2',      column: 'lamp_93_str_stop2'     , value:''},
//     {name: 'свет стратегия 93 стоп3' , scad: 'I205.0N81R8.1V3',      column: 'lamp_93_str_stop3'     , value:''},
//     {name: 'свет стратегия 93 стоп4' , scad: 'I205.0N81R8.1V4',      column: 'lamp_93_str_stop4'     , value:''},
//     {name: 'свет стратегия 93 стоп5' , scad: 'I205.0N81R8.1V5',      column: 'lamp_93_str_stop5'     , value:''},
//     {name: 'свет стратегия 93 стоп6' , scad: 'I205.0N81R8.1V6',      column: 'lamp_93_str_stop6'     , value:''},
//
// ]
//
//
// const SunRise =[
//     {name: 'восход'  , scad: 'M4.0N1R19.1V1',      column: 'sunrise'       , value:''},
//     {name: 'закат'   , scad: 'M4.0N1R19.1V2',      column: 'sunset'        , value:''},
//
//
// ]

module.exports = {  commonAGRO_12, commonAGRO_345, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,

    // AGRO605_water, AGRO606_water, AGRO607_water,
    //
    // AGRO605_10_co2, AGRO605_50_co2, AGRO606_20_co2, AGRO606_60_co2, AGRO606_70_co2, AGRO607_30_co2, AGRO607_40_co2,  AGRO607_80_co2,  AGRO607_90_co2,
    // AGRO605_light, AGRO606_light, AGRO607_light,
    //
    // AGRO_light_str_11, AGRO_light_str_12, AGRO_light_str_13, AGRO_light_str_14,
    // AGRO_light_str_51, AGRO_light_str_52,
    // AGRO_light_str_21, AGRO_light_str_22, AGRO_light_str_23, AGRO_light_str_24,
    // AGRO_light_str_61, AGRO_light_str_62, AGRO_light_str_63,
    // AGRO_light_str_71, AGRO_light_str_72, AGRO_light_str_73,
    // AGRO_light_str_31, AGRO_light_str_32,
    // AGRO_light_str_41, AGRO_light_str_42,
    // AGRO_light_str_81, AGRO_light_str_82, AGRO_light_str_83,
    // AGRO_light_str_91, AGRO_light_str_92, AGRO_light_str_93,
    //
    // SunRise,
}
