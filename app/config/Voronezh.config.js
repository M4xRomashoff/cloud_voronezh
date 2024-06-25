const {password} = require('./db.main.config');

module.exports = {
    // HOST: "localhost",
    HOST: "127.0.0.1",
    USER: "aph",
    PASSWORD: password,
    DB: "climate_voronezh",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
