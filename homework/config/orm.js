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

    updateOne: function(tableName, idRow, callback) {
        let queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
        conn.query(queryString, [tableName, true, idRow], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    }
};

module.exports = orm;