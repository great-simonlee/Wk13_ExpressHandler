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
        res.redirect("/burgers") // 저 입력되는 req.body.burger_name의 값이 스트링이 아니라서 그런가...?> ㄴㄴ
    })
});


router.put("/burgers/:id", function(req, res) {

});
// 로직이 좀 ㅈ같아도 이해해주셈 ㅋㅋㅋ ddd???????????????????????????????????????????????????????????????????
// burgers ok


module.exports = router