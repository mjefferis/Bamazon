# Bamazon

## About
Bamazon is an Amazon-like storefront built with MySQL and Node.js. Customer.js takes in orders from customers and depletes stock from the store's inventory. Manager.js lets the user both manage and add items to inventory. It is a command-line application. 

## Technologies Used
Node.js</br>
MySQL</br>
Inquirer NPM Package

## Setup
To run this code, first make sure node is installed on your machine. <a href="https://nodejs.org/en/download/">You can download Node here.</a> In your terminal or gitbash, navigate to a location in which you would like to download this code and perform a ````git clone```` of this repo's url: https://github.com/mjefferis/Bamazon.git. Then run ````npm install```` to make sure all necessary npm packages are installed.

To prepare the database, run bamazon.sql on your MySQL workbench. Also, make sure to update the passwords in manager.js and customer.js to match the passwords in your own local MySQL workbench. 

## Running the App 
Once setup is complete perform either ````node customer.js```` or ````node manager.js````. When entering the first command, the terminal or gitbash will prompt you to choose an item from the MySQL database you would like to buy and how much. If there is enough of the requested item in the database, this amount will be removed from the database and the terminal/gitbash will tell you how much money this purchase costs. When running manager.js, you will be prompted to perform one of the four following actions: view all the products to the database, view items in the database whose quantity is less than five, increase the quantity of an item, or add a new item to the database. 


## Video Walkthrough
<a href="https://drive.google.com/file/d/10D45u1ZYG6C4cTN4g4jIEG__6rsO3R-W/view?usp=sharing">Click here to watch a demo video.</a>

