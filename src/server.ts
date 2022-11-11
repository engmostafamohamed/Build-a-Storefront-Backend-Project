import express, { Request, Response } from "express"
import morgan from 'morgan';
import helmet from 'helmet';
import config from "./config";
// import db from "./database"
const PORT = config.port || 3000
const app: express.Application = express()
// console.log(config);
// http login middleware
app.use(morgan('common'));
//http security middleware
app.use(helmet());
// middleware to parse request
app.use(express.json());
// start express server
app.listen(PORT, () => {
    console.log(`Server is starting at :${PORT}`)
})
//test database

// db.connect().then((client) => {
//     return client.query("SELECT now()").then((res) => {
//         client.release();
//         console.log(res.rows)
//     }).catch((error) => {
//         client.release();
//         console.log(error.stack);
//     })
// })
// add routing for / path
app.get("/", function (req: Request, res: Response) {
    console.log(req.body);
    res.send("this is the ____ route")
})
export default app