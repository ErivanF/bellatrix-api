import { NotFoundError } from "../../errors"
import { IUser } from "../../interfaces/user"
import User from "../../models/user.model"

const findUserService = async (email: string): Promise<IUser> => {
  const user = await User.findOne({ email: email })
  if (!user) {
    throw new NotFoundError("Invalid email address")
  }
  return user
}
export default findUserService
