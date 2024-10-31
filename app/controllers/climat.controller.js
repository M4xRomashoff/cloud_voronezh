const serviceVoron = require("../service/voron.service");
const {COMPLEX} = require("../config/complex.config");


exports.oneBlockOneDay = (req, res) => {

    if (req.query) {
        serviceVoron.oneBlockOneDay(req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}

exports.oneBlockOneDayM4 = (req, res) => {

    if (req.query) {
        serviceVoron.oneBlockOneDayM4(req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}

exports.lastDataM4 = (req, res) => {

    if (req.query) {
        serviceVoron.lastDataM4 (req.query.complexId, req.query.block)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}

exports.getAlarms = (req, res) => {
    if (req.query.complexId) {
        serviceVoron.getAlarms(req.query.complexId)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
}

exports.alarmsList = (req, res) => {

    if (req.query) {
        serviceVoron.alarmsList()
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}

exports.allBlocksLastData = (req, res) => {
    if (req.query) {
        serviceVoron.allBlocksLastData(req.query.complexId)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
}



exports.oneBlockOneDayAvg = (req, res) => {
    if (req.query.complexId && req.query.block && req.query.date){
        serviceVoron.oneBlockOneDayAvg(req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    }
    else  res.status(500).send({message: 'не хватает данных для запроса'});
}

exports.oneBlockOneMonthAvg = (req, res) => {

    if (req.query) {
        serviceVoron.oneBlockOneMonthAvg(req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});


}

exports.complexAvgOneDay = (req, res) => {
    if (req.query) {
        serviceVoron.complexAvgOneDay(req.query.complexId, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
}

exports.downloadAvgMonthFile = (req, res) => {
    if (req.query) {
        serviceVoron.downloadAvgMonthFile (req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});


}

exports.downloadAvgDayFile   = (req, res) => {
    if (req.query) {
        serviceVoron.downloadAvgDayFile (req.query.complexId, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
}

exports.reportOneBlockOneDayWeather  = (req, res) => {

    if (req.query) {
        serviceVoron.reportOneBlockOneDayWeather (req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}



//----------------------------------------------------------------------------------------------------------------------

exports.update = (req, res) => {

    if (req.body) {
        serviceVoron.processData(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));

    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.alarms = (req, res) => {

    if (req.body) {
        serviceVoron.processDataAlarms(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateM4 = (req, res) => {

    if (req.body) {
        serviceVoron.processDataM4(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));

    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateCO = (req, res) => {

    if (req.body) {
        serviceVoron.processDataCO(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateWater = (req, res) => {

    if (req.body) {
        serviceVoron.processDataWater(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateLight = (req, res) => {

    if (req.body) {
        serviceVoron.processDataLight(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateArtLight = (req, res) => {

    if (req.body) {
        serviceVoron.processDataArtLight(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

//----------------------------------------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------------------------------------


//
// exports.updateM400 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataM400(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateI128 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataI128(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateM115 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataM115(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateI206 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataI206(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateM112 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataM112(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateI168 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataI168(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateI400 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataI400(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };

// exports.update401 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processData401(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.update412 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processData412(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.update420 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processData420(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateI110 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataI110(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateI120 = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataI120(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };
//
// exports.updateWatering = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataWatering(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };


// exports.updateSunRise = (req, res) => {
//
//     if (req.body) {
//         serviceVoron.processDataSunRise(req.body)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
// };


//
// exports.reportOneBlockOneDayWeather  = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.reportOneBlockOneDayWeather (req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.reportOneBlockOneDayMain  = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.reportOneBlockOneDayMain (req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayWatering = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayWatering(req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayM400 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayM400(req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }


//
// exports.oneBlockOneDayI400 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayI400(req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayI110 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayI110(req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayI120 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayI120(req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayI128 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayI128(req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayM115 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayM115(req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayI206 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayI206(req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayM112 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayM112(req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
// exports.oneBlockOneDayI168 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDayI168(req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
//
// }
//
//
// exports.oneBlockOneDay401 = (req, res) => {
//
//     if (req.query) {
//         serviceVoron.oneBlockOneDay401(req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
// }
//
// exports.oneBlockOneDay412 = (req, res) => {
//     if (req.query) {
//         serviceVoron.oneBlockOneDay412(req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
// }
//
// exports.oneBlockOneDay420 = (req, res) => {
//     if (req.query) {
//         serviceVoron.oneBlockOneDay420(req.query.complexId, req.query.block, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
// }


// exports.createReportFile   = (req, res) => {
//     if (req.query) {
//         serviceVoron.createReportFile (req.query.complexId, req.query.date)
//             .then(result =>{return res.status(200).send(result)})
//             .catch(err => res.status(500).send({message: err.message}));
//     } else  res.status(500).send({message: 'что-то не сработало'});
// }
//


exports.uploadAvgFile  = (req, res) => {

    console.log('req.body.complexId && req.file.path',req.body.complexId, req.file.path)

    if (req.body.complexId && req.file.path) {
        const result = serviceVoron.file_to_db(req.file.path, req.body.complexId)
            .then(result => {
                return res.status(200).send({message: result, filepath: req.file.path, filename: req.file.originalname})
            })
            .catch(err => res.status(500).send({message: err.message}));
    }
};


