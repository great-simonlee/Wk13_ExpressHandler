const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.render("index", { burger_data: burger.all() })
});

router.post("/api", function(req, res) {
    
});

router.put("/api/:id", function(req, res) {

});

module.exports = router