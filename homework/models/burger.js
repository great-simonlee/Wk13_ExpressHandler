const orm = require("../config/orm.js");

const burger = {
    all: function() {
        return orm.selectAll("burgers");
    },
    create: function(data) {
        orm.insertOne("burgers", data);
    },
    update: function(data, id) {
        orm.updateOne("burgers", data, id);
    }
};

module.exports = burger;