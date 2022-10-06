import { NextFunction, Request, Response } from "express"
import { IUserCreate } from "../../interfaces/user"
import createUserService from "../../services/user/userCreate.service"

const userCreateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body as IUserCreate
    const dbUser = await createUserService(user)
    return res.status(201).send(dbUser)
  } catch (err) {
    next(err)
  }
}

export default userCreateController
