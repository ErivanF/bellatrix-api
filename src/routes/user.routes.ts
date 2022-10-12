import { Router } from "express"
import userCreateController from "../controllers/user/userCreate.controller"
import userLoginController from "../controllers/user/userLogin.controller"
import userProfileController from "../controllers/user/userProfile.controller"
import checkAuthMiddleware from "../middlewares/checkAuth.middleware"
import checkEmailMiddleware from "../middlewares/checkEmail"

const routes = Router()

export const userRoutes = () => {
  routes.get("", checkAuthMiddleware, userProfileController)
  routes.post("", checkEmailMiddleware, userCreateController)
  routes.post("/login", userLoginController)
  return routes
}
