module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t3", {
        co2_1:         {type: Sequelize.STRING(10)},
        co2_2:         {type: Sequelize.STRING(10)},

        section11_t1:   {type: Sequelize.STRING(10)},
        section11_t2:   {type: Sequelize.STRING(10)},
        section11_ov_1: {type: Sequelize.STRING(10)},
        section11_ov_2: {type: Sequelize.STRING(10)},
        section11_dv_1: {type: Sequelize.STRING(10)},
        section11_dv_2: {type: Sequelize.STRING(10)},
        section11_tv:   {type: Sequelize.STRING(10)},
        section11_th:   {type: Sequelize.STRING(10)},

        section12_t1:   {type: Sequelize.STRING(10)},
        section12_ov_1: {type: Sequelize.STRING(10)},
        section12_dv_1: {type: Sequelize.STRING(10)},
        section12_tv:   {type: Sequelize.STRING(10)},
        section12_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};

