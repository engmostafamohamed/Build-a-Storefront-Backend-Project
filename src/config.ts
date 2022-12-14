import dotenv from "dotenv"
dotenv.config()
const {
    NODE_ENV,
    PORT,
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PORT,
    POSTGRES_PASSWORD,
    BCRYPT_PASSWORD,
    SALT_ROUNDS,
    TOKEN_SECRET
} = process.env
export default {
    port: PORT,
    host: POSTGRES_HOST,
    dbport: POSTGRES_PORT,
    database: NODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DB_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    papper: BCRYPT_PASSWORD,
    salt: SALT_ROUNDS,
    tokenSecret: TOKEN_SECRET,
}