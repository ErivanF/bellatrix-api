import { NextFunction, Request, Response } from "express"

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = req.body
    return res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

export default createReview
