import { Router } from "express"
import createReview from "../controllers/review/createReview.controller"
import editReview from "../controllers/review/editReview.controller"
import fetchReviews from "../controllers/review/fetchReviews.controller"
import checkAuthMiddleware from "../middlewares/checkAuth.middleware"

const routes = Router()

const reviewRoutes = () => {
  routes.get("", checkAuthMiddleware, fetchReviews)
  routes.post("", checkAuthMiddleware, createReview)
  routes.patch("/:id", checkAuthMiddleware, editReview)
  return routes
}

export default reviewRoutes
