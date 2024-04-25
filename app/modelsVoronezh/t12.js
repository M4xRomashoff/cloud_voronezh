module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t12", {
        co2_1:         {type: Sequelize.STRING(10)},

        section101_t1:   {type: Sequelize.STRING(10)},
        section101_t2:   {type: Sequelize.STRING(10)},
        section101_ov_1: {type: Sequelize.STRING(10)},
        section101_ov_2: {type: Sequelize.STRING(10)},
        section101_dv_1: {type: Sequelize.STRING(10)},
        section101_dv_2: {type: Sequelize.STRING(10)},
        section101_tv:   {type: Sequelize.STRING(10)},
        section101_th:   {type: Sequelize.STRING(10)},

        section102_t1:   {type: Sequelize.STRING(10)},
        section102_t2:   {type: Sequelize.STRING(10)},
        section102_ov_1: {type: Sequelize.STRING(10)},
        section102_ov_2: {type: Sequelize.STRING(10)},
        section102_dv_1: {type: Sequelize.STRING(10)},
        section102_dv_2: {type: Sequelize.STRING(10)},
        section102_tv:   {type: Sequelize.STRING(10)},
        section102_th:   {type: Sequelize.STRING(10)},

        section103_t1:   {type: Sequelize.STRING(10)},
        section103_t2:   {type: Sequelize.STRING(10)},
        section103_ov_1: {type: Sequelize.STRING(10)},
        section103_ov_2: {type: Sequelize.STRING(10)},
        section103_dv_1: {type: Sequelize.STRING(10)},
        section103_dv_2: {type: Sequelize.STRING(10)},
        section103_tv:   {type: Sequelize.STRING(10)},
        section103_th:   {type: Sequelize.STRING(10)},

        section104_t1:   {type: Sequelize.STRING(10)},
        section104_t2:   {type: Sequelize.STRING(10)},
        section104_ov_1: {type: Sequelize.STRING(10)},
        section104_ov_2: {type: Sequelize.STRING(10)},
        section104_dv_1: {type: Sequelize.STRING(10)},
        section104_dv_2: {type: Sequelize.STRING(10)},
        section104_tv:   {type: Sequelize.STRING(10)},
        section104_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};


