import { Request, Response, NextFunction } from "express"
export class AppError extends Error {
  statusCode: number
  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}
export const errorHandler = (
  error: any | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ status: "Error", message: error.message })
  }
  console.log(error)
  return res
    .status(500)
    .json({ status: "Error", message: "Inernal server error" })
}
