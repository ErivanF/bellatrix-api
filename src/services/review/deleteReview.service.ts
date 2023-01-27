import { ObjectId } from "mongodb";
import Review from "../../models/review.model";

const deleteReviewService = async (id: string) => {
  const objId = new ObjectId(id);
  const result = await Review.deleteOne({ _id: objId });
  return Boolean(result.deletedCount);
};

export default deleteReviewService;
