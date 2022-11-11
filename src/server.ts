import express, { Request, Response } from "express"
const port = 3000
const app: express.Application = express()
// start express server
app.listen(port, () => {
    console.log(`Server is starting at :${port}`)
})
// add routing for / path
app.get("/", function (req: Request, res: Response) {
    res.send("this is the ____ route")
})
export default app