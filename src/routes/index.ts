import { Express } from "express"
import reviewRoutes from "./review.routes"
import userRoutes from "./user.routes"
const appRoutes = (app: Express) => {
  app.use("/user", userRoutes())
  app.use("/review", reviewRoutes())
}
export default appRoutes
