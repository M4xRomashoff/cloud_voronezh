module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t4", {
        co2_1:         {type: Sequelize.STRING(10)},
        co2_2:         {type: Sequelize.STRING(10)},

        section31_t1:   {type: Sequelize.STRING(10)},
        section31_t2:   {type: Sequelize.STRING(10)},
        section31_ov_1: {type: Sequelize.STRING(10)},
        section31_ov_2: {type: Sequelize.STRING(10)},
        section31_dv_1: {type: Sequelize.STRING(10)},
        section31_dv_2: {type: Sequelize.STRING(10)},
        section31_tv:   {type: Sequelize.STRING(10)},
        section31_th:   {type: Sequelize.STRING(10)},

        section32_t1:   {type: Sequelize.STRING(10)},
        section32_t2:   {type: Sequelize.STRING(10)},
        section32_ov_1: {type: Sequelize.STRING(10)},
        section32_ov_2: {type: Sequelize.STRING(10)},
        section32_dv_1: {type: Sequelize.STRING(10)},
        section32_dv_2: {type: Sequelize.STRING(10)},
        section32_tv:   {type: Sequelize.STRING(10)},
        section32_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};

