import { IUser } from "../../src/interfaces/user"
import * as express from "express"

declare global {
  namespace Express {
    interface Request {
      user: IUser
    }
  }
}
