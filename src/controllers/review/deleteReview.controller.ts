import { NextFunction, Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../../errors";
import deleteReviewService from "../../services/review/deleteReview.service";

const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const sucess = await deleteReviewService(id);
    if (sucess) {
      return res.status(204).send();
    } else {
      throw new BadRequestError("Review not found");
    }
  } catch (err) {
    next(err);
  }
};

export default deleteReview;
