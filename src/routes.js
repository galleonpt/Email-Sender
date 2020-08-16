const express = require("express")
const mailController = require("./controllers/mailController");

const routes = express.Router()

routes.post("/send", mailController.send);

module.exports = routes