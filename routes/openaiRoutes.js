const express = require("express");
const { textcompletion } = require("../Controllers/openaiController");
const route = express.Router();

route.post("/completion", textcompletion);

module.exports = route;
