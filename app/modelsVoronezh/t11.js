module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t11", {
        co2:            {type: Sequelize.STRING(10)},

        section511_t:    {type: Sequelize.STRING(10)},
        section511_ov_1: {type: Sequelize.STRING(10)},
        section511_dv_1: {type: Sequelize.STRING(10)},
        section511_tv:   {type: Sequelize.STRING(10)},
        section511_th:   {type: Sequelize.STRING(10)},

        section512_t:    {type: Sequelize.STRING(10)},
        section512_ov_1: {type: Sequelize.STRING(10)},
        section512_dv_1: {type: Sequelize.STRING(10)},
        section512_tv:   {type: Sequelize.STRING(10)},
        section512_th:   {type: Sequelize.STRING(10)},

        section513_t:    {type: Sequelize.STRING(10)},
        section513_ov_1: {type: Sequelize.STRING(10)},
        section513_dv_1: {type: Sequelize.STRING(10)},
        section513_tv:   {type: Sequelize.STRING(10)},
        section513_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};

