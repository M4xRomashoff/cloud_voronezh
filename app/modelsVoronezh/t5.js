module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t5", {
        co2:            {type: Sequelize.STRING(10)},

        section221_t:    {type: Sequelize.STRING(10)},
        section221_ov_1: {type: Sequelize.STRING(10)},
        section221_dv_1: {type: Sequelize.STRING(10)},
        section221_tv:   {type: Sequelize.STRING(10)},
        section221_th:   {type: Sequelize.STRING(10)},

        section222_t:    {type: Sequelize.STRING(10)},
        section222_ov_1: {type: Sequelize.STRING(10)},
        section222_dv_1: {type: Sequelize.STRING(10)},
        section222_tv:   {type: Sequelize.STRING(10)},
        section222_th:   {type: Sequelize.STRING(10)},

        section223_t:    {type: Sequelize.STRING(10)},
        section223_ov_1: {type: Sequelize.STRING(10)},
        section223_dv_1: {type: Sequelize.STRING(10)},
        section223_tv:   {type: Sequelize.STRING(10)},
        section223_th:   {type: Sequelize.STRING(10)},

        section224_t:    {type: Sequelize.STRING(10)},
        section224_ov_1: {type: Sequelize.STRING(10)},
        section224_dv_1: {type: Sequelize.STRING(10)},
        section224_tv:   {type: Sequelize.STRING(10)},
        section224_th:   {type: Sequelize.STRING(10)},

        section225_t:    {type: Sequelize.STRING(10)},
        section225_ov_1: {type: Sequelize.STRING(10)},
        section225_dv_1: {type: Sequelize.STRING(10)},
        section225_tv:   {type: Sequelize.STRING(10)},
        section225_th:   {type: Sequelize.STRING(10)},

        section226_t:    {type: Sequelize.STRING(10)},
        section226_ov_1: {type: Sequelize.STRING(10)},
        section226_dv_1: {type: Sequelize.STRING(10)},
        section226_tv:   {type: Sequelize.STRING(10)},
        section226_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};

