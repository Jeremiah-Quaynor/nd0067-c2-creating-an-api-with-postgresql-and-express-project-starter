'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const pg_1 = require('pg');
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const {
  // POSTGRES_USER,
  // POSTGRES_HOST,
  // POSTGRES_DB,
  // POSTGRES_TEST_DB,
  // POSTGRES_PASSWORD,
  // POSTGRES_PORT,
  ENV,
} = process.env;
let Client;
// if(ENV === "test" ){
//     Client = new Pool ({
//         host: POSTGRES_HOST,
//         database: POSTGRES_DB,
//         user: POSTGRES_USER,
//         password: POSTGRES_PASSWORD,
//         port: POSTGRES_PORT
//     })
// }
if (ENV === 'test') {
  Client = new pg_1.Pool({
    host: 'localhost',
    database: 'bootstore_test',
    user: 'postgres',
    password: 'test',
    port: 5432,
  });
}
if (ENV === 'dev') {
  Client = new pg_1.Pool({
    host: 'localhost',
    database: 'bootstore',
    user: 'postgres',
    password: 'test',
    port: 5432,
  });
}
exports.default = Client;
