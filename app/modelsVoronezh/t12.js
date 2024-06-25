module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t12", {
        co2:            {type: Sequelize.STRING(10)},

        section521_t:    {type: Sequelize.STRING(10)},
        section521_ov_1: {type: Sequelize.STRING(10)},
        section521_dv_1: {type: Sequelize.STRING(10)},
        section521_tv:   {type: Sequelize.STRING(10)},
        section521_th:   {type: Sequelize.STRING(10)},

        section522_t:    {type: Sequelize.STRING(10)},
        section522_ov_1: {type: Sequelize.STRING(10)},
        section522_dv_1: {type: Sequelize.STRING(10)},
        section522_tv:   {type: Sequelize.STRING(10)},
        section522_th:   {type: Sequelize.STRING(10)},

        section523_t:    {type: Sequelize.STRING(10)},
        section523_ov_1: {type: Sequelize.STRING(10)},
        section523_dv_1: {type: Sequelize.STRING(10)},
        section523_tv:   {type: Sequelize.STRING(10)},
        section523_th:   {type: Sequelize.STRING(10)},

        section524_t:    {type: Sequelize.STRING(10)},
        section524_ov_1: {type: Sequelize.STRING(10)},
        section524_dv_1: {type: Sequelize.STRING(10)},
        section524_tv:   {type: Sequelize.STRING(10)},
        section524_th:   {type: Sequelize.STRING(10)},

        section525_t:    {type: Sequelize.STRING(10)},
        section525_ov_1: {type: Sequelize.STRING(10)},
        section525_dv_1: {type: Sequelize.STRING(10)},
        section525_tv:   {type: Sequelize.STRING(10)},
        section525_th:   {type: Sequelize.STRING(10)},

        section526_t:    {type: Sequelize.STRING(10)},
        section526_ov_1: {type: Sequelize.STRING(10)},
        section526_dv_1: {type: Sequelize.STRING(10)},
        section526_tv:   {type: Sequelize.STRING(10)},
        section526_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};


