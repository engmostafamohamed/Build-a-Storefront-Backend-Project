/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE orders_products(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    orders_id uuid,
    products_id uuid,
    FOREIGN KEY (orders_id) REFERENCES orders(id),
    FOREIGN KEY (products_id) REFERENCES products(id)

);