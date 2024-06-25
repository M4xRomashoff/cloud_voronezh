module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t4", {
        co2:            {type: Sequelize.STRING(10)},

        section214_t:    {type: Sequelize.STRING(10)},
        section214_ov_1: {type: Sequelize.STRING(10)},
        section214_dv_1: {type: Sequelize.STRING(10)},
        section214_tv:   {type: Sequelize.STRING(10)},
        section214_th:   {type: Sequelize.STRING(10)},

        section215_t:    {type: Sequelize.STRING(10)},
        section215_ov_1: {type: Sequelize.STRING(10)},
        section215_dv_1: {type: Sequelize.STRING(10)},
        section215_tv:   {type: Sequelize.STRING(10)},
        section215_th:   {type: Sequelize.STRING(10)},

        section216_t:    {type: Sequelize.STRING(10)},
        section216_ov_1: {type: Sequelize.STRING(10)},
        section216_dv_1: {type: Sequelize.STRING(10)},
        section216_tv:   {type: Sequelize.STRING(10)},
        section216_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};

