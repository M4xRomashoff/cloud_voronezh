module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t3", {
        co2:            {type: Sequelize.STRING(10)},

        section211_t:    {type: Sequelize.STRING(10)},
        section211_ov_1: {type: Sequelize.STRING(10)},
        section211_dv_1: {type: Sequelize.STRING(10)},
        section211_tv:   {type: Sequelize.STRING(10)},
        section211_th:   {type: Sequelize.STRING(10)},

        section212_t:    {type: Sequelize.STRING(10)},
        section212_ov_1: {type: Sequelize.STRING(10)},
        section212_dv_1: {type: Sequelize.STRING(10)},
        section212_tv:   {type: Sequelize.STRING(10)},
        section212_th:   {type: Sequelize.STRING(10)},

        section213_t:    {type: Sequelize.STRING(10)},
        section213_ov_1: {type: Sequelize.STRING(10)},
        section213_dv_1: {type: Sequelize.STRING(10)},
        section213_tv:   {type: Sequelize.STRING(10)},
        section213_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};

