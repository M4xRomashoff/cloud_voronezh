const serviceTula = require("../service/voron.service");
const {COMPLEX} = require("../config/complex.config");


function processOvCher(res, data){
    res.status(200).send({message: 'не найден комплекс !'});
}


exports.update = (req, res) => {

    if (req.body) {
        serviceTula.processData(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));

    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.alarms = (req, res) => {

    if (req.body) {
        serviceTula.processDataAlarms(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateCO = (req, res) => {

    if (req.body) {
        serviceTula.processDataCO(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateWater = (req, res) => {

    console.log('exports.updateWater ', req.headers["x-access-token"])


    if (req.body) {
        serviceTula.processDataWater(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateLight = (req, res) => {

    if (req.body) {
        serviceTula.processDataLight(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};

exports.updateArtLight = (req, res) => {


    console.log('updateArtLight req.body',req.body)

    if (req.body) {
        serviceTula.processDataArtLight(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};


exports.updateSunRise = (req, res) => {

    if (req.body) {
        serviceTula.processDataSunRise(req.body)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
};


const API_URL_PDM = `http://79.174.95.167/api/climate/`

exports.oneBlockOneDay = (req, res) => {

    if (req.query) {
        serviceTula.oneBlockOneDay(req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});

}

exports.getAlarms = (req, res) => {
    if (req.query.complexId) {
        serviceTula.getAlarms(req.query.complexId)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
}

exports.allBlocksLastData = (req, res) => {
    if (req.query) {
        serviceTula.allBlocksLastData(req.query.complexId)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});
}

exports.oneBlockOneDayAvg = (req, res) => {
    if (req.query.complexId && req.query.block && req.query.date){
        serviceTula.oneBlockOneDayAvg(req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    }
    else  res.status(500).send({message: 'не хватает данных для запроса'});
}

exports.oneBlockOneMonthAvg = (req, res) => {

    if (req.query) {
        serviceTula.oneBlockOneMonthAvg(req.query.complexId, req.query.block, req.query.date)
            .then(result =>{return res.status(200).send(result)})
            .catch(err => res.status(500).send({message: err.message}));
    } else  res.status(500).send({message: 'что-то не сработало'});


}

exports.uploadAvgFile  = (req, res) => {

    console.log('req.body.complexId && req.file.path',req.body.complexId, req.file.path)

    if (req.body.complexId && req.file.path) {
        const result = serviceTula.file_to_db(req.file.path, req.body.complexId)
            .then(result => {
                return res.status(200).send({message: result, filepath: req.file.path, filename: req.file.originalname})
            })
            .catch(err => res.status(500).send({message: err.message}));
    }
};

