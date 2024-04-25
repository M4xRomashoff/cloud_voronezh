module.exports = (sequelize, Sequelize) => {

    return sequelize.define("avgs", {
        date:               {type: Sequelize.DATEONLY,},
        blockId:            {type: Sequelize.STRING(10)},
        out_light:          {type: Sequelize.STRING(10)},
        art_light_50:       {type: Sequelize.STRING(10)},
        art_light_100:      {type: Sequelize.STRING(10)},
        art_light_calc:     {type: Sequelize.STRING(10)},
        total_light:        {type: Sequelize.STRING(10)},
        avg_light:          {type: Sequelize.STRING(10)},
        max_light:          {type: Sequelize.STRING(10)},

        co2_ga:             {type: Sequelize.STRING(10)},
        co2_ppm:            {type: Sequelize.STRING(10)},

        max_wind:           {type: Sequelize.STRING(10)},

        water_total:        {type: Sequelize.STRING(10)},
        water_litr:         {type: Sequelize.STRING(10)},

        out_t_min:          {type: Sequelize.STRING(10)},
        out_t_day_max:      {type: Sequelize.STRING(10)},
        out_t_night_max:    {type: Sequelize.STRING(10)},
        out_t_24_max:       {type: Sequelize.STRING(10)},
        out_t_day_avg:      {type: Sequelize.STRING(10)},
        out_t_night_avg:    {type: Sequelize.STRING(10)},
        out_t_24_avg:       {type: Sequelize.STRING(10)},

        plan_t_day:         {type: Sequelize.STRING(10)},
        plan_t_night:       {type: Sequelize.STRING(10)},
        plan_t_24:          {type: Sequelize.STRING(10)},

        curr_t_min:         {type: Sequelize.STRING(10)},
        curr_t_max:         {type: Sequelize.STRING(10)},
        curr_t_avg_day:     {type: Sequelize.STRING(10)},
        curr_t_avg_night:   {type: Sequelize.STRING(10)},
        curr_t_avg_24:      {type: Sequelize.STRING(10)},

        hum_max:            {type: Sequelize.STRING(10)},
        hum_avg_day:        {type: Sequelize.STRING(10)},
        hum_avg_night:      {type: Sequelize.STRING(10)},
        hum_avg_24:         {type: Sequelize.STRING(10)},
        hum_def_day:        {type: Sequelize.STRING(10)},
        hum_def_night:      {type: Sequelize.STRING(10)},
        hum_def_24:         {type: Sequelize.STRING(10)},
        sunrise:            {type: Sequelize.STRING(10)},
        sunset:             {type: Sequelize.STRING(10)},

    },{ freezeTableName: true,});

};


