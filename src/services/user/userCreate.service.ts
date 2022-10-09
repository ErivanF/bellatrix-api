import { IUserCreate } from "../../interfaces/user"
import bcrypt from "bcrypt"
import User from "../../models/user.model"
import { BadRequestError } from "../../errors/HTTPError"

const createUserService = async ({ name, password, email }: IUserCreate) => {
  if (!name) throw new BadRequestError("Invalid name")
  if (!email) throw new BadRequestError("Invalid email")
  if (!password) throw new BadRequestError("Invalid password")
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
