import { sign } from "jsonwebtoken"
import { NotFoundError } from "../../errors"
import User from "../../models/user.model"
const message = "Incorrect email or password"
const userLoginService = async (email: string, password: string) => {
  const user = await User.findOne({ email: email })
  if (!user) {
    throw new NotFoundError(message)
  }
  return user.email
}

export default userLoginService
