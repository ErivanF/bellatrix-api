import { Router } from "express"
import createReview from "../controllers/review/createReview.controller"
import fetchReviews from "../controllers/review/fetchReviews.controller"
import checkAuthMiddleware from "../middlewares/checkAuth.middleware"

const routes = Router()

const reviewRoutes = () => {
  routes.get("", checkAuthMiddleware, fetchReviews)
  routes.post("", checkAuthMiddleware, createReview)
  return routes
}

export default reviewRoutes
