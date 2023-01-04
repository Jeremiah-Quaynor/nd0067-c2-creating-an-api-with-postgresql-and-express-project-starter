"use strict";
exports.__esModule = true;
var Pool = require('pg').Pool;
var dotenv = require('dotenv');
dotenv.config();
var _a = process.env, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_PORT = _a.POSTGRES_PORT, ENV = _a.ENV;
var Client;
if (ENV === "test") {
    Client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: POSTGRES_PORT
    });
}
if (ENV === "dev") {
    Client = new Pool({
        host: "localhost",
        database: "bootstore",
        user: "postgres",
        password: "test",
        port: 5432
    });
}
exports["default"] = Client;
