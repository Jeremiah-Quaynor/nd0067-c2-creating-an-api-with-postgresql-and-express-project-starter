
const Pool  = require('pg').Pool
const dotenv = require('dotenv')

dotenv.config()

const {
    POSTGRES_USER,
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
    ENV

} = process.env

let Client:any



if(ENV === "test" ){
    Client = new Pool ({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: POSTGRES_PORT
    })
}

if(ENV === "dev") {
    Client = new Pool ({
        host: "localhost",
        database: "bootstore",
        user: "postgres",
        password: "test",
        port: 5432
    })
}

export default Client