import { Types } from "mongoose"

export interface IUserCreate {
  name: string
  email: string
  password: string
}
export interface IUser extends IUserCreate {
  _id: Types.ObjectId
}
