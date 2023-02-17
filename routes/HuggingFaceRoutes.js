const express = require("express");
const route = express.Router();
const { huggingface } = require("../Controllers/HuggingFaceController");

route.post("/huggingfaceapi", huggingface);

module.exports = route;
