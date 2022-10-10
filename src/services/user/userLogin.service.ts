import { ForbiddenError } from "../../errors"
import User from "../../models/user.model"
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"
import { IUser } from "../../interfaces/user"
const message = "Incorrect email or password"
const userLoginService = async (email: string, password: string) => {
  const user = (await User.findOne({ email: email })) as IUser
  if (!user) {
    throw new ForbiddenError(message)
  }
  const isPassword = bcrypt.compare(password, user.password)
  if (!(await isPassword)) {
    throw new ForbiddenError(message)
  }
  const token = sign({ email }, process.env.JWT_SECRET || "", {
    expiresIn: "24h",
  })
  return { token }
}

export default userLoginService
