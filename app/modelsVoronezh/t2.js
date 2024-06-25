module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t2", {
        co2:            {type: Sequelize.STRING(10)},

        section121_t:    {type: Sequelize.STRING(10)},
        section121_ov_1: {type: Sequelize.STRING(10)},
        section121_dv_1: {type: Sequelize.STRING(10)},
        section121_tv:   {type: Sequelize.STRING(10)},
        section121_th:   {type: Sequelize.STRING(10)},

        section122_t:    {type: Sequelize.STRING(10)},
        section122_ov_1: {type: Sequelize.STRING(10)},
        section122_dv_1: {type: Sequelize.STRING(10)},
        section122_tv:   {type: Sequelize.STRING(10)},
        section122_th:   {type: Sequelize.STRING(10)},

        section123_t:    {type: Sequelize.STRING(10)},
        section123_ov_1: {type: Sequelize.STRING(10)},
        section123_dv_1: {type: Sequelize.STRING(10)},
        section123_tv:   {type: Sequelize.STRING(10)},
        section123_th:   {type: Sequelize.STRING(10)},

        section124_t:    {type: Sequelize.STRING(10)},
        section124_ov_1: {type: Sequelize.STRING(10)},
        section124_dv_1: {type: Sequelize.STRING(10)},
        section124_tv:   {type: Sequelize.STRING(10)},
        section124_th:   {type: Sequelize.STRING(10)},

        section125_t:    {type: Sequelize.STRING(10)},
        section125_ov_1: {type: Sequelize.STRING(10)},
        section125_dv_1: {type: Sequelize.STRING(10)},
        section125_tv:   {type: Sequelize.STRING(10)},
        section125_th:   {type: Sequelize.STRING(10)},

        section126_t:    {type: Sequelize.STRING(10)},
        section126_ov_1: {type: Sequelize.STRING(10)},
        section126_dv_1: {type: Sequelize.STRING(10)},
        section126_tv:   {type: Sequelize.STRING(10)},
        section126_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};

