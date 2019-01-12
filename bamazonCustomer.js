var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "Dara",

  // Your password
  password: "Freegift9@",
  database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection Successful!");
  console.log("connected as id " + connection.threadId);
  // run the displayTable function after the connection is made to prompt the user
  displayTable();
});

// Creating a function displayTable to Show all the items on sale

var displayTable = function afterConnection() {


  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    //results of the sql select statement
    for (var i = 0; i < res.length; i++) {
      (res[i].item_id + " || " + res[i].product_name + " || " +
        res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");

    }
    //results of the sql select statementQ
    console.table(res);
    //promting customers to select what they want to buy and how many based on first input
    promptCustomer(res);
  });

}

// creating a function promptCustomer to get customer's input

//prompting the buyer to enter the item they wish to buy

var promptCustomer = function (res) {
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "What item would you like to buy?  [Quit with Q]"
  }]).then(function (answer) {
      // based on their answer looping through all the items on sale and find the one customer entered
      var correct = false;
      if (answer.choice.toUpperCase() == "Q") {
        process.exit();
      }
      for (var i = 0; i < res.length; i++) {
        if (res[i].item_id == answer.choice) {
          correct = true;
          var product = answer.choice;
          var id = i;
          inquirer.prompt({
            type: 'input',
            name: 'quant',
            message: "How many items would you like to buy?",
            validate: function(value){
              if (isNaN(value)==false){
                return true;
              } else {
                 return false;
              }
            }
          }).then(function (answer) {
            if ((res[id].stock_quantity - answer.quant) > 0) {
              connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - answer.quant) +"' WHERE item_id='" + product + "'",
                function (err, res2) {
                  console.log("Product pruchased successfully!");
                  displayTable();
                })

            } else {
              console.log("Not a valid selecction!");
              promptCustomer(res);
            }

          })
        }
      }
      // Checking if the customer is entering the valid selection
      if (i == res.length && correct == false) {
        console.log("Not a valid selecction!");
        promptCustomer(res);
      }
    })

}








