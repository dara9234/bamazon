var mysql = require("mysql");
//var inquirer = require("inquirer");

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
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connection Successful!");
  console.log("connected as id " + connection.threadId);
 // run the start function after the connection is made to prompt the user
 displayTable();
});

// Creating a function displayTable to Show all the items on sale

var displayTable= function afterConnection() {


          connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;
          
            //results of the sql select statement
            for(var i=0; i<res.length; i++){
                (res[i].item_id+""+res[i].product_name+""+
             res[i].department_name+""+res[i].price+" "+res[i].stock_quantity+"\n");
             console.table(res);
            }  
        });

    }
        

         
           //prompting the buyer to enter the item they want to buy
           //inquirer
           //.prompt({
             //name: "choice",
             //type: "rawlist",
             //message: "What item would you like to buy? Please enter the item id",
             
           //})
           //.then(function(answer) {
             // based on their answer, either call the bid or the post functions
             //for (var i=0;i<res.length;i++){
                //if (answer.choice=== res[i].item_id) {
                    //var product=answer.choice;

             //}
             
             

            
     
    
        
        
         
   

// creating two prompts for customer questions
// The first should ask them the ID of the product they would like to buy.



























