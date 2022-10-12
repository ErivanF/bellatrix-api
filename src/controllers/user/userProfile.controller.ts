import { NextFunction, Request, Response } from "express"
const userProfileController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json("OK")
}
export default userProfileController
