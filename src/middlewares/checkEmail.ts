import { Request, Response, NextFunction } from "express"
const checkEmailMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return next
}

export default checkEmailMiddleware
