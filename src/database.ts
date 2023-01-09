import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_TEST_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  ENV,
} = process.env;

let Client: Pool| any;

if(ENV === 'test' ){
    Client = new Pool ({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: Number(POSTGRES_PORT)
    })
}

if (ENV === 'dev') {
  Client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT)
  });
}
export default Client;
