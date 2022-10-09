import { Router } from "express"
import userCreateController from "../controllers/user/userCreate.controller"
import userLoginController from "../controllers/user/userLogin.controller"
import checkEmailMiddleware from "../middlewares/checkEmail"

const routes = Router()

export const userRoutes = () => {
  routes.post("", checkEmailMiddleware, userCreateController)
  routes.post("/login", userLoginController)
  return routes
}
