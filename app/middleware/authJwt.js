const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const {COMPLEX} = require('../config/complex.config')


verifyComplexToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    if (COMPLEX.find((item) => item.id === parseInt(token)-1000000))  next();
    else return res.status(401).send({
        message: "Unauthorized!",
    });

};


const authJwt = {

    verifyComplexToken: verifyComplexToken,

};
module.exports = authJwt;
