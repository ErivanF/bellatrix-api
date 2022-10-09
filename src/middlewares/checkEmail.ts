import { Request, Response, NextFunction } from "express"
import { ConflictError } from "../errors/HTTPError"
import checkEmailService from "../services/user/checkEmail.service"
const checkEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email
    if (!email) {
      return next()
    }
    if (await checkEmailService(email)) {
      throw new ConflictError("Invalid email")
    }
    return next()
  } catch (err) {
    return next(err)
  }
}

export default checkEmailMiddleware
