module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t1", {
        co2_1:         {type: Sequelize.STRING(10)},
        co2_2:         {type: Sequelize.STRING(10)},

        section41_t1:   {type: Sequelize.STRING(10)},
        section41_t2:   {type: Sequelize.STRING(10)},
        section41_ov_1: {type: Sequelize.STRING(10)},
        section41_ov_2: {type: Sequelize.STRING(10)},
        section41_dv_1: {type: Sequelize.STRING(10)},
        section41_dv_2: {type: Sequelize.STRING(10)},
        section41_tv:   {type: Sequelize.STRING(10)},
        section41_th:   {type: Sequelize.STRING(10)},

        section42_t1:   {type: Sequelize.STRING(10)},
        section42_t2:   {type: Sequelize.STRING(10)},
        section42_ov_1: {type: Sequelize.STRING(10)},
        section42_ov_2: {type: Sequelize.STRING(10)},
        section42_dv_1: {type: Sequelize.STRING(10)},
        section42_dv_2: {type: Sequelize.STRING(10)},
        section42_tv:   {type: Sequelize.STRING(10)},
        section42_th:   {type: Sequelize.STRING(10)},

        section43_t1:   {type: Sequelize.STRING(10)},
        section43_t2:   {type: Sequelize.STRING(10)},
        section43_ov_1: {type: Sequelize.STRING(10)},
        section43_ov_2: {type: Sequelize.STRING(10)},
        section43_dv_1: {type: Sequelize.STRING(10)},
        section43_dv_2: {type: Sequelize.STRING(10)},
        section43_tv:   {type: Sequelize.STRING(10)},
        section43_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};


