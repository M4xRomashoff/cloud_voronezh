module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t1", {
        co2:            {type: Sequelize.STRING(10)},

        section111_t:    {type: Sequelize.STRING(10)},
        section111_ov_1: {type: Sequelize.STRING(10)},
        section111_dv_1: {type: Sequelize.STRING(10)},
        section111_tv:   {type: Sequelize.STRING(10)},
        section111_th:   {type: Sequelize.STRING(10)},

        section112_t:    {type: Sequelize.STRING(10)},
        section112_ov_1: {type: Sequelize.STRING(10)},
        section112_dv_1: {type: Sequelize.STRING(10)},
        section112_tv:   {type: Sequelize.STRING(10)},
        section112_th:   {type: Sequelize.STRING(10)},

        section113_t:    {type: Sequelize.STRING(10)},
        section113_ov_1: {type: Sequelize.STRING(10)},
        section113_dv_1: {type: Sequelize.STRING(10)},
        section113_tv:   {type: Sequelize.STRING(10)},
        section113_th:   {type: Sequelize.STRING(10)},

        section114_t:    {type: Sequelize.STRING(10)},
        section114_ov_1: {type: Sequelize.STRING(10)},
        section114_dv_1: {type: Sequelize.STRING(10)},
        section114_tv:   {type: Sequelize.STRING(10)},
        section114_th:   {type: Sequelize.STRING(10)},

        section115_t:    {type: Sequelize.STRING(10)},
        section115_ov_1: {type: Sequelize.STRING(10)},
        section115_dv_1: {type: Sequelize.STRING(10)},
        section115_tv:   {type: Sequelize.STRING(10)},
        section115_th:   {type: Sequelize.STRING(10)},

        section116_t:    {type: Sequelize.STRING(10)},
        section116_ov_1: {type: Sequelize.STRING(10)},
        section116_dv_1: {type: Sequelize.STRING(10)},
        section116_tv:   {type: Sequelize.STRING(10)},
        section116_th:   {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};


