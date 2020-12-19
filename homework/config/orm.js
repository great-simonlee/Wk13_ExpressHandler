const conn = require("./connection.js");

const orm = {
    selectAll: function(tableName) {
        let queryString = "SELECT * FROM ??";
        conn.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    insertOne: function(tableName, burgerName) {
        let queryString = "INSERT INTO ?? (burger_name, devoured) VALUE (?, ?);"
        conn.query(queryString, [tableName, burgerName, 0], function(err, result) {
            if (err) throw err;
            orm.selectAll("burgers");
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