import { IReviewCreate } from "../../interfaces/review"
import Review from "../../models/review.model"

const createReviewService = (data: IReviewCreate) => {
  const newReview = new Review({ ...data })

  newReview.save()
  return newReview
}

export default createReviewService
