import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import { UnauthorizedError } from "../errors"
import { IToken } from "../interfaces/token"
import findUserService from "../services/user/findUser.service"
const checkAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1]
    if (!token) {
      throw new UnauthorizedError("Missing token")
    }
    const payload = verify(token, process.env.JWT_SECRET || "") as IToken
    const user = findUserService(payload.email)
    req.user = await user
    return next()
  } catch (err) {
    return next(err)
  }
  return next()
}

export default checkAuthMiddleware
