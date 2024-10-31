module.exports = (sequelize, Sequelize) => {

    return sequelize.define("alarms_list", {
        errorNumber:        {type: Sequelize.STRING(10)},
        message:            {type: Sequelize.STRING(255)},
        active1:            {type: Sequelize.STRING(3)},
        active2:            {type: Sequelize.STRING(3)},
        active3:            {type: Sequelize.STRING(3)},
    },{ freezeTableName: true,});

};

