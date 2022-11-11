import express, { Request, Response } from "express"
import morgan from 'morgan';
import helmet from 'helmet';
const port = 3000
const app: express.Application = express()
// http login middleware
app.use(morgan('common'));
//http security middleware
app.use(helmet());
// middleware to parse request
app.use(express.json());
// start express server
app.listen(port, () => {
    console.log(`Server is starting at :${port}`)
})
// add routing for / path
app.get("/", function (req: Request, res: Response) {
    console.log(req.body);
    res.send("this is the ____ route")
})
export default app