import { Request, Response } from "express"
import fetchReviewService from "../../services/review/fetchReviews.service"
const fetchReview = (req: Request, res: Response) => {
  const userId = String(req.user._id)
  return res.json(fetchReviewService(userId))
}
export default fetchReview
