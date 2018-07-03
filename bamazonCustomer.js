// node inventory.js remove
var inquirer = require("inquirer");
var db = require("./db");
var currentProducts = "SELECT * FROM products";

if(process.argv[2]=="insert"){
    command = "INSERT INTO products SET ?"
    insertProducts()
}; 



var connection = db.login();
// connect to the mysql server and sql database
connection.connect(function(err) {
    // if (err) throw err;
    // run the start function after the connection is made to prompt the user
    readProducts();
});
  
// console.log(command);
// var inventoryObj = { 
//     product: process.argv[3],
//     department: process.argv[4],
//     price: parseFloat(process.argv[5]),
//     stock: parseFloat(process.argv[6])
// };



function insertProducts(){
    var query = connection.query(command, inventoryObj,
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
      }
    )
};

function readProducts() {
    console.log("See Below for the Current Products in Inventory.\n");
    connection.query(currentProducts, function(err, res, fields) {
      if (err) throw err;
      // Log all results of the SELECT statement
    //   var obj = JSON.stringify(res);
    //   var obj = obj.split(",{");
    //   console.log(obj);
    Object.keys(res).forEach(function(key) {
        var row = res[key];
        console.log("ID=" + row.id, row.product, "$"+row.price, row.stock+" units in stock.")
    })

});
};
function start() {
    inquirer
      .prompt({
        name: "product",
        type: "input",
        message: "Please enter the id of the product you seek."
      })
      .then(function(answer) {
        // based on their answer, ask how many units of the product they want.
        console.log(answer);
      });
  };
