DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL (8,2) NOT NULL,
stock_quantity INTEGER(5) NOT NULL,
PRIMARY KEY (id)
); 


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush", "Health", 4.99,10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Comb", "Health", 2.99,10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shampoo", "Health", 7.99,10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Electric Razor", "Health", 10.09,8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Soap", "Health", 3.99,20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toaster", "Kitchen", 50.99,4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plate", "Kitchen", 3.99,12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mini-Fridge", "Kitchen", 89.90,2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bat", "Sports", 12.99,10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Frisbee", "Sports", 7.99,11);

SELECT *  FROM products;