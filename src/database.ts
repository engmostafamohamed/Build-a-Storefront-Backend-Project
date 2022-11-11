import config from "./config";
import { Pool } from 'pg';

const client = new Pool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: parseInt(config.dbport as string, 10),
})
client.on('error', (error: Error) => {
    console.error(`Error: ${error.message}`)
})
export default client;