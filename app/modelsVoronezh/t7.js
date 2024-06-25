module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t7", {
        co2:            {type: Sequelize.STRING(10)},

        section321_t:    {type: Sequelize.STRING(10)},
        section321_ov_1: {type: Sequelize.STRING(10)},
        section321_dv_1: {type: Sequelize.STRING(10)},
        section321_tv:   {type: Sequelize.STRING(10)},
        section321_th:   {type: Sequelize.STRING(10)},

        section322_t:    {type: Sequelize.STRING(10)},
        section322_ov_1: {type: Sequelize.STRING(10)},
        section322_dv_1: {type: Sequelize.STRING(10)},
        section322_tv:   {type: Sequelize.STRING(10)},
        section322_th:   {type: Sequelize.STRING(10)},

        section323_t:    {type: Sequelize.STRING(10)},
        section323_ov_1: {type: Sequelize.STRING(10)},
        section323_dv_1: {type: Sequelize.STRING(10)},
        section323_tv:   {type: Sequelize.STRING(10)},
        section323_th:   {type: Sequelize.STRING(10)},

        section324_t:    {type: Sequelize.STRING(10)},
        section324_ov_1: {type: Sequelize.STRING(10)},
        section324_dv_1: {type: Sequelize.STRING(10)},
        section324_tv:   {type: Sequelize.STRING(10)},
        section324_th:   {type: Sequelize.STRING(10)},

    },{ freezeTableName: true,});

};

