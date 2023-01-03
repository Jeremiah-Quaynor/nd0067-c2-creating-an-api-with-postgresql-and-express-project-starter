/* Replace with your SQL commands */
CREATE TABLE Product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price integer NOT NULL,
    category VARCHAR(40)
);

CREATE TABLE User(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password text NOT NULL
);

CREATE TABLE Orders(
    id SERIAL PRIMARY KEY,
    CONSTRAINT 
)