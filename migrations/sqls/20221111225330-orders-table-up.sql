/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE orders(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY ,
    quantity integer NOT NULL,
    users_id uuid,
    FOREIGN KEY (users_id) REFERENCES users(id),
    status VARCHAR(64) NOT NULL);