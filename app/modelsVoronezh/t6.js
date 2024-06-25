module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t6", {
        co2:            {type: Sequelize.STRING(10)},

        section311_t:    {type: Sequelize.STRING(10)},
        section311_ov_1: {type: Sequelize.STRING(10)},
        section311_dv_1: {type: Sequelize.STRING(10)},
        section311_tv:   {type: Sequelize.STRING(10)},
        section311_th:   {type: Sequelize.STRING(10)},

        section312_t:    {type: Sequelize.STRING(10)},
        section312_ov_1: {type: Sequelize.STRING(10)},
        section312_dv_1: {type: Sequelize.STRING(10)},
        section312_tv:   {type: Sequelize.STRING(10)},
        section312_th:   {type: Sequelize.STRING(10)},

        section313_t:    {type: Sequelize.STRING(10)},
        section313_ov_1: {type: Sequelize.STRING(10)},
        section313_dv_1: {type: Sequelize.STRING(10)},
        section313_tv:   {type: Sequelize.STRING(10)},
        section313_th:   {type: Sequelize.STRING(10)},

        section314_t:    {type: Sequelize.STRING(10)},
        section314_ov_1: {type: Sequelize.STRING(10)},
        section314_dv_1: {type: Sequelize.STRING(10)},
        section314_tv:   {type: Sequelize.STRING(10)},
        section314_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};

