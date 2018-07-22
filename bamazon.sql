DROP DATABASE IF EXISTS Bamazon_DB;

CREATE DATABASE Bamazon_DB;


USE Bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quanity DECIMAL(10) NOT NULL,
  highest_bid DECIMAL (10,2) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Counter Strike", "Gaming", 15.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Hearth Stone", "Gaming", 1.99, 650);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Rocket League", "Gaming", 20.00, 400);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Left 4 Dead 2", "Gaming", 20.00, 900);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("PLAYERUNKOWNS'S BATTLEGROUNDS", "Gaming", 30.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Socks", "Clothing", 20.00, 60);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Hat", "Clothing", 40.50, 610);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Jacket", "Clothing", 199.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Shoe's", "Clothing", 600.00, 12);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("T-Shirt", "Clothing", 15.00, 700);