const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers")
});

router.get("/burgers", (req, res) => {
    burger.all((burgerData) => {
        res.render("index", { burger_data: burgerData })
    })
})

router.post("/burgers/create", function(req, res) {
    console.log(req)
    burger.create(req.body.burger_name, (result) => {
        console.log(result)
        res.redirect("/burgers")
    })
});


router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, (result) => {
        console.log(result);
        res.send(200);
    })
});


module.exports = router