import { IUserCreate } from "../../interfaces/user"
import bcrypt from "bcrypt"
import User from "../../models/user.model"
import { Console } from "console"
import { AppError } from "../../errors/AppError"

const createUserService = async ({ name, password, email }: IUserCreate) => {
  console.log(name)
  if (!name) throw new AppError(400, "Invalid name")
  if (!email) throw new AppError(400, "Invalid email")
  if (!password) throw new AppError(400, "Invalid password")
  email = email.toLowerCase()
  const passwordHash = bcrypt.hash(password, 10)
  const newUser = new User({ name, email, password: await passwordHash })
  const result: any = {}
  result.id = newUser._id.toString()
  result.name = newUser.name
  result.email = newUser.email
  newUser.save()
  return result
}
export default createUserService
