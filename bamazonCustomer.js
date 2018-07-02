// node inventory.js remove

var db = require("./db");

if(process.argv[2]=="insert"){
    command = "INSERT INTO products SET ?"
}; 


console.log(command);
var inventoryObj = { 
    product: process.argv[3],
    department: process.argv[4],
    price: parseFloat(process.argv[5]),
    stock: parseFloat(process.argv[6])
};

var connection = db.login();

connection.connect(function(err) {
    if (err) {
        throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
      
    }
    // executeCommand(command, inventoryObj, connection, function() {
    //     console.log("Done");
    // })
    console.log("Inserting a new product...\n");
    var query = connection.query(command, inventoryObj,
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
      }
    )
});

console.log(command);