

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
    {name: 'СО2',                         scad: 'M100.0N1R2.111V5',   column: 'co2',            value:'', dataType: 'co2'},

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



const M4 = [

    {name: 'Наружная темп.'     , scad: 'M4.0N1R4.1V1',       column: 'temp'        , value:''},
    {name: 'Скорость ветра'     , scad: 'M4.0N1R14.1V1',      column: 'wind'        , value:''},
    {name: 'Направление ветра'  , scad: 'M4.0N1R16.1V1',      column: 'wind_dir'    , value:''},
    {name: 'Освещенность'       , scad: 'M4.0N1R38.1V1',      column: 'light'       , value:''},
    {name: 'Изм. освещенность'  , scad: 'M4.0N1R38.1V2',      column: 'mLight'      , value:''},
    {name: 'Сумма освещенности' , scad: 'M4.0N1R39.1V1',      column: 'sumLight'    , value:''},
    {name: 'Дождь'              , scad: 'M4.0N1R1.1V1',       column: 'rain'        , value:''},
    {name: 'Буря'               , scad: 'M4.0N1R1.1V2',       column: 'storm'       , value:''},
    {name: 'Мороз'              , scad: 'M4.0N1R1.1V3',       column: 'cold'        , value:''},
    {name: 'Восход'             , scad: 'M4.0N1R27.1V1',      column: 'sunrise'     , value:''},
    {name: 'Закат'              , scad: 'M4.0N1R27.1V2',      column: 'sunset'      , value:''},

]


const bobrov3_M432_water =[
    {name: 'расход 6 1'          , scad: 'M432.1N1R4.31V1',   column: 'M432_6_1'          , value:''},
    {name: 'расход 6 2'          , scad: 'M432.1N1R4.31V2',   column: 'M432_6_2'          , value:''},
    {name: 'расход 7 1'          , scad: 'M432.1N1R4.32V1',   column: 'M432_7_1'          , value:''},
    {name: 'расход 7 2'          , scad: 'M432.1N1R4.32V2',   column: 'M432_7_2'          , value:''},
    {name: 'расход 8 1'          , scad: 'M432.1N1R4.61V1',   column: 'M432_8_1'          , value:''},
    {name: 'расход 8 2'          , scad: 'M432.1N1R4.61V2',   column: 'M432_8_2'          , value:''},
    {name: 'расход 8 3'          , scad: 'M432.1N1R4.62V1',   column: 'M432_8_3'          , value:''},
    {name: 'расход 8 4'          , scad: 'M432.1N1R4.62V2',   column: 'M432_8_4'          , value:''},
    {name: 'расход 9 1'          , scad: 'M432.1N1R4.63V1',   column: 'M432_9_1'          , value:''},
    {name: 'расход 9 2'          , scad: 'M432.1N1R4.63V2',   column: 'M432_9_2'          , value:''},
    {name: 'расход 9 1'          , scad: 'M432.1N1R4.64V1',   column: 'M432_9_3'          , value:''},
    {name: 'расход 9 2'          , scad: 'M432.1N1R4.64V2',   column: 'M432_9_4'          , value:''},
]

const bobrov4_M432_water =[
    {name: 'расход 10 1'          , scad: 'M432.1N1R4.51V1',   column: 'M432_10_1'          , value:''},
    {name: 'расход 10 2'          , scad: 'M432.1N1R4.51V2',   column: 'M432_10_2'          , value:''},
    {name: 'расход 11 1'          , scad: 'M432.1N1R4.52V1',   column: 'M432_11_1'          , value:''},
    {name: 'расход 11 2'          , scad: 'M432.1N1R4.52V2',   column: 'M432_11_2'          , value:''},
    {name: 'расход 12 1'          , scad: 'M432.1N1R4.53V1',   column: 'M432_12_1'          , value:''},
    {name: 'расход 12 2'          , scad: 'M432.1N1R4.53V2',   column: 'M432_12_2'          , value:''},
    {name: 'расход 12 3'          , scad: 'M432.1N1R4.54V1',   column: 'M432_12_3'          , value:''},
    {name: 'расход 12 4'          , scad: 'M432.1N1R4.54V2',   column: 'M432_12_4'          , value:''},

]

const bobrov5_M432_water =[
    {name: 'расход 13 1'          , scad: 'M432.1N1R4.41V1',   column: 'M432_13_1'          , value:''},
    {name: 'расход 13 2'          , scad: 'M432.1N1R4.41V2',   column: 'M432_13_2'          , value:''},
    {name: 'расход 13 3'          , scad: 'M432.1N1R4.42V1',   column: 'M432_13_3'          , value:''},
    {name: 'расход 13 4'          , scad: 'M432.1N1R4.42V2',   column: 'M432_13_4'          , value:''},
    {name: 'расход 14 1'          , scad: 'M432.1N1R4.43V1',   column: 'M432_14_1'          , value:''},
    {name: 'расход 14 2'          , scad: 'M432.1N1R4.43V2',   column: 'M432_14_2'          , value:''},
    {name: 'расход 14 3'          , scad: 'M432.1N1R4.44V1',   column: 'M432_14_3'          , value:''},
    {name: 'расход 14 4'          , scad: 'M432.1N1R4.44V2',   column: 'M432_14_4'          , value:''},

]


const bobrov3_M203_light =[

    {name: 'свет 6 контур 1a'      , scad: 'M203.1N1R3.311V1',    column: 'lamp_6_cont1a'         , value:''},
    {name: 'свет 6 контур 1b'      , scad: 'M203.1N1R3.311V2',    column: 'lamp_6_cont1b'         , value:''},
    {name: 'свет 6 контур 2a'      , scad: 'M203.1N1R3.312V1',    column: 'lamp_6_cont2a'         , value:''},
    {name: 'свет 6 контур 2b'      , scad: 'M203.1N1R3.312V2',    column: 'lamp_6_cont2b'         , value:''},
    {name: 'свет 6 контур 3a'      , scad: 'M203.1N1R3.313V1',    column: 'lamp_6_cont3a'         , value:''},
    {name: 'свет 6 контур 3b'      , scad: 'M203.1N1R3.313V2',    column: 'lamp_6_cont3b'         , value:''},
    {name: 'свет 6 контур 4a'      , scad: 'M203.1N1R3.314V1',    column: 'lamp_6_cont4a'         , value:''},
    {name: 'свет 6 контур 4b'      , scad: 'M203.1N1R3.314V2',    column: 'lamp_6_cont4b'         , value:''},

    {name: 'свет 7 контур 1a'      , scad: 'M203.1N1R3.321V1',    column: 'lamp_7_cont1a'         , value:''},
    {name: 'свет 7 контур 1b'      , scad: 'M203.1N1R3.321V2',    column: 'lamp_7_cont1b'         , value:''},
    {name: 'свет 7 контур 2a'      , scad: 'M203.1N1R3.322V1',    column: 'lamp_7_cont2a'         , value:''},
    {name: 'свет 7 контур 2b'      , scad: 'M203.1N1R3.322V2',    column: 'lamp_7_cont2b'         , value:''},
    {name: 'свет 7 контур 3a'      , scad: 'M203.1N1R3.323V1',    column: 'lamp_7_cont3a'         , value:''},
    {name: 'свет 7 контур 3b'      , scad: 'M203.1N1R3.323V2',    column: 'lamp_7_cont3b'         , value:''},
    {name: 'свет 7 контур 4a'      , scad: 'M203.1N1R3.324V1',    column: 'lamp_7_cont4a'         , value:''},
    {name: 'свет 7 контур 4b'      , scad: 'M203.1N1R3.324V2',    column: 'lamp_7_cont4b'         , value:''},

    {name: 'свет 8 контур 1a'      , scad: 'M203.1N1R3.611V1',    column: 'lamp_8_cont1a'         , value:''},
    {name: 'свет 8 контур 1b'      , scad: 'M203.1N1R3.611V2',    column: 'lamp_8_cont1b'         , value:''},
    {name: 'свет 8 контур 2a'      , scad: 'M203.1N1R3.612V1',    column: 'lamp_8_cont2a'         , value:''},
    {name: 'свет 8 контур 2b'      , scad: 'M203.1N1R3.612V2',    column: 'lamp_8_cont2b'         , value:''},
    {name: 'свет 8 контур 3a'      , scad: 'M203.1N1R3.613V1',    column: 'lamp_8_cont3a'         , value:''},
    {name: 'свет 8 контур 3b'      , scad: 'M203.1N1R3.613V2',    column: 'lamp_8_cont3b'         , value:''},
    {name: 'свет 8 контур 4a'      , scad: 'M203.1N1R3.614V1',    column: 'lamp_8_cont4a'         , value:''},
    {name: 'свет 8 контур 4b'      , scad: 'M203.1N1R3.614V2',    column: 'lamp_8_cont4b'         , value:''},
    {name: 'свет 8 контур 5a'      , scad: 'M203.1N1R3.615V1',    column: 'lamp_8_cont5a'         , value:''},
    {name: 'свет 8 контур 5b'      , scad: 'M203.1N1R3.615V2',    column: 'lamp_8_cont5b'         , value:''},
    {name: 'свет 8 контур 6a'      , scad: 'M203.1N1R3.616V1',    column: 'lamp_8_cont6a'         , value:''},
    {name: 'свет 8 контур 6b'      , scad: 'M203.1N1R3.616V2',    column: 'lamp_8_cont6b'         , value:''},

    {name: 'свет 9 контур 1a'      , scad: 'M203.1N1R3.621V1',    column: 'lamp_9_cont1a'         , value:''},
    {name: 'свет 9 контур 1b'      , scad: 'M203.1N1R3.621V2',    column: 'lamp_9_cont1b'         , value:''},
    {name: 'свет 9 контур 2a'      , scad: 'M203.1N1R3.622V1',    column: 'lamp_9_cont2a'         , value:''},
    {name: 'свет 9 контур 2b'      , scad: 'M203.1N1R3.622V2',    column: 'lamp_9_cont2b'         , value:''},
    {name: 'свет 9 контур 3a'      , scad: 'M203.1N1R3.623V1',    column: 'lamp_9_cont3a'         , value:''},
    {name: 'свет 9 контур 3b'      , scad: 'M203.1N1R3.623V2',    column: 'lamp_9_cont3b'         , value:''},
    {name: 'свет 9 контур 4a'      , scad: 'M203.1N1R3.624V1',    column: 'lamp_9_cont4a'         , value:''},
    {name: 'свет 9 контур 4b'      , scad: 'M203.1N1R3.624V2',    column: 'lamp_9_cont4b'         , value:''},
    {name: 'свет 9 контур 5a'      , scad: 'M203.1N1R3.625V1',    column: 'lamp_9_cont5a'         , value:''},
    {name: 'свет 9 контур 5b'      , scad: 'M203.1N1R3.625V2',    column: 'lamp_9_cont5b'         , value:''},
    {name: 'свет 9 контур 6a'      , scad: 'M203.1N1R3.626V1',    column: 'lamp_9_cont6a'         , value:''},
    {name: 'свет 9 контур 6b'      , scad: 'M203.1N1R3.626V2',    column: 'lamp_9_cont6b'         , value:''},

]

const bobrov4_M203_light =[

    {name: 'свет 10 контур 1a'      , scad: 'M203.1N1R3.514V1',    column: 'lamp_10_cont1a'         , value:''},
    {name: 'свет 10 контур 1b'      , scad: 'M203.1N1R3.514V2',    column: 'lamp_10_cont1b'         , value:''},
    {name: 'свет 10 контур 2a'      , scad: 'M203.1N1R3.515V1',    column: 'lamp_10_cont2a'         , value:''},
    {name: 'свет 10 контур 2b'      , scad: 'M203.1N1R3.515V2',    column: 'lamp_10_cont2b'         , value:''},
    {name: 'свет 10 контур 3a'      , scad: 'M203.1N1R3.516V1',    column: 'lamp_10_cont3a'         , value:''},
    {name: 'свет 10 контур 3b'      , scad: 'M203.1N1R3.516V2',    column: 'lamp_10_cont3b'         , value:''},

    {name: 'свет 11 контур 1a'      , scad: 'M203.1N1R3.511V1',    column: 'lamp_11_cont1a'         , value:''},
    {name: 'свет 11 контур 1b'      , scad: 'M203.1N1R3.511V2',    column: 'lamp_11_cont1b'         , value:''},
    {name: 'свет 11 контур 2a'      , scad: 'M203.1N1R3.512V1',    column: 'lamp_11_cont2a'         , value:''},
    {name: 'свет 11 контур 2b'      , scad: 'M203.1N1R3.512V2',    column: 'lamp_11_cont2b'         , value:''},
    {name: 'свет 11 контур 3a'      , scad: 'M203.1N1R3.513V1',    column: 'lamp_11_cont3a'         , value:''},
    {name: 'свет 11 контур 3b'      , scad: 'M203.1N1R3.513V2',    column: 'lamp_11_cont3b'         , value:''},

    {name: 'свет 12 контур 1a'      , scad: 'M203.1N1R3.521V1',    column: 'lamp_12_cont1a'         , value:''},
    {name: 'свет 12 контур 1b'      , scad: 'M203.1N1R3.521V2',    column: 'lamp_12_cont1b'         , value:''},
    {name: 'свет 12 контур 2a'      , scad: 'M203.1N1R3.522V1',    column: 'lamp_12_cont2a'         , value:''},
    {name: 'свет 12 контур 2b'      , scad: 'M203.1N1R3.522V2',    column: 'lamp_12_cont2b'         , value:''},
    {name: 'свет 12 контур 3a'      , scad: 'M203.1N1R3.523V1',    column: 'lamp_12_cont3a'         , value:''},
    {name: 'свет 12 контур 3b'      , scad: 'M203.1N1R3.523V2',    column: 'lamp_12_cont3b'         , value:''},
    {name: 'свет 12 контур 4a'      , scad: 'M203.1N1R3.524V1',    column: 'lamp_12_cont4a'         , value:''},
    {name: 'свет 12 контур 4b'      , scad: 'M203.1N1R3.524V2',    column: 'lamp_12_cont4b'         , value:''},
    {name: 'свет 12 контур 5a'      , scad: 'M203.1N1R3.525V1',    column: 'lamp_12_cont5a'         , value:''},
    {name: 'свет 12 контур 5b'      , scad: 'M203.1N1R3.525V2',    column: 'lamp_12_cont5b'         , value:''},
    {name: 'свет 12 контур 6a'      , scad: 'M203.1N1R3.526V1',    column: 'lamp_12_cont6a'         , value:''},
    {name: 'свет 12 контур 6b'      , scad: 'M203.1N1R3.526V2',    column: 'lamp_12_cont6b'         , value:''},

]

const bobrov5_M203_light =[

    {name: 'свет 13 контур 1a'      , scad: 'M203.1N1R3.411V1',    column: 'lamp_13_cont1a'         , value:''},
    {name: 'свет 13 контур 1b'      , scad: 'M203.1N1R3.411V2',    column: 'lamp_13_cont1b'         , value:''},
    {name: 'свет 13 контур 2a'      , scad: 'M203.1N1R3.412V1',    column: 'lamp_13_cont2a'         , value:''},
    {name: 'свет 13 контур 2b'      , scad: 'M203.1N1R3.412V2',    column: 'lamp_13_cont2b'         , value:''},
    {name: 'свет 13 контур 3a'      , scad: 'M203.1N1R3.413V1',    column: 'lamp_13_cont3a'         , value:''},
    {name: 'свет 13 контур 3b'      , scad: 'M203.1N1R3.413V2',    column: 'lamp_13_cont3b'         , value:''},
    {name: 'свет 13 контур 4a'      , scad: 'M203.1N1R3.414V1',    column: 'lamp_13_cont4a'         , value:''},
    {name: 'свет 13 контур 4b'      , scad: 'M203.1N1R3.414V2',    column: 'lamp_13_cont4b'         , value:''},
    {name: 'свет 13 контур 5a'      , scad: 'M203.1N1R3.415V1',    column: 'lamp_13_cont5a'         , value:''},
    {name: 'свет 13 контур 5b'      , scad: 'M203.1N1R3.415V2',    column: 'lamp_13_cont5b'         , value:''},
    {name: 'свет 13 контур 6a'      , scad: 'M203.1N1R3.416V1',    column: 'lamp_13_cont6a'         , value:''},
    {name: 'свет 13 контур 6b'      , scad: 'M203.1N1R3.416V2',    column: 'lamp_13_cont6b'         , value:''},

    {name: 'свет 14 контур 1a'      , scad: 'M203.1N1R3.421V1',    column: 'lamp_14_cont1a'         , value:''},
    {name: 'свет 14 контур 1b'      , scad: 'M203.1N1R3.421V2',    column: 'lamp_14_cont1b'         , value:''},
    {name: 'свет 14 контур 2a'      , scad: 'M203.1N1R3.422V1',    column: 'lamp_14_cont2a'         , value:''},
    {name: 'свет 14 контур 2b'      , scad: 'M203.1N1R3.422V2',    column: 'lamp_14_cont2b'         , value:''},
    {name: 'свет 14 контур 3a'      , scad: 'M203.1N1R3.423V1',    column: 'lamp_14_cont3a'         , value:''},
    {name: 'свет 14 контур 3b'      , scad: 'M203.1N1R3.423V2',    column: 'lamp_14_cont3b'         , value:''},
    {name: 'свет 14 контур 4a'      , scad: 'M203.1N1R3.424V1',    column: 'lamp_14_cont4a'         , value:''},
    {name: 'свет 14 контур 4b'      , scad: 'M203.1N1R3.424V2',    column: 'lamp_14_cont4b'         , value:''},
    {name: 'свет 14 контур 5a'      , scad: 'M203.1N1R3.425V1',    column: 'lamp_14_cont5a'         , value:''},
    {name: 'свет 14 контур 5b'      , scad: 'M203.1N1R3.425V2',    column: 'lamp_14_cont5b'         , value:''},
    {name: 'свет 14 контур 6a'      , scad: 'M203.1N1R3.426V1',    column: 'lamp_14_cont6a'         , value:''},
    {name: 'свет 14 контур 6b'      , scad: 'M203.1N1R3.426V2',    column: 'lamp_14_cont6b'         , value:''},

]

const bobrov3_6_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N31R2.2V6',   column: 'co2_6'          , value:''},
]
const bobrov3_7_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N32R2.2V6',   column: 'co2_7'          , value:''},
]
const bobrov3_8_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N61R2.2V6',   column: 'co2_8'          , value:''},
]
const bobrov3_9_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N62R2.2V6',   column: 'co2_9'          , value:''},
]
const bobrov4_10_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N51R2.2V6',   column: 'co2_10'          , value:''},
]
const bobrov4_11_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N52R2.2V6',   column: 'co2_11'          , value:''},
]
const bobrov4_12_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N53R2.2V6',   column: 'co2_12'          , value:''},
]
const bobrov5_13_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N41R2.2V6',   column: 'co2_13'          , value:''},
]
const bobrov5_14_co2 =[
    {name: 'дозация СО2'           , scad: 'M170.1N42R2.2V6',   column: 'co2_14'          , value:''},
]


const bobrov3_light_str_6 =[
    {name: 'свет стратегия 6 вкл1'  , scad: 'I205.0N31R6.1V1',      column: 'lamp_6_str_on1'       , value:''},
    {name: 'свет стратегия 6 вкл2'  , scad: 'I205.0N31R6.1V2',      column: 'lamp_6_str_on2'       , value:''},
    {name: 'свет стратегия 6 вкл3'  , scad: 'I205.0N31R6.1V3',      column: 'lamp_6_str_on3'       , value:''},
    {name: 'свет стратегия 6 вкл4'  , scad: 'I205.0N31R6.1V4',      column: 'lamp_6_str_on4'       , value:''},
    {name: 'свет стратегия 6 вкл5'  , scad: 'I205.0N31R6.1V5',      column: 'lamp_6_str_on5'       , value:''},
    {name: 'свет стратегия 6 вкл6'  , scad: 'I205.0N31R6.1V6',      column: 'lamp_6_str_on6'       , value:''},
    {name: 'свет стратегия 6 старт1', scad: 'I205.0N31R7.1V1',      column: 'lamp_6_str_start1'    , value:''},
    {name: 'свет стратегия 6 старт2', scad: 'I205.0N31R7.1V2',      column: 'lamp_6_str_start2'    , value:''},
    {name: 'свет стратегия 6 старт3', scad: 'I205.0N31R7.1V3',      column: 'lamp_6_str_start3'    , value:''},
    {name: 'свет стратегия 6 старт4', scad: 'I205.0N31R7.1V4',      column: 'lamp_6_str_start4'    , value:''},
    {name: 'свет стратегия 6 старт5', scad: 'I205.0N31R7.1V5',      column: 'lamp_6_str_start5'    , value:''},
    {name: 'свет стратегия 6 старт6', scad: 'I205.0N31R7.1V6',      column: 'lamp_6_str_start6'    , value:''},
    {name: 'свет стратегия 6 стоп1' , scad: 'I205.0N31R8.1V1',      column: 'lamp_6_str_stop1'     , value:''},
    {name: 'свет стратегия 6 стоп2' , scad: 'I205.0N31R8.1V2',      column: 'lamp_6_str_stop2'     , value:''},
    {name: 'свет стратегия 6 стоп3' , scad: 'I205.0N31R8.1V3',      column: 'lamp_6_str_stop3'     , value:''},
    {name: 'свет стратегия 6 стоп4' , scad: 'I205.0N31R8.1V4',      column: 'lamp_6_str_stop4'     , value:''},
    {name: 'свет стратегия 6 стоп5' , scad: 'I205.0N31R8.1V5',      column: 'lamp_6_str_stop5'     , value:''},
    {name: 'свет стратегия 6 стоп6' , scad: 'I205.0N31R8.1V6',      column: 'lamp_6_str_stop6'     , value:''},

]

const bobrov3_light_str_7 =[
    {name: 'свет стратегия 7 вкл1'  , scad: 'I205.0N32R6.1V1',      column: 'lamp_7_str_on1'       , value:''},
    {name: 'свет стратегия 7 вкл2'  , scad: 'I205.0N32R6.1V2',      column: 'lamp_7_str_on2'       , value:''},
    {name: 'свет стратегия 7 вкл3'  , scad: 'I205.0N32R6.1V3',      column: 'lamp_7_str_on3'       , value:''},
    {name: 'свет стратегия 7 вкл4'  , scad: 'I205.0N32R6.1V4',      column: 'lamp_7_str_on4'       , value:''},
    {name: 'свет стратегия 7 вкл5'  , scad: 'I205.0N32R6.1V5',      column: 'lamp_7_str_on5'       , value:''},
    {name: 'свет стратегия 7 вкл6'  , scad: 'I205.0N32R6.1V6',      column: 'lamp_7_str_on6'       , value:''},
    {name: 'свет стратегия 7 старт1', scad: 'I205.0N32R7.1V1',      column: 'lamp_7_str_start1'    , value:''},
    {name: 'свет стратегия 7 старт2', scad: 'I205.0N32R7.1V2',      column: 'lamp_7_str_start2'    , value:''},
    {name: 'свет стратегия 7 старт3', scad: 'I205.0N32R7.1V3',      column: 'lamp_7_str_start3'    , value:''},
    {name: 'свет стратегия 7 старт4', scad: 'I205.0N32R7.1V4',      column: 'lamp_7_str_start4'    , value:''},
    {name: 'свет стратегия 7 старт5', scad: 'I205.0N32R7.1V5',      column: 'lamp_7_str_start5'    , value:''},
    {name: 'свет стратегия 7 старт6', scad: 'I205.0N32R7.1V6',      column: 'lamp_7_str_start6'    , value:''},
    {name: 'свет стратегия 7 стоп1' , scad: 'I205.0N32R8.1V1',      column: 'lamp_7_str_stop1'     , value:''},
    {name: 'свет стратегия 7 стоп2' , scad: 'I205.0N32R8.1V2',      column: 'lamp_7_str_stop2'     , value:''},
    {name: 'свет стратегия 7 стоп3' , scad: 'I205.0N32R8.1V3',      column: 'lamp_7_str_stop3'     , value:''},
    {name: 'свет стратегия 7 стоп4' , scad: 'I205.0N32R8.1V4',      column: 'lamp_7_str_stop4'     , value:''},
    {name: 'свет стратегия 7 стоп5' , scad: 'I205.0N32R8.1V5',      column: 'lamp_7_str_stop5'     , value:''},
    {name: 'свет стратегия 7 стоп6' , scad: 'I205.0N32R8.1V6',      column: 'lamp_7_str_stop6'     , value:''},

]

const bobrov3_light_str_8 =[
    {name: 'свет стратегия 8 вкл1'  , scad: 'I205.0N61R6.1V1',      column: 'lamp_8_str_on1'       , value:''},
    {name: 'свет стратегия 8 вкл2'  , scad: 'I205.0N61R6.1V2',      column: 'lamp_8_str_on2'       , value:''},
    {name: 'свет стратегия 8 вкл3'  , scad: 'I205.0N61R6.1V3',      column: 'lamp_8_str_on3'       , value:''},
    {name: 'свет стратегия 8 вкл4'  , scad: 'I205.0N61R6.1V4',      column: 'lamp_8_str_on4'       , value:''},
    {name: 'свет стратегия 8 вкл5'  , scad: 'I205.0N61R6.1V5',      column: 'lamp_8_str_on5'       , value:''},
    {name: 'свет стратегия 8 вкл6'  , scad: 'I205.0N61R6.1V6',      column: 'lamp_8_str_on6'       , value:''},
    {name: 'свет стратегия 8 старт1', scad: 'I205.0N61R7.1V1',      column: 'lamp_8_str_start1'    , value:''},
    {name: 'свет стратегия 8 старт2', scad: 'I205.0N61R7.1V2',      column: 'lamp_8_str_start2'    , value:''},
    {name: 'свет стратегия 8 старт3', scad: 'I205.0N61R7.1V3',      column: 'lamp_8_str_start3'    , value:''},
    {name: 'свет стратегия 8 старт4', scad: 'I205.0N61R7.1V4',      column: 'lamp_8_str_start4'    , value:''},
    {name: 'свет стратегия 8 старт5', scad: 'I205.0N61R7.1V5',      column: 'lamp_8_str_start5'    , value:''},
    {name: 'свет стратегия 8 старт6', scad: 'I205.0N61R7.1V6',      column: 'lamp_8_str_start6'    , value:''},
    {name: 'свет стратегия 8 стоп1' , scad: 'I205.0N61R8.1V1',      column: 'lamp_8_str_stop1'     , value:''},
    {name: 'свет стратегия 8 стоп2' , scad: 'I205.0N61R8.1V2',      column: 'lamp_8_str_stop2'     , value:''},
    {name: 'свет стратегия 8 стоп3' , scad: 'I205.0N61R8.1V3',      column: 'lamp_8_str_stop3'     , value:''},
    {name: 'свет стратегия 8 стоп4' , scad: 'I205.0N61R8.1V4',      column: 'lamp_8_str_stop4'     , value:''},
    {name: 'свет стратегия 8 стоп5' , scad: 'I205.0N61R8.1V5',      column: 'lamp_8_str_stop5'     , value:''},
    {name: 'свет стратегия 8 стоп6' , scad: 'I205.0N61R8.1V6',      column: 'lamp_8_str_stop6'     , value:''},

]

const bobrov3_light_str_9 =[
    {name: 'свет стратегия 9 вкл1'  , scad: 'I205.0N62R6.1V1',      column: 'lamp_9_str_on1'       , value:''},
    {name: 'свет стратегия 9 вкл2'  , scad: 'I205.0N62R6.1V2',      column: 'lamp_9_str_on2'       , value:''},
    {name: 'свет стратегия 9 вкл3'  , scad: 'I205.0N62R6.1V3',      column: 'lamp_9_str_on3'       , value:''},
    {name: 'свет стратегия 9 вкл4'  , scad: 'I205.0N62R6.1V4',      column: 'lamp_9_str_on4'       , value:''},
    {name: 'свет стратегия 9 вкл5'  , scad: 'I205.0N62R6.1V5',      column: 'lamp_9_str_on5'       , value:''},
    {name: 'свет стратегия 9 вкл6'  , scad: 'I205.0N62R6.1V6',      column: 'lamp_9_str_on6'       , value:''},
    {name: 'свет стратегия 9 старт1', scad: 'I205.0N62R7.1V1',      column: 'lamp_9_str_start1'    , value:''},
    {name: 'свет стратегия 9 старт2', scad: 'I205.0N62R7.1V2',      column: 'lamp_9_str_start2'    , value:''},
    {name: 'свет стратегия 9 старт3', scad: 'I205.0N62R7.1V3',      column: 'lamp_9_str_start3'    , value:''},
    {name: 'свет стратегия 9 старт4', scad: 'I205.0N62R7.1V4',      column: 'lamp_9_str_start4'    , value:''},
    {name: 'свет стратегия 9 старт5', scad: 'I205.0N62R7.1V5',      column: 'lamp_9_str_start5'    , value:''},
    {name: 'свет стратегия 9 старт6', scad: 'I205.0N62R7.1V6',      column: 'lamp_9_str_start6'    , value:''},
    {name: 'свет стратегия 9 стоп1' , scad: 'I205.0N62R8.1V1',      column: 'lamp_9_str_stop1'     , value:''},
    {name: 'свет стратегия 9 стоп2' , scad: 'I205.0N62R8.1V2',      column: 'lamp_9_str_stop2'     , value:''},
    {name: 'свет стратегия 9 стоп3' , scad: 'I205.0N62R8.1V3',      column: 'lamp_9_str_stop3'     , value:''},
    {name: 'свет стратегия 9 стоп4' , scad: 'I205.0N62R8.1V4',      column: 'lamp_9_str_stop4'     , value:''},
    {name: 'свет стратегия 9 стоп5' , scad: 'I205.0N62R8.1V5',      column: 'lamp_9_str_stop5'     , value:''},
    {name: 'свет стратегия 9 стоп6' , scad: 'I205.0N62R8.1V6',      column: 'lamp_9_str_stop6'     , value:''},

]

const bobrov4_light_str_10 =[
    {name: 'свет стратегия 10 вкл1'  , scad: 'I205.0N51R6.1V1',      column: 'lamp_10_str_on1'       , value:''},
    {name: 'свет стратегия 10 вкл2'  , scad: 'I205.0N51R6.1V2',      column: 'lamp_10_str_on2'       , value:''},
    {name: 'свет стратегия 10 вкл3'  , scad: 'I205.0N51R6.1V3',      column: 'lamp_10_str_on3'       , value:''},
    {name: 'свет стратегия 10 вкл4'  , scad: 'I205.0N51R6.1V4',      column: 'lamp_10_str_on4'       , value:''},
    {name: 'свет стратегия 10 вкл5'  , scad: 'I205.0N51R6.1V5',      column: 'lamp_10_str_on5'       , value:''},
    {name: 'свет стратегия 10 вкл6'  , scad: 'I205.0N51R6.1V6',      column: 'lamp_10_str_on6'       , value:''},
    {name: 'свет стратегия 10 старт1', scad: 'I205.0N51R7.1V1',      column: 'lamp_10_str_start1'    , value:''},
    {name: 'свет стратегия 10 старт2', scad: 'I205.0N51R7.1V2',      column: 'lamp_10_str_start2'    , value:''},
    {name: 'свет стратегия 10 старт3', scad: 'I205.0N51R7.1V3',      column: 'lamp_10_str_start3'    , value:''},
    {name: 'свет стратегия 10 старт4', scad: 'I205.0N51R7.1V4',      column: 'lamp_10_str_start4'    , value:''},
    {name: 'свет стратегия 10 старт5', scad: 'I205.0N51R7.1V5',      column: 'lamp_10_str_start5'    , value:''},
    {name: 'свет стратегия 10 старт6', scad: 'I205.0N51R7.1V6',      column: 'lamp_10_str_start6'    , value:''},
    {name: 'свет стратегия 10 стоп1' , scad: 'I205.0N51R8.1V1',      column: 'lamp_10_str_stop1'     , value:''},
    {name: 'свет стратегия 10 стоп2' , scad: 'I205.0N51R8.1V2',      column: 'lamp_10_str_stop2'     , value:''},
    {name: 'свет стратегия 10 стоп3' , scad: 'I205.0N51R8.1V3',      column: 'lamp_10_str_stop3'     , value:''},
    {name: 'свет стратегия 10 стоп4' , scad: 'I205.0N51R8.1V4',      column: 'lamp_10_str_stop4'     , value:''},
    {name: 'свет стратегия 10 стоп5' , scad: 'I205.0N51R8.1V5',      column: 'lamp_10_str_stop5'     , value:''},
    {name: 'свет стратегия 10 стоп6' , scad: 'I205.0N51R8.1V6',      column: 'lamp_10_str_stop6'     , value:''},

]

const bobrov4_light_str_11 =[
    {name: 'свет стратегия 11 вкл1'  , scad: 'I205.0N52R6.1V1',      column: 'lamp_11_str_on1'       , value:''},
    {name: 'свет стратегия 11 вкл2'  , scad: 'I205.0N52R6.1V2',      column: 'lamp_11_str_on2'       , value:''},
    {name: 'свет стратегия 11 вкл3'  , scad: 'I205.0N52R6.1V3',      column: 'lamp_11_str_on3'       , value:''},
    {name: 'свет стратегия 11 вкл4'  , scad: 'I205.0N52R6.1V4',      column: 'lamp_11_str_on4'       , value:''},
    {name: 'свет стратегия 11 вкл5'  , scad: 'I205.0N52R6.1V5',      column: 'lamp_11_str_on5'       , value:''},
    {name: 'свет стратегия 11 вкл6'  , scad: 'I205.0N52R6.1V6',      column: 'lamp_11_str_on6'       , value:''},
    {name: 'свет стратегия 11 старт1', scad: 'I205.0N52R7.1V1',      column: 'lamp_11_str_start1'    , value:''},
    {name: 'свет стратегия 11 старт2', scad: 'I205.0N52R7.1V2',      column: 'lamp_11_str_start2'    , value:''},
    {name: 'свет стратегия 11 старт3', scad: 'I205.0N52R7.1V3',      column: 'lamp_11_str_start3'    , value:''},
    {name: 'свет стратегия 11 старт4', scad: 'I205.0N52R7.1V4',      column: 'lamp_11_str_start4'    , value:''},
    {name: 'свет стратегия 11 старт5', scad: 'I205.0N52R7.1V5',      column: 'lamp_11_str_start5'    , value:''},
    {name: 'свет стратегия 11 старт6', scad: 'I205.0N52R7.1V6',      column: 'lamp_11_str_start6'    , value:''},
    {name: 'свет стратегия 11 стоп1' , scad: 'I205.0N52R8.1V1',      column: 'lamp_11_str_stop1'     , value:''},
    {name: 'свет стратегия 11 стоп2' , scad: 'I205.0N52R8.1V2',      column: 'lamp_11_str_stop2'     , value:''},
    {name: 'свет стратегия 11 стоп3' , scad: 'I205.0N52R8.1V3',      column: 'lamp_11_str_stop3'     , value:''},
    {name: 'свет стратегия 11 стоп4' , scad: 'I205.0N52R8.1V4',      column: 'lamp_11_str_stop4'     , value:''},
    {name: 'свет стратегия 11 стоп5' , scad: 'I205.0N52R8.1V5',      column: 'lamp_11_str_stop5'     , value:''},
    {name: 'свет стратегия 11 стоп6' , scad: 'I205.0N52R8.1V6',      column: 'lamp_11_str_stop6'     , value:''},

]

const bobrov4_light_str_12 =[
    {name: 'свет стратегия 12 вкл1'  , scad: 'I205.0N53R6.1V1',      column: 'lamp_12_str_on1'       , value:''},
    {name: 'свет стратегия 12 вкл2'  , scad: 'I205.0N53R6.1V2',      column: 'lamp_12_str_on2'       , value:''},
    {name: 'свет стратегия 12 вкл3'  , scad: 'I205.0N53R6.1V3',      column: 'lamp_12_str_on3'       , value:''},
    {name: 'свет стратегия 12 вкл4'  , scad: 'I205.0N53R6.1V4',      column: 'lamp_12_str_on4'       , value:''},
    {name: 'свет стратегия 12 вкл5'  , scad: 'I205.0N53R6.1V5',      column: 'lamp_12_str_on5'       , value:''},
    {name: 'свет стратегия 12 вкл6'  , scad: 'I205.0N53R6.1V6',      column: 'lamp_12_str_on6'       , value:''},
    {name: 'свет стратегия 12 старт1', scad: 'I205.0N53R7.1V1',      column: 'lamp_12_str_start1'    , value:''},
    {name: 'свет стратегия 12 старт2', scad: 'I205.0N53R7.1V2',      column: 'lamp_12_str_start2'    , value:''},
    {name: 'свет стратегия 12 старт3', scad: 'I205.0N53R7.1V3',      column: 'lamp_12_str_start3'    , value:''},
    {name: 'свет стратегия 12 старт4', scad: 'I205.0N53R7.1V4',      column: 'lamp_12_str_start4'    , value:''},
    {name: 'свет стратегия 12 старт5', scad: 'I205.0N53R7.1V5',      column: 'lamp_12_str_start5'    , value:''},
    {name: 'свет стратегия 12 старт6', scad: 'I205.0N53R7.1V6',      column: 'lamp_12_str_start6'    , value:''},
    {name: 'свет стратегия 12 стоп1' , scad: 'I205.0N53R8.1V1',      column: 'lamp_12_str_stop1'     , value:''},
    {name: 'свет стратегия 12 стоп2' , scad: 'I205.0N53R8.1V2',      column: 'lamp_12_str_stop2'     , value:''},
    {name: 'свет стратегия 12 стоп3' , scad: 'I205.0N53R8.1V3',      column: 'lamp_12_str_stop3'     , value:''},
    {name: 'свет стратегия 12 стоп4' , scad: 'I205.0N53R8.1V4',      column: 'lamp_12_str_stop4'     , value:''},
    {name: 'свет стратегия 12 стоп5' , scad: 'I205.0N53R8.1V5',      column: 'lamp_12_str_stop5'     , value:''},
    {name: 'свет стратегия 12 стоп6' , scad: 'I205.0N53R8.1V6',      column: 'lamp_12_str_stop6'     , value:''},

]

const bobrov5_light_str_13 =[
    {name: 'свет стратегия 13 вкл1'  , scad: 'I205.0N41R6.1V1',      column: 'lamp_13_str_on1'       , value:''},
    {name: 'свет стратегия 13 вкл2'  , scad: 'I205.0N41R6.1V2',      column: 'lamp_13_str_on2'       , value:''},
    {name: 'свет стратегия 13 вкл3'  , scad: 'I205.0N41R6.1V3',      column: 'lamp_13_str_on3'       , value:''},
    {name: 'свет стратегия 13 вкл4'  , scad: 'I205.0N41R6.1V4',      column: 'lamp_13_str_on4'       , value:''},
    {name: 'свет стратегия 13 вкл5'  , scad: 'I205.0N41R6.1V5',      column: 'lamp_13_str_on5'       , value:''},
    {name: 'свет стратегия 13 вкл6'  , scad: 'I205.0N41R6.1V6',      column: 'lamp_13_str_on6'       , value:''},
    {name: 'свет стратегия 13 старт1', scad: 'I205.0N41R7.1V1',      column: 'lamp_13_str_start1'    , value:''},
    {name: 'свет стратегия 13 старт2', scad: 'I205.0N41R7.1V2',      column: 'lamp_13_str_start2'    , value:''},
    {name: 'свет стратегия 13 старт3', scad: 'I205.0N41R7.1V3',      column: 'lamp_13_str_start3'    , value:''},
    {name: 'свет стратегия 13 старт4', scad: 'I205.0N41R7.1V4',      column: 'lamp_13_str_start4'    , value:''},
    {name: 'свет стратегия 13 старт5', scad: 'I205.0N41R7.1V5',      column: 'lamp_13_str_start5'    , value:''},
    {name: 'свет стратегия 13 старт6', scad: 'I205.0N41R7.1V6',      column: 'lamp_13_str_start6'    , value:''},
    {name: 'свет стратегия 13 стоп1' , scad: 'I205.0N41R8.1V1',      column: 'lamp_13_str_stop1'     , value:''},
    {name: 'свет стратегия 13 стоп2' , scad: 'I205.0N41R8.1V2',      column: 'lamp_13_str_stop2'     , value:''},
    {name: 'свет стратегия 13 стоп3' , scad: 'I205.0N41R8.1V3',      column: 'lamp_13_str_stop3'     , value:''},
    {name: 'свет стратегия 13 стоп4' , scad: 'I205.0N41R8.1V4',      column: 'lamp_13_str_stop4'     , value:''},
    {name: 'свет стратегия 13 стоп5' , scad: 'I205.0N41R8.1V5',      column: 'lamp_13_str_stop5'     , value:''},
    {name: 'свет стратегия 13 стоп6' , scad: 'I205.0N41R8.1V6',      column: 'lamp_13_str_stop6'     , value:''},

]

const bobrov5_light_str_14 =[
    {name: 'свет стратегия 14 вкл1'  , scad: 'I205.0N42R6.1V1',      column: 'lamp_14_str_on1'       , value:''},
    {name: 'свет стратегия 14 вкл2'  , scad: 'I205.0N42R6.1V2',      column: 'lamp_14_str_on2'       , value:''},
    {name: 'свет стратегия 14 вкл3'  , scad: 'I205.0N42R6.1V3',      column: 'lamp_14_str_on3'       , value:''},
    {name: 'свет стратегия 14 вкл4'  , scad: 'I205.0N42R6.1V4',      column: 'lamp_14_str_on4'       , value:''},
    {name: 'свет стратегия 14 вкл5'  , scad: 'I205.0N42R6.1V5',      column: 'lamp_14_str_on5'       , value:''},
    {name: 'свет стратегия 14 вкл6'  , scad: 'I205.0N42R6.1V6',      column: 'lamp_14_str_on6'       , value:''},
    {name: 'свет стратегия 14 старт1', scad: 'I205.0N42R7.1V1',      column: 'lamp_14_str_start1'    , value:''},
    {name: 'свет стратегия 14 старт2', scad: 'I205.0N42R7.1V2',      column: 'lamp_14_str_start2'    , value:''},
    {name: 'свет стратегия 14 старт3', scad: 'I205.0N42R7.1V3',      column: 'lamp_14_str_start3'    , value:''},
    {name: 'свет стратегия 14 старт4', scad: 'I205.0N42R7.1V4',      column: 'lamp_14_str_start4'    , value:''},
    {name: 'свет стратегия 14 старт5', scad: 'I205.0N42R7.1V5',      column: 'lamp_14_str_start5'    , value:''},
    {name: 'свет стратегия 14 старт6', scad: 'I205.0N42R7.1V6',      column: 'lamp_14_str_start6'    , value:''},
    {name: 'свет стратегия 14 стоп1' , scad: 'I205.0N42R8.1V1',      column: 'lamp_14_str_stop1'     , value:''},
    {name: 'свет стратегия 14 стоп2' , scad: 'I205.0N42R8.1V2',      column: 'lamp_14_str_stop2'     , value:''},
    {name: 'свет стратегия 14 стоп3' , scad: 'I205.0N42R8.1V3',      column: 'lamp_14_str_stop3'     , value:''},
    {name: 'свет стратегия 14 стоп4' , scad: 'I205.0N42R8.1V4',      column: 'lamp_14_str_stop4'     , value:''},
    {name: 'свет стратегия 14 стоп5' , scad: 'I205.0N42R8.1V5',      column: 'lamp_14_str_stop5'     , value:''},
    {name: 'свет стратегия 14 стоп6' , scad: 'I205.0N42R8.1V6',      column: 'lamp_14_str_stop6'     , value:''},

]



module.exports = {
    commonAGRO_12, commonAGRO_345, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14,
    M4,
    bobrov3_M432_water, bobrov4_M432_water, bobrov5_M432_water,
    bobrov3_M203_light, bobrov4_M203_light, bobrov5_M203_light,
    bobrov3_6_co2, bobrov3_7_co2, bobrov3_8_co2, bobrov3_9_co2,
    bobrov4_10_co2, bobrov4_11_co2, bobrov4_12_co2,
    bobrov5_13_co2, bobrov5_14_co2,
    bobrov3_light_str_6, bobrov3_light_str_7, bobrov3_light_str_8, bobrov3_light_str_9,
    bobrov4_light_str_10, bobrov4_light_str_11, bobrov4_light_str_12,
    bobrov5_light_str_13, bobrov5_light_str_14,
}
