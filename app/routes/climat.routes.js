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



    app.get("/api/climate/oneBlockOneDay",
        // [authJwt.verifyToken],
        controller.oneBlockOneDay
    );

    app.get("/api/climate/alarms",
        // [authJwt.verifyToken],
        controller.getAlarms
    );

    app.get("/api/climate/allBlocksLastData",
        // [authJwt.verifyToken],
        controller.allBlocksLastData
    );

    app.get("/api/climate/oneBlockAvgOneDay",
        // [authJwt.verifyToken],
        controller.oneBlockOneDayAvg
    );

    app.get("/api/climate/oneBlockAvgOneMonth",
        // [authJwt.verifyToken],
        controller.oneBlockOneMonthAvg
    );

    app.get("/api/climate/oneBlockOneDay",
        // [authJwt.verifyToken],
        controller.oneBlockOneDay
    );

    app.post("/api/climate/uploadAvgFile",
        // [authJwt.verifyToken],
        upload.single('file'),
        controller.uploadAvgFile
    );

    app.post(
        "/api/climate/update",
        [authJwt.verifyComplexToken],    controller.update
    );

    app.post(
        "/api/climate/alarms",
        [authJwt.verifyComplexToken],    controller.alarms
    );

    app.post(
        "/api/climate/updateCO",
        [authJwt.verifyComplexToken],    controller.updateCO
    );

    app.post(
        "/api/climate/updateLight",
        [authJwt.verifyComplexToken],    controller.updateLight
    );

    app.post(
        "/api/climate/updateWater",
        [authJwt.verifyComplexToken],    controller.updateWater
    );

    app.post(
        "/api/climate/updateArtLight",
        [authJwt.verifyComplexToken],    controller.updateArtLight
    );

    app.post(
        "/api/climate/updateSunRise",
        [authJwt.verifyComplexToken],    controller.updateSunRise
    );
};

