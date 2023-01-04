/* Replace with your SQL commands */
CREATE TABLE Product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price integer NOT NULL,
    category VARCHAR(40)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password text NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id integer REFERENCES product(id),
    quantity integer NOT NULL,
    user_id integer REFERENCES users(id),
    status VARCHAR(255) NOT NULL
);