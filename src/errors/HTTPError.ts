import { AppError } from "./AppError"

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(400, message)
  }
}
export class ConflictError extends AppError {
  constructor(message: string) {
    super(409, message)
  }
}
