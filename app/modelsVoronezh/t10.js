module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t10", {
        co2:            {type: Sequelize.STRING(10)},

        section514_t:    {type: Sequelize.STRING(10)},
        section514_ov_1: {type: Sequelize.STRING(10)},
        section514_dv_1: {type: Sequelize.STRING(10)},
        section514_tv:   {type: Sequelize.STRING(10)},
        section514_th:   {type: Sequelize.STRING(10)},

        section515_t:    {type: Sequelize.STRING(10)},
        section515_ov_1: {type: Sequelize.STRING(10)},
        section515_dv_1: {type: Sequelize.STRING(10)},
        section515_tv:   {type: Sequelize.STRING(10)},
        section515_th:   {type: Sequelize.STRING(10)},

        section516_t:    {type: Sequelize.STRING(10)},
        section516_ov_1: {type: Sequelize.STRING(10)},
        section516_dv_1: {type: Sequelize.STRING(10)},
        section516_tv:   {type: Sequelize.STRING(10)},
        section516_th:   {type: Sequelize.STRING(10)},

    },{ freezeTableName: true,});

};

