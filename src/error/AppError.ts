import { Request, Response, NextFunction } from "express"
export class AppError extends Error {
  statusCode: number
  constructor(status: number, message: string) {
    super()
    this.statusCode = status
    this.message = message
  }
  handleError(res: Response) {
    return res.status(this.statusCode).json({
      status: "error",
      message: this.message,
    })
  }
}
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return err.handleError(res)
  }
  console.log(err)
  return res.status(500).json({ status: "error", message: "server Error" })
}
