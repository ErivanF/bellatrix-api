import { IUserCreate } from "../../innterfaces/user"
import bcrypt from "bcrypt"
import User from "../../models/user.model"
import { Console } from "console"

const createUserService = async ({ name, password, email }: IUserCreate) => {
	const passwordHash = bcrypt.hash(password, 10)
	try {
		const newUser = new User({ name, email, password: await passwordHash })
		console.log(newUser._id)
		return newUser
	} catch (err) {
		return err
	}
}
export default createUserService
