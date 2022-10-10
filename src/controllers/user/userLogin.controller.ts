import { NextFunction, Request, Response } from "express"
import { BadRequestError } from "../../errors"
import userLoginService from "../../services/user/userLogin.service"
const userLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new BadRequestError("Missing email or password")
    }
    const email = String(req.body.email)
    const password = String(req.body.password)
    const token = await userLoginService(email, password)
    return res.json(token)
  } catch (err) {
    return next(err)
  }
}
export default userLoginController
