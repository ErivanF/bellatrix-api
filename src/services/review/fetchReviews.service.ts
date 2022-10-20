import console from "console"
import { IReview } from "../../interfaces/review"
import Review from "../../models/review.model"

const fetchReviewService = async (userId: string) => {
  const response = await Review.find({ userId: userId })
  console.log(response)
  return response
}

export default fetchReviewService
