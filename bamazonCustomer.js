// node inventory.js remove
var inquirer = require("inquirer");
var db = require("./db");
var currentProducts = "SELECT * FROM products";
var selectById = "SELECT * FROM Bamazon.products WHERE id=";

if(process.argv[2]=="insert"){
    command = "INSERT INTO products SET ?"
    insertProducts()
}; 



var connection = db.login();
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    readProducts();
});
  

function insertProducts(){
    var query = connection.query(command, inventoryObj,
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
      }
    )
};

function readProducts() {
    connection.query(currentProducts, function(err, res, fields) {
      if (err) throw err;
    console.log("See Below for the Current Products in Inventory.\n");
    Object.keys(res).forEach(function(key) {
        var row = res[key];
        console.log("ID=" + row.id, row.product, "$"+row.price, row.stock+" units in stock.");
    });
    start();
});
};

function checkUnits(myUnits) {
    selectById = selectById + myID
    connection.query(selectById, function(err, res, fields) {
      if (err) throw err;
    Object.keys(res).forEach(function(key) {
        var row = res[key];
        // console.log("ID=" + row.id, row.product, "$"+row.price,":", row.stock+" units in stock.");
        availableUnits = row.stock;
        price = row.price;
    });

    if(myUnits > availableUnits){
        console.log("There are only " + availableUnits + " units available.")
        recallUnits();
    } else { 
        Total = price * myUnits;
        UnitsLeft = availableUnits - myUnits;
        console.log("You owe $" + Total + ". THank you for shopping with Bamazon.")
        readProducts();
        console.log("There are " + UnitsLeft + " units left")
        updateUnits(UnitsLeft,myID);
        start();
    }
});
};


function start() {
    inquirer.prompt({
        name: "number",
        type: "input",
        message: "Please enter the id of the product you seek."
      })
      .then(function(answer) {
        // based on their answer, ask how many units of the product they want.
        myID = Number.parseInt(answer.number);
        inquirer.prompt({
            name: "number",
            type: "input",
            message: "How many units of the item would you like to buy?"
          })
          .then(function(answer) {
            // based on their answer, ask how many units of the product they want.
            myUnits = Number.parseInt(answer.number);
            checkUnits(myUnits);
          });
      });
  };

function recallUnits(){
    inquirer.prompt({
        name: "number",
        type: "input",
        message: "How many units of the item would you like to buy?"
      })
      .then(function(answer) {
        // based on their answer, ask how many units of the product they want.
        myUnits = Number.parseInt(answer.number);
        console.log(myUnits);
        checkUnits(myUnits);
      });
  };

function updateUnits(UnitsLeft){
    connection.query("UPDATE Bamazon.products SET stock=" + UnitsLeft + " WHERE id=" + myID +";", function(err, res, fields) {
      if (err) throw err;
    });
  };