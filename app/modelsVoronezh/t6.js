module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t6", {
        co2_1:         {type: Sequelize.STRING(10)},
        co2_2:         {type: Sequelize.STRING(10)},

        section14_t1:   {type: Sequelize.STRING(10)},
        section14_t2:   {type: Sequelize.STRING(10)},
        section14_ov_1: {type: Sequelize.STRING(10)},
        section14_ov_2: {type: Sequelize.STRING(10)},
        section14_dv_1: {type: Sequelize.STRING(10)},
        section14_dv_2: {type: Sequelize.STRING(10)},
        section14_tv:   {type: Sequelize.STRING(10)},
        section14_th:   {type: Sequelize.STRING(10)},

        section15_t1:   {type: Sequelize.STRING(10)},
        section15_t2:   {type: Sequelize.STRING(10)},
        section15_ov_1: {type: Sequelize.STRING(10)},
        section15_ov_2: {type: Sequelize.STRING(10)},
        section15_dv_1: {type: Sequelize.STRING(10)},
        section15_dv_2: {type: Sequelize.STRING(10)},
        section15_tv:   {type: Sequelize.STRING(10)},
        section15_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};

