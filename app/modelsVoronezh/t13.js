module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t12", {
        co2:            {type: Sequelize.STRING(10)},

        section411_t:    {type: Sequelize.STRING(10)},
        section411_ov_1: {type: Sequelize.STRING(10)},
        section411_dv_1: {type: Sequelize.STRING(10)},
        section411_tv:   {type: Sequelize.STRING(10)},
        section411_th:   {type: Sequelize.STRING(10)},

        section412_t:    {type: Sequelize.STRING(10)},
        section412_ov_1: {type: Sequelize.STRING(10)},
        section412_dv_1: {type: Sequelize.STRING(10)},
        section412_tv:   {type: Sequelize.STRING(10)},
        section412_th:   {type: Sequelize.STRING(10)},

        section413_t:    {type: Sequelize.STRING(10)},
        section413_ov_1: {type: Sequelize.STRING(10)},
        section413_dv_1: {type: Sequelize.STRING(10)},
        section413_tv:   {type: Sequelize.STRING(10)},
        section413_th:   {type: Sequelize.STRING(10)},

        section414_t:    {type: Sequelize.STRING(10)},
        section414_ov_1: {type: Sequelize.STRING(10)},
        section414_dv_1: {type: Sequelize.STRING(10)},
        section414_tv:   {type: Sequelize.STRING(10)},
        section414_th:   {type: Sequelize.STRING(10)},

        section415_t:    {type: Sequelize.STRING(10)},
        section415_ov_1: {type: Sequelize.STRING(10)},
        section415_dv_1: {type: Sequelize.STRING(10)},
        section415_tv:   {type: Sequelize.STRING(10)},
        section415_th:   {type: Sequelize.STRING(10)},

        section416_t:    {type: Sequelize.STRING(10)},
        section416_ov_1: {type: Sequelize.STRING(10)},
        section416_dv_1: {type: Sequelize.STRING(10)},
        section416_tv:   {type: Sequelize.STRING(10)},
        section416_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};


