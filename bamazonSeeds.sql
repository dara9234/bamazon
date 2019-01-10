DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES
    (3391, "Paper Towel Holder", "Home", 24.50, 100);

INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(3392, "USB to Micro-USB Cable", "Devices", 24.50, 50);

INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(3393, "HP Printer Paper", "Office Products", 17.99, 100);

INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(3395, "Microfiber Dish Drying Mat", "Home", 5.99, 150);

INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(3397, "Vitamin C Serum ", "Beauty", 15.92, 200);

INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(2296, "Digtal Bathroom Scale", "Health", 20.96, 49);

INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(2298, "Smoke Detector", "Home Improvement", 74.51, 10);


INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(2290, "Wireless Headphones", "Electronics", 119.00, 100);


INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(3320, "Screen Protector", "Cell Phones & Accessories", 10.99, 300);


INSERT INTO products
    (item_id,product_name,department_name, price, stock_quantity)
VALUES(3321, "Beanie Headband", "Clothing,Shoes & Jewelry", 2.63, 30);