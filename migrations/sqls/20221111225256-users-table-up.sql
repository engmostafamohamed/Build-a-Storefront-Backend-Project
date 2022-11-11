/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-oosp";
CREATE TABLE users(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY ,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL);