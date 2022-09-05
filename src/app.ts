import express from "express"
import appRoutes from "./routes"
import "dotenv/config"
import mongoose from "mongoose"
import { errorHandler } from "./error/AppError"
const app = express()
const port = parseInt(process.env.NODE_PORT || "5000")

app.use(express.json())
app.use(errorHandler)
appRoutes(app)
app.listen(port)
try {
  const DBURI = process.env.MONGODB_URI as string
  mongoose.connect(DBURI)
} catch (error) {
  console.log("Deu ruim")
  console.log(error)
}

console.log(`Running on port ${port}`)
