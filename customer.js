var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dan",
  database: "bamazon_db"
});

function start() {

  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    inquirer.prompt([
        {
          type: "input",
          name: "id",
          message: "What is the ID of the product you would like to buy?",
          validate: function(value){
            if(isNaN(value) == false && parseInt(value) > 0 && parseInt(value) < 11){
              return true;
            } else{
              return false;
            }
          }
        },
        {
          type: "input",
          name: "quantity",
          message: "How many would you like to buy?",
          validate: function(value){
            if(isNaN(value) == false && parseInt(value) > 0){
              return true;
            } else{
              return false;
            }
          }
        }
        ]).then(function(answer){
            var customerWishId = parseInt(answer.id)-1;
            var customerWishQ = parseInt(answer.quantity);
            var total = parseFloat(((res[customerWishId].price)*customerWishQ).toFixed(2));

            if(res[customerWishId].stock_quantity >= customerWishQ){
              connection.query("UPDATE products SET ? WHERE ?", [
              {stock_quantity: (res[customerWishId].stock_quantity - customerWishQ)},
              {id: answer.id}
              ], function(err, result){
                  if(err) throw err;
                  console.log("Your total is $" + total.toFixed(2));
                  connection.end();

              });}
              else{console.log('We do not have that much in stock!');
              connection.end();
            }
            
        } ) } )} 

        start();