import { Router } from "express"
import fetchReview from "../controllers/review/fetchReview.controller"
import checkAuthMiddleware from "../middlewares/checkAuth.middleware"

const routes = Router()

const reviewRoutes = () => {
  routes.get("", checkAuthMiddleware, fetchReview)
  return routes
}

export default reviewRoutes
