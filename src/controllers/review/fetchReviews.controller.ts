import { Request, Response } from "express"
import fetchReviewService from "../../services/review/fetchReviews.service"
const fetchReviews = async (req: Request, res: Response) => {
  const userId = String(req.user._id)
  return res.json(await fetchReviewService(userId))
}
export default fetchReviews
