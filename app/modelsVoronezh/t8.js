module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t8", {
        co2_1:         {type: Sequelize.STRING(10)},

        section71_t1:   {type: Sequelize.STRING(10)},
        section71_t2:   {type: Sequelize.STRING(10)},
        section71_ov_1: {type: Sequelize.STRING(10)},
        section71_ov_2: {type: Sequelize.STRING(10)},
        section71_dv_1: {type: Sequelize.STRING(10)},
        section71_dv_2: {type: Sequelize.STRING(10)},
        section71_tv:   {type: Sequelize.STRING(10)},
        section71_th:   {type: Sequelize.STRING(10)},

        section72_t1:   {type: Sequelize.STRING(10)},
        section72_t2:   {type: Sequelize.STRING(10)},
        section72_ov_1: {type: Sequelize.STRING(10)},
        section72_ov_2: {type: Sequelize.STRING(10)},
        section72_dv_1: {type: Sequelize.STRING(10)},
        section72_dv_2: {type: Sequelize.STRING(10)},
        section72_tv:   {type: Sequelize.STRING(10)},
        section72_th:   {type: Sequelize.STRING(10)},

        section73_t1:   {type: Sequelize.STRING(10)},
        section73_t2:   {type: Sequelize.STRING(10)},
        section73_ov_1: {type: Sequelize.STRING(10)},
        section73_ov_2: {type: Sequelize.STRING(10)},
        section73_dv_1: {type: Sequelize.STRING(10)},
        section73_dv_2: {type: Sequelize.STRING(10)},
        section73_tv:   {type: Sequelize.STRING(10)},
        section73_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};

