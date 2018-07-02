var mysql = require("mysql");

function login() {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root", 
        password: "root", 
        database: "Bamazon", 
        multipleStatements: true
    });

    return connection;
}

module.exports = {
    login: login
};

