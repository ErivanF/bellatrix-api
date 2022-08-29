import { Router } from "express"
import userCreateController from "../controllers/user/userCreate.controller"

const routes = Router()

export const userRoutes = () => {
  routes.post("", userCreateController)
  return routes
}
