module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t10", {
        co2_1:         {type: Sequelize.STRING(10)},

        section91_t1:   {type: Sequelize.STRING(10)},
        section91_t2:   {type: Sequelize.STRING(10)},
        section91_ov_1: {type: Sequelize.STRING(10)},
        section91_ov_2: {type: Sequelize.STRING(10)},
        section91_dv_1: {type: Sequelize.STRING(10)},
        section91_dv_2: {type: Sequelize.STRING(10)},
        section91_tv:   {type: Sequelize.STRING(10)},
        section91_th:   {type: Sequelize.STRING(10)},

        section92_t1:   {type: Sequelize.STRING(10)},
        section92_t2:   {type: Sequelize.STRING(10)},
        section92_ov_1: {type: Sequelize.STRING(10)},
        section92_ov_2: {type: Sequelize.STRING(10)},
        section92_dv_1: {type: Sequelize.STRING(10)},
        section92_dv_2: {type: Sequelize.STRING(10)},
        section92_tv:   {type: Sequelize.STRING(10)},
        section92_th:   {type: Sequelize.STRING(10)},

        section93_t1:   {type: Sequelize.STRING(10)},
        section93_t2:   {type: Sequelize.STRING(10)},
        section93_ov_1: {type: Sequelize.STRING(10)},
        section93_ov_2: {type: Sequelize.STRING(10)},
        section93_dv_1: {type: Sequelize.STRING(10)},
        section93_dv_2: {type: Sequelize.STRING(10)},
        section93_tv:   {type: Sequelize.STRING(10)},
        section93_th:   {type: Sequelize.STRING(10)},

    },{ freezeTableName: true,});

};

