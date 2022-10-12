import { IUser } from "../../src/interfaces/user"

declare global {
  declare namespace Express {
    interface Request {
      user: IUser
    }
  }
}
