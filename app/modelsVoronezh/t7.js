module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t7", {
        co2_1:         {type: Sequelize.STRING(10)},

        section13_t1:   {type: Sequelize.STRING(10)},
        section13_ov_1: {type: Sequelize.STRING(10)},
        section13_dv_1: {type: Sequelize.STRING(10)},
        section13_tv:   {type: Sequelize.STRING(10)},
        section13_th:   {type: Sequelize.STRING(10)},

    },{ freezeTableName: true,});

};

