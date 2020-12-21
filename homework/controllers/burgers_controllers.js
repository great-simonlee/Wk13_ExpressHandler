const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    let burgerData = burger.all()
    res.render("index", { burger_data: burgerData })
});

router.post("/burgers/create", function(req, res) {
    
});

router.put("/burgers/:id", function(req, res) {

});

module.exports = router