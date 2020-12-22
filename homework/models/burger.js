const orm = require("../config/orm.js");

const burger = {
    all: function(callback) {
        orm.selectAll("burgers", (result) => {
            callback(result);
        })
    },
    create: function(burgerName, callback) {
        orm.insertOne("burgers", burgerName, (result) => {
            callback(result);
        });
    },
    update: function(id, callback) {
        orm.updateOne("burgers", id, (result) => {
            callback(result);
        });
    }
};

module.exports = burger;