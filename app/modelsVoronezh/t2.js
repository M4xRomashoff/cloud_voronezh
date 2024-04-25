module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t2", {
        co2_1:         {type: Sequelize.STRING(10)},
        co2_2:         {type: Sequelize.STRING(10)},

        section51_t1:   {type: Sequelize.STRING(10)},
        section51_t2:   {type: Sequelize.STRING(10)},
        section51_ov_1: {type: Sequelize.STRING(10)},
        section51_ov_2: {type: Sequelize.STRING(10)},
        section51_dv_1: {type: Sequelize.STRING(10)},
        section51_dv_2: {type: Sequelize.STRING(10)},
        section51_tv:   {type: Sequelize.STRING(10)},
        section51_th:   {type: Sequelize.STRING(10)},

        section52_t1:   {type: Sequelize.STRING(10)},
        section52_t2:   {type: Sequelize.STRING(10)},
        section52_ov_1: {type: Sequelize.STRING(10)},
        section52_ov_2: {type: Sequelize.STRING(10)},
        section52_dv_1: {type: Sequelize.STRING(10)},
        section52_dv_2: {type: Sequelize.STRING(10)},
        section52_tv:   {type: Sequelize.STRING(10)},
        section52_th:   {type: Sequelize.STRING(10)},

        section53_t1:   {type: Sequelize.STRING(10)},
        section53_t2:   {type: Sequelize.STRING(10)},
        section53_ov_1: {type: Sequelize.STRING(10)},
        section53_ov_2: {type: Sequelize.STRING(10)},
        section53_dv_1: {type: Sequelize.STRING(10)},
        section53_dv_2: {type: Sequelize.STRING(10)},
        section53_tv:   {type: Sequelize.STRING(10)},
        section53_th:   {type: Sequelize.STRING(10)},

    },{ freezeTableName: true,});

};

