import { ObjectId } from "mongodb";
import { NotFoundError, UnauthorizedError } from "../../errors";
import Review from "../../models/review.model";

const editReviewService = async (id: string, body: any) => {
  const objId = new ObjectId(id);
  const review = await Review.findById(objId);
  if (!review) {
    throw new NotFoundError("Review not found");
  }
  if (body.userId !== review.userId) {
    throw new UnauthorizedError("This review does not belong to this user");
  }
  if (body.title) {
    review.title = body.title;
  }
  if (body.text) {
    review.text = body.text;
  }
  if (body.firstDate) {
    review.firstDate = body.firstDate;
  }
  if (body.reviewDays) {
    review.reviewDays = body.reviewDays;
  }
  if (body.reviewTimes) {
    review.reviewTimes = Number(body.reviewTimes);
  }
  return await review.save();
};
export default editReviewService;
