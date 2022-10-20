import { NextFunction, Request, Response } from "express"
import { BadRequestError } from "../../errors"

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req
    if (!body.title) {
      throw new BadRequestError("Missing title")
    }
    if (
      !body.firstDate.match(
        /^\d{4}(\/)(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])$/
      )
    ) {
      throw new BadRequestError("Date must be in the yyyy/mm/dd format")
    }
    if (!Array.isArray(body.reviewDays)) {
      if (body.reviewDays.some((i: any) => typeof i !== "number")) {
        throw new BadRequestError("reviewDays must be an array of numbers")
      }
    }
    return res.status(201).json(body)
  } catch (err) {
    next(err)
  }
}

export default createReview
