module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t8", {
        co2:            {type: Sequelize.STRING(10)},

        section611_t:    {type: Sequelize.STRING(10)},
        section611_ov_1: {type: Sequelize.STRING(10)},
        section611_dv_1: {type: Sequelize.STRING(10)},
        section611_tv:   {type: Sequelize.STRING(10)},
        section611_th:   {type: Sequelize.STRING(10)},

        section612_t:    {type: Sequelize.STRING(10)},
        section612_ov_1: {type: Sequelize.STRING(10)},
        section612_dv_1: {type: Sequelize.STRING(10)},
        section612_tv:   {type: Sequelize.STRING(10)},
        section612_th:   {type: Sequelize.STRING(10)},

        section613_t:    {type: Sequelize.STRING(10)},
        section613_ov_1: {type: Sequelize.STRING(10)},
        section613_dv_1: {type: Sequelize.STRING(10)},
        section613_tv:   {type: Sequelize.STRING(10)},
        section613_th:   {type: Sequelize.STRING(10)},

        section614_t:    {type: Sequelize.STRING(10)},
        section614_ov_1: {type: Sequelize.STRING(10)},
        section614_dv_1: {type: Sequelize.STRING(10)},
        section614_tv:   {type: Sequelize.STRING(10)},
        section614_th:   {type: Sequelize.STRING(10)},

        section615_t:    {type: Sequelize.STRING(10)},
        section615_ov_1: {type: Sequelize.STRING(10)},
        section615_dv_1: {type: Sequelize.STRING(10)},
        section615_tv:   {type: Sequelize.STRING(10)},
        section615_th:   {type: Sequelize.STRING(10)},

        section616_t:    {type: Sequelize.STRING(10)},
        section616_ov_1: {type: Sequelize.STRING(10)},
        section616_dv_1: {type: Sequelize.STRING(10)},
        section616_tv:   {type: Sequelize.STRING(10)},
        section616_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};

