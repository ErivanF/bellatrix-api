import Review from "../../models/review.model";

const fetchReviewService = async (userId: string) => {
  const response = await Review.find({ userId: userId, deletedAt: null });
  return response;
};

export default fetchReviewService;
