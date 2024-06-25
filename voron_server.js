const rootPath = __dirname;
module.exports = { rootPath };
const express = require("express");
const cors = require("cors");
const voron_server = express();
const cron = require('node-cron');
const serviceSolDar = require("./app/service/voron.service");


// var corsOptions = {
//     origin: "http://localhost:8081"
// };

voron_server.use(cors());

//   check all incoming data

voron_server.use((req, res, next) => {
    // controllerLog.logIncoming(req, res);

    console.log('req.query or body ',req.query,req.body);

    next();
});



// parse requests of content-type - application/json
voron_server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
voron_server.use(express.urlencoded({ extended: true }));

// simple route
voron_server.get("/api/test", (req, res) => {
    res.json({ message: "Server is running..." });
});


cron.schedule('5 1 * * *', () => { // 1 hrs 10 min at night
    const res = serviceSolDar.createAvgEmpty();
});



const PORT = process.env.PORT || 5008;
voron_server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

require('./app/routes/climat.routes')(voron_server);

const db = require("./app/modelsVoronezh");

//Production MySql check !

db.sequelize.sync();

