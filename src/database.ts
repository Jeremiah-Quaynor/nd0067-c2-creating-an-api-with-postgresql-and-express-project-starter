import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  // POSTGRES_USER,
  // POSTGRES_HOST,
  // POSTGRES_DB,
  // POSTGRES_TEST_DB,
  // POSTGRES_PASSWORD,
  // POSTGRES_PORT,
  ENV,
} = process.env;

let Client: Pool| any;

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
  Client = new Pool({
    host: 'localhost',
    database: 'bootstore_test',
    user: 'postgres',
    password: 'test',
    port: 5432,
  });
}

if (ENV === 'dev') {
  Client = new Pool({
    host: 'localhost',
    database: 'bootstore',
    user: 'postgres',
    password: 'test',
    port: 5432,
  });
}

export default Client;
