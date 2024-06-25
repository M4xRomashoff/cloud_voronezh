module.exports = (sequelize, Sequelize) => {

    return sequelize.define("commonagro_34", {
        out_t:          {type: Sequelize.STRING(10)},
        wind_speed:     {type: Sequelize.STRING(10)},
        wind_dir:       {type: Sequelize.STRING(10)},
        light:          {type: Sequelize.STRING(10)},
        out_sum_light1: {type: Sequelize.STRING(10)},


    },{ freezeTableName: true,});

};

