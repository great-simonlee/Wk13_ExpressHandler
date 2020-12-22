const conn = require("./connection.js");

const orm = {
    selectAll: function(tableName, callback) {
        let queryString = "SELECT * FROM ??";
        conn.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    insertOne: function(tableName, burgerName, callback) {
        let queryString = "INSERT INTO ?? (burger_name, devoured) VALUE (?, ?);"
        conn.query(queryString, [tableName, burgerName, false], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    updateOne: function(tableName, changeVal, idRow) {
        let queryString = "UPDATE ?? SET burger_name = ? WHERE id = ?";
        conn.query(queryString, [tableName, changeVal, idRow], function(err, result) {
            if (err) throw err;
            orm.selectAll("burgers");
        })
    }
};

module.exports = orm;