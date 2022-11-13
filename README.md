Overview
Build a Storefront Backend Project.This project depends on create
-migration for users,products,orders and orders_products schema
Required Technologies
-model for users,products,orders tables and create crud system for all tables
-controller for all models
-route in index and api contain user,orders,product api

Setup Database
db-migrate create users-table --sql-file
db-migrate create orders-table --sql-file
db-migrate create products-table --sql-file
db-migrate create orders_products-table --sql-file

my Enviroment Variable
PORT=3000
NODE_ENV=dev

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=project
POSTGRES_DB_TEST=project_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=hr
BCRYPT_PASSWORD=udacity-project
SALT_ROUNDS=10
TOKEN_SECRET=your-secret-token

API FORMATER
-Users
-for create user and get all user
http://localhost:3000/api/user

-for update,delete user and get one user
http://localhost:3000/api/user/:id

-Orders
-for create order and get all orders
http://localhost:3000/api/orders

-for update,delete order and get one order
http://localhost:3000/api/orders/:id

-Products
-for create product and get all products
http://localhost:3000/api/products

-for update,delete product and get one product
http://localhost:3000/api/products/:id

Tools
-Express
-Typescript
-Jasmine For testing

how to run server(nodemon)
-npm run dev
how to run server(watch)
-npm run watch
how to test by jasmine
-npm run test
how to run prettier
-npm run format
how to create all tables in database
-db-migrate up
how to Drop all tables in database
-db-migrate down
