import { IUserCreate } from "../../interfaces/user"
import bcrypt from "bcrypt"
import User from "../../models/user.model"
import { Console } from "console"

const createUserService = async ({ name, password, email }: IUserCreate) => {
  const passwordHash = bcrypt.hash(password, 10)
  try {
    const newUser = new User({ name, email, password: await passwordHash })
    const result: any = {}
    result.id = newUser._id.toString()
    result.name = newUser.name
    result.email = newUser.email
    newUser.save()
    return result
  } catch (err) {
    return err
  }
}
export default createUserService
