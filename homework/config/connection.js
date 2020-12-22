const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Simon0630!@#",
    database: "burgers_db"
});

conn.connect(function(err) {
    if (err) {
        console.error("connecting err: " + err.stack)
        return;
    }
    console.log("Connected as id: " + conn.threadId);
});

module.exports = conn;