module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t12", {
        co2:            {type: Sequelize.STRING(10)},

        section421_t:    {type: Sequelize.STRING(10)},
        section421_ov_1: {type: Sequelize.STRING(10)},
        section421_dv_1: {type: Sequelize.STRING(10)},
        section421_tv:   {type: Sequelize.STRING(10)},
        section421_th:   {type: Sequelize.STRING(10)},

        section422_t:    {type: Sequelize.STRING(10)},
        section422_ov_1: {type: Sequelize.STRING(10)},
        section422_dv_1: {type: Sequelize.STRING(10)},
        section422_tv:   {type: Sequelize.STRING(10)},
        section422_th:   {type: Sequelize.STRING(10)},

        section423_t:    {type: Sequelize.STRING(10)},
        section423_ov_1: {type: Sequelize.STRING(10)},
        section423_dv_1: {type: Sequelize.STRING(10)},
        section423_tv:   {type: Sequelize.STRING(10)},
        section423_th:   {type: Sequelize.STRING(10)},

        section424_t:    {type: Sequelize.STRING(10)},
        section424_ov_1: {type: Sequelize.STRING(10)},
        section424_dv_1: {type: Sequelize.STRING(10)},
        section424_tv:   {type: Sequelize.STRING(10)},
        section424_th:   {type: Sequelize.STRING(10)},

        section425_t:    {type: Sequelize.STRING(10)},
        section425_ov_1: {type: Sequelize.STRING(10)},
        section425_dv_1: {type: Sequelize.STRING(10)},
        section425_tv:   {type: Sequelize.STRING(10)},
        section425_th:   {type: Sequelize.STRING(10)},

        section426_t:    {type: Sequelize.STRING(10)},
        section426_ov_1: {type: Sequelize.STRING(10)},
        section426_dv_1: {type: Sequelize.STRING(10)},
        section426_tv:   {type: Sequelize.STRING(10)},
        section426_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};


