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
    update: function(data, id) {
        orm.updateOne("burgers", data, id);
    }
};

module.exports = burger;