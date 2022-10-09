import User from "../../models/user.model"

const checkEmailService = async (email: string): Promise<boolean> => {
  const user = User.findOne({ email: email })
  return !!(await user)
}
export default checkEmailService
