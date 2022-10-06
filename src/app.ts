import express from "express"
import appRoutes from "./routes"
import "dotenv/config"
import mongoose from "mongoose"
import { errorHandler } from "./errors/AppError"
const app = express()
const port = parseInt(process.env.NODE_PORT || "5000")
try {
  const DBURI = process.env.MONGODB_URI as string
  mongoose.connect(DBURI)
} catch (error) {
  console.log("Deu ruim")
  console.log(error)
}
app.use(express.json())
appRoutes(app)
app.use(errorHandler)
app.listen(port)

console.log(`Running on port ${port}`)
