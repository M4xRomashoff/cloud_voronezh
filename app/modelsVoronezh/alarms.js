module.exports = (sequelize, Sequelize) => {

    return sequelize.define("alarms", {
        complexId:          {type: Sequelize.INTEGER},
        errorNumber:        {type: Sequelize.INTEGER},
        agro:               {type: Sequelize.STRING(10)},
        message:            {type: Sequelize.STRING(255)},
        state:              {type: Sequelize.INTEGER},
    },{ freezeTableName: true,});

};


