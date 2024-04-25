const config = require("../config/dbSolDarClimat.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);


const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.commonAGRO_12 = require("./commonAGRO_12.js")(sequelize, Sequelize);
db.commonAGRO_34 = require("./commonAGRO_34.js")(sequelize, Sequelize);

db.t1 = require("./t1.js")(sequelize, Sequelize);
db.t2 = require("./t2.js")(sequelize, Sequelize);
db.t3 = require("./t3.js")(sequelize, Sequelize);
db.t4 = require("./t4.js")(sequelize, Sequelize);
db.t5 = require("./t5.js")(sequelize, Sequelize);
db.t6 = require("./t6.js")(sequelize, Sequelize);
db.t7 = require("./t7.js")(sequelize, Sequelize);
db.t8 = require("./t8.js")(sequelize, Sequelize);
db.t9 = require("./t9.js")(sequelize, Sequelize);
db.t10 = require("./t10.js")(sequelize, Sequelize);
db.t11 = require("./t11.js")(sequelize, Sequelize);
db.t12 = require("./t12.js")(sequelize, Sequelize);


db.avgs = require("./avgs.js")(sequelize, Sequelize);
db.alarms = require("./alarms.js")(sequelize, Sequelize);


module.exports = db;
