import * as express from "express"
import { Request, Response } from "express"

const catsRouter = express.Router()

catsRouter.get("/", (req: Request, res: Response) => {
  res.send("Cats home page")
})

export default catsRouter