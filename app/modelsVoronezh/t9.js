module.exports = (sequelize, Sequelize) => {

    return sequelize.define("t9", {
        co2:            {type: Sequelize.STRING(10)},

        section621_t:    {type: Sequelize.STRING(10)},
        section621_ov_1: {type: Sequelize.STRING(10)},
        section621_dv_1: {type: Sequelize.STRING(10)},
        section621_tv:   {type: Sequelize.STRING(10)},
        section621_th:   {type: Sequelize.STRING(10)},

        section622_t:    {type: Sequelize.STRING(10)},
        section622_ov_1: {type: Sequelize.STRING(10)},
        section622_dv_1: {type: Sequelize.STRING(10)},
        section622_tv:   {type: Sequelize.STRING(10)},
        section622_th:   {type: Sequelize.STRING(10)},

        section623_t:    {type: Sequelize.STRING(10)},
        section623_ov_1: {type: Sequelize.STRING(10)},
        section623_dv_1: {type: Sequelize.STRING(10)},
        section623_tv:   {type: Sequelize.STRING(10)},
        section623_th:   {type: Sequelize.STRING(10)},

        section624_t:    {type: Sequelize.STRING(10)},
        section624_ov_1: {type: Sequelize.STRING(10)},
        section624_dv_1: {type: Sequelize.STRING(10)},
        section624_tv:   {type: Sequelize.STRING(10)},
        section624_th:   {type: Sequelize.STRING(10)},

        section625_t:    {type: Sequelize.STRING(10)},
        section625_ov_1: {type: Sequelize.STRING(10)},
        section625_dv_1: {type: Sequelize.STRING(10)},
        section625_tv:   {type: Sequelize.STRING(10)},
        section625_th:   {type: Sequelize.STRING(10)},

        section626_t:    {type: Sequelize.STRING(10)},
        section626_ov_1: {type: Sequelize.STRING(10)},
        section626_dv_1: {type: Sequelize.STRING(10)},
        section626_tv:   {type: Sequelize.STRING(10)},
        section626_th:   {type: Sequelize.STRING(10)},



    },{ freezeTableName: true,});

};

