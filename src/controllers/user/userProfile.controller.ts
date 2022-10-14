import { NextFunction, Request, Response } from "express"
const userProfileController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json(req.user)
}
export default userProfileController
