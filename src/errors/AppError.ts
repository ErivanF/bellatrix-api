import { Response } from "express"
export class AppError extends Error {
  statusCode: number
  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}
export const handleError = (error: any | AppError, res: Response) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ status: "Error", message: error.message })
  }
  console.log(error)
  return res.status(500).json({ Teste: "Teste" })
}
