module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t9", {
        co2_1:         {type: Sequelize.STRING(10)},

        section61_t1:   {type: Sequelize.STRING(10)},
        section61_t2:   {type: Sequelize.STRING(10)},
        section61_ov_1: {type: Sequelize.STRING(10)},
        section61_ov_2: {type: Sequelize.STRING(10)},
        section61_dv_1: {type: Sequelize.STRING(10)},
        section61_dv_2: {type: Sequelize.STRING(10)},
        section61_tv:   {type: Sequelize.STRING(10)},
        section61_th:   {type: Sequelize.STRING(10)},

        section62_t1:   {type: Sequelize.STRING(10)},
        section62_t2:   {type: Sequelize.STRING(10)},
        section62_ov_1: {type: Sequelize.STRING(10)},
        section62_ov_2: {type: Sequelize.STRING(10)},
        section62_dv_1: {type: Sequelize.STRING(10)},
        section62_dv_2: {type: Sequelize.STRING(10)},
        section62_tv:   {type: Sequelize.STRING(10)},
        section62_th:   {type: Sequelize.STRING(10)},

        section63_t1:   {type: Sequelize.STRING(10)},
        section63_t2:   {type: Sequelize.STRING(10)},
        section63_ov_1: {type: Sequelize.STRING(10)},
        section63_ov_2: {type: Sequelize.STRING(10)},
        section63_dv_1: {type: Sequelize.STRING(10)},
        section63_dv_2: {type: Sequelize.STRING(10)},
        section63_tv:   {type: Sequelize.STRING(10)},
        section63_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};

