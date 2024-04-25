module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t5", {
        co2_1:         {type: Sequelize.STRING(10)},
        co2_2:         {type: Sequelize.STRING(10)},

        section21_t1:   {type: Sequelize.STRING(10)},
        section21_t2:   {type: Sequelize.STRING(10)},
        section21_ov_1: {type: Sequelize.STRING(10)},
        section21_ov_2: {type: Sequelize.STRING(10)},
        section21_dv_1: {type: Sequelize.STRING(10)},
        section21_dv_2: {type: Sequelize.STRING(10)},
        section21_tv:   {type: Sequelize.STRING(10)},
        section21_th:   {type: Sequelize.STRING(10)},

        section22_t1:   {type: Sequelize.STRING(10)},
        section22_t2:   {type: Sequelize.STRING(10)},
        section22_ov_1: {type: Sequelize.STRING(10)},
        section22_ov_2: {type: Sequelize.STRING(10)},
        section22_dv_1: {type: Sequelize.STRING(10)},
        section22_dv_2: {type: Sequelize.STRING(10)},
        section22_tv:   {type: Sequelize.STRING(10)},
        section22_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};

