import { IReview } from "../../interfaces/review"
import Review from "../../models/review.model"

const fetchReviewService = async (userId: string) => {
  const response = await Review.find({ userId: userId })

  return response
}

export default fetchReviewService
