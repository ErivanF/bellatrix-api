import { Request, Response } from "express"
import { handleError } from "../../errors/AppError"
import { IUserCreate } from "../../interfaces/user"
import createUserService from "../../services/user/userCreate.service"

const userCreateController = async (req: Request, res: Response) => {
  try {
    const user = req.body as IUserCreate
    const dbUser = await createUserService(user)
    return res.status(201).send(dbUser)
  } catch (err) {
    handleError(err, res)
  }
}

export default userCreateController
