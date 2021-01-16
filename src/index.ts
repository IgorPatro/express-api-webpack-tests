import * as express from "express"
import { Request, Response } from "express"
import * as bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json())

// Routes
import catsRouter from "./routes/cats"
console.log(catsRouter)

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world",
  })
})

app.use("/cats", catsRouter)

const { PORT = 3000 } = process.env
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
  })
}

export default app;