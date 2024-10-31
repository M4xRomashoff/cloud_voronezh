const { authJwt} = require("../middleware");
const controller = require("../controllers/climat.controller");
const {rootPath} = require('../../voron_server');
const multer = require("multer");
const upload = multer( { dest: rootPath+"/public/uploads/avg_data" });


module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    app.get("/api/climate/oneBlockOneDay",                                               controller.oneBlockOneDay);

    app.get("/api/climate/allBlocksLastData",                                            controller.allBlocksLastData);

    app.get("/api/climate/alarmsList",                                                   controller.alarmsList);

    app.get("/api/climate/alarms",                                                       controller.getAlarms);

    app.get("/api/climate/oneBlockOneDayM4",                                             controller.oneBlockOneDayM4);

    app.get("/api/climate/lastDataM4",                                                   controller.lastDataM4);



    // app.get("/api/climate/reportOneBlockOneDayWeather",                                  controller.reportOneBlockOneDayWeather);

    // app.get("/api/climate/reportOneBlockOneDayMain",                                     controller.reportOneBlockOneDayMain);
    //
    // app.get("/api/climate/oneBlockOneDayWatering",                                       controller.oneBlockOneDayWatering);
    //
    // app.get("/api/climate/oneBlockOneDayM400",                                           controller.oneBlockOneDayM400);
    //
    // app.get("/api/climate/oneBlockOneDayI400",                                           controller.oneBlockOneDayI400);
    //
    // app.get("/api/climate/oneBlockOneDay401",                                            controller.oneBlockOneDay401);
    //
    // app.get("/api/climate/oneBlockOneDay412",                                            controller.oneBlockOneDay412);
    //
    // app.get("/api/climate/oneBlockOneDay420",                                            controller.oneBlockOneDay420);
    //
    // app.get("/api/climate/oneBlockOneDayI110",                                           controller.oneBlockOneDayI110);
    //
    // app.get("/api/climate/oneBlockOneDayI120",                                           controller.oneBlockOneDayI120);
    //
    // app.get("/api/climate/oneBlockOneDayI128",                                           controller.oneBlockOneDayI128);
    //
    // app.get("/api/climate/oneBlockOneDayM115",                                           controller.oneBlockOneDayM115);
    //
    // app.get("/api/climate/oneBlockOneDayI206",                                           controller.oneBlockOneDayI206);
    //
    // app.get("/api/climate/oneBlockOneDayM112",                                           controller.oneBlockOneDayM112);
    //
    // app.get("/api/climate/oneBlockOneDayI168",                                           controller.oneBlockOneDayI168);
    //
    app.get("/api/climate/oneBlockAvgOneDay",                                            controller.oneBlockOneDayAvg);

    app.get("/api/climate/oneBlockAvgOneMonth",                                          controller.oneBlockOneMonthAvg);

    app.get("/api/climate/complexAvgOneDay",                                             controller.complexAvgOneDay);

    app.get("/api/climate/downloadAvgMonthFile",                                         controller.downloadAvgMonthFile);

    app.get("/api/climate/downloadAvgDayFile",                                           controller.downloadAvgDayFile);

    // app.get("/api/climate/createReportFile",                                             controller.createReportFile);



    app.post("/api/climate/uploadAvgFile",                upload.single('file'),     controller.uploadAvgFile    );



    app.post( "/voronezh/api/climate/update",             [authJwt.verifyComplexToken],    controller.update    );

    app.post( "/voronezh/api/climate/updateAlarms",       [authJwt.verifyComplexToken],    controller.alarms    );

    app.post( "/voronezh/api/climate/updateM4",           [authJwt.verifyComplexToken],    controller.updateM4    );

    app.post( "/voronezh/api/climate/updateCO",           [authJwt.verifyComplexToken],    controller.updateCO    );

    app.post( "/voronezh/api/climate/updateWater",        [authJwt.verifyComplexToken],    controller.updateWater    );

    app.post( "/voronezh/api/climate/updateLight",        [authJwt.verifyComplexToken],    controller.updateLight    );

    app.post( "/voronezh/api/climate/updateArtLight",     [authJwt.verifyComplexToken],    controller.updateArtLight    );





    // app.post( "/voronezh/api/climate/updateM400",         [authJwt.verifyComplexToken],    controller.updateM400 );
    //
    // app.post( "/voronezh/api/climate/updateI400",         [authJwt.verifyComplexToken],    controller.updateI400  );
    //
    // app.post( "/voronezh/api/climate/updateI401",         [authJwt.verifyComplexToken],    controller.update401    );
    //
    // app.post( "/voronezh/api/climate/updateM412",         [authJwt.verifyComplexToken],    controller.update412    );
    //
    // app.post( "/voronezh/api/climate/updateM420",         [authJwt.verifyComplexToken],    controller.update420    );
    //
    // app.post( "/voronezh/api/climate/updateI110",         [authJwt.verifyComplexToken],    controller.updateI110    );
    //
    // app.post( "/voronezh/api/climate/updateI120",         [authJwt.verifyComplexToken],    controller.updateI120    );
    //

    //
    // app.post( "/voronezh/api/climate/updateWatering",     [authJwt.verifyComplexToken],    controller.updateWatering    );



    // app.post( "/voronezh/api/climate/updateI128",         [authJwt.verifyComplexToken],    controller.updateI128    );
    //
    // app.post( "/voronezh/api/climate/updateM115",         [authJwt.verifyComplexToken],    controller.updateM115    );
    //
    // app.post( "/voronezh/api/climate/updateI206",         [authJwt.verifyComplexToken],    controller.updateI206    );
    //
    // app.post( "/voronezh/api/climate/updateM112",         [authJwt.verifyComplexToken],    controller.updateM112    );
    //
    // app.post( "/voronezh/api/climate/updateI168",         [authJwt.verifyComplexToken],    controller.updateI168    );
};

