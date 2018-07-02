// node inventory.js remove

var db = require("./db");

var command = process.argv[2]; 

var inventoryObj = { 
    productName: process.argv[3],
    description: process.argv[4],
    price: parseFloat(process.argv[5]),
    cost = parseFloat(process.argv[6])
};

var connection = db.login();
connection.connect(function(err) {
    if (err) {
        throw err;
    }

    executeCommand(command, inventoryObj, connection, function() {
        console.log("Done");
    })
})