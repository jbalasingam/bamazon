create database Bamazon;

use Bamazon;

create table products (
    item_id int primary key auto_increment,
    product_name varchar(50) not null,
    department_name varchar(255),
    price float not null,
	stock_quantity int default 0
)

insert into inventory (product_name, department_name, price, stock_quantity) values 
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