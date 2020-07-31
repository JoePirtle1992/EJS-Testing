const express = require("express");
const mahFirstRoute = express.Router();
const mahFirstController = require("./mahControllers");

mahFirstRoute.route("/").get(mahFirstController.getSomething).post(mahFirstController.addSomething);

module.exports = mahFirstRoute;