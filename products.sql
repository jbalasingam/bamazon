-- create database Bamazon;
use bamazon;

CREATE TABLE IF NOT EXISTS products(
 id INT AUTO_INCREMENT PRIMARY KEY,
 product VARCHAR(30) NOT NULL,
 department VARCHAR(30) NOT NULL,
 price INT,
 stock FLOAT
 );
 
 insert into products(product, department, price, stock) values 
("Hat","Apparel",21.99,50),
("Vanilla Ice Cream","Groceries",6.98,100),
("Banana","Groceries",0.69,500),
("Shaving Cream","Cosmetic",5.99,37),
("Dining Table","Furniture",456.98,3),
("Lawn Mower","Garden",399.99,21),
("Television","Electronics",1299.99,9),
("Tylenol","Pharmacy",19.99,543),
("Gum","Groceries",0.99,43),
("Glasses","Optometry",399.99,50);