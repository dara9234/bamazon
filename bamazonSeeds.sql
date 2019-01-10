DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);


INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES
    ("Paper Towel Holder", "Home", 24.50, 100);

INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("USB to Micro-USB Cable", "Devices", 24.50, 50);

INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("HP Printer Paper", "Office Products", 17.99, 100);

INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("Microfiber Dish Drying Mat", "Home", 5.99, 150);

INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("Vitamin C Serum ", "Beauty", 15.92, 200);

INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("Digtal Bathroom Scale", "Health", 20.96, 49);

INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("Smoke Detector", "Home Improvement", 74.51, 10);


INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("Wireless Headphones", "Electronics", 119.00, 100);


INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("Screen Protector", "Cell Phones & Accessories", 10.99, 300);


INSERT INTO products
    (product_name,department_name, price, stock_quantity)
VALUES("Beanie Headband", "Clothing,Shoes & Jewelry", 2.63, 30);