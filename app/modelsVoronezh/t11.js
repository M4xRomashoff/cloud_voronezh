module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t11", {
        co2_1:         {type: Sequelize.STRING(10)},

        section81_t1:   {type: Sequelize.STRING(10)},
        section81_t2:   {type: Sequelize.STRING(10)},
        section81_ov_1: {type: Sequelize.STRING(10)},
        section81_ov_2: {type: Sequelize.STRING(10)},
        section81_dv_1: {type: Sequelize.STRING(10)},
        section81_dv_2: {type: Sequelize.STRING(10)},
        section81_tv:   {type: Sequelize.STRING(10)},
        section81_th:   {type: Sequelize.STRING(10)},

        section82_t1:   {type: Sequelize.STRING(10)},
        section82_t2:   {type: Sequelize.STRING(10)},
        section82_ov_1: {type: Sequelize.STRING(10)},
        section82_ov_2: {type: Sequelize.STRING(10)},
        section82_dv_1: {type: Sequelize.STRING(10)},
        section82_dv_2: {type: Sequelize.STRING(10)},
        section82_tv:   {type: Sequelize.STRING(10)},
        section82_th:   {type: Sequelize.STRING(10)},

        section83_t1:   {type: Sequelize.STRING(10)},
        section83_t2:   {type: Sequelize.STRING(10)},
        section83_ov_1: {type: Sequelize.STRING(10)},
        section83_ov_2: {type: Sequelize.STRING(10)},
        section83_dv_1: {type: Sequelize.STRING(10)},
        section83_dv_2: {type: Sequelize.STRING(10)},
        section83_tv:   {type: Sequelize.STRING(10)},
        section83_th:   {type: Sequelize.STRING(10)},

    },{ freezeTableName: true,});

};

