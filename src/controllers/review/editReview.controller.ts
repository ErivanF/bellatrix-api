import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import editReviewService from "../../services/review/editReview.service";

const editReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = String(req.user._id);
    const reviewId = req.params.id;
    const body = req.body;
    body.userId = userId;
    if (body.firstDate) {
      if (
        !body.firstDate.match(
          /^\d{4}(\/)(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])$/
        )
      ) {
        throw new BadRequestError("Date must be in the yyyy/mm/dd format");
      }
    }
    if (body.reviewDays) {
      if (Array.isArray(body.reviewDays)) {
        if (body.reviewDays.some((i: any) => typeof i !== "number")) {
          throw new BadRequestError("reviewDays must be an array of numbers");
        }
      } else {
        throw new BadRequestError("reviewDays must be an array of numbers");
      }
    }
    return res.json(await editReviewService(reviewId, body));
  } catch (err) {
    next(err);
  }
};
export default editReview;
