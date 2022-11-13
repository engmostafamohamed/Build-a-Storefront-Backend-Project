API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products

API Endpoints
Products
Index [token required]
Show [token required]
Create [token required]
update [token required]
delete [token required]
Users
Index [token required]
Show [token required]
Create
Update [token required]
Delete [token required]
Orders
Index [token required]
Show [token required]
Create [token required]
Update [token required]
Delete [token required]
Add Product [token required]
[OPTIONAL] Completed Orders by user (args: user id)[token required]
Data Shapes
products
id
name
price
[OPTIONAL] category
users
id
firstName
lastName
password
orders
id
id of each product in the order
quantity of each product in the order
user_id
status of order (active or complete)
orders_products
user_id
product_id
