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
    inquirer.prompt([{
        type: "list",
        name: "manage",
        message: "What would you like to do?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }]).then(function (ans) {
        switch (ans.manage) {
            case "View Products for Sale": viewProducts();
                break;
            case "View Low Inventory": viewLowInventory();
                break;
            case "Add to Inventory": addToInventory();
                break;
            case "Add New Product": addNewProduct();
                break;
        }
    });
}

function viewProducts() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity: " + res[i].stock_quantity);
        }
       
    });
}


function viewLowInventory() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5) {
                console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity: " + res[i].stock_quantity);
            }
        }
    });
   
}

function addToInventory(){
    connection.query('SELECT * FROM products', function(err, res){
    if(err) throw err;
        var inventory = []; 
    for(var i=0; i<res.length; i++){
      inventory.push(res[i].product_name);
    }
  
    inquirer.prompt([{
      type: "list",
      name: "item",
      choices: inventory,
      message: "Which item would you like to add inventory?"
    }, {
      type: "input",
      name: "quantity",
      message: "How much would you like to add?",
      validate: function(value){
        if(isNaN(value) === false){return true;}
        else{return false;}
      }
      }]).then(function(ans){
        var currentQ;
        for(var i=0; i<res.length; i++){
          if(res[i].product_name === ans.item){
            currentQ = res[i].stock_quantity;
          }
        }
        connection.query('UPDATE products SET ? WHERE ?', [
          {stock_quantity: currentQ + parseInt(ans.quantity)},
          {product_name: ans.item}
          ], function(err, res){
            if(err) throw err;
            console.log('Inventory updated!');
          });
        })
    });
    
  }


  function addNewProduct(){
    var departments = ["Kitchen", "Sports", "Health"];
  
    inquirer.prompt([{
      type: "input",
      name: "product",
      message: "What is the name of the product you would like to add?",
      validate: function(value){
        if(value){return true;}
        else{return false;}
      }
    }, {
      type: "list",
      name: "department",
      message: "What is the department of this product?",
      choices: departments
    }, {
      type: "input",
      name: "price",
      message: "What is the price of this product?",
      validate: function(value){
        if(isNaN(value) === false){return true;}
        else{return false;}
      }
    }, {
      type: "input",
      name: "quantity",
      message: "How much of this product would you like to add?",
      validate: function(value){
        if(isNaN(value) == false){return true;}
        else{return false;}
      }
    }]).then(function(ans){
      connection.query('INSERT INTO products SET ?',{
        product_name: ans.product,
        department_name: ans.department,
        price: ans.price,
        stock_quantity: ans.quantity
      }, function(err, res){
        if(err) throw err;
        console.log('Another item was added to the store.');
      })
    });
    

  }



start();