import { Types } from "mongoose"

export interface IReviewCreate {
  userId: string
  title: string
  text: string
  firstDate: string
  reviewDays: [number]
}
export interface IReview extends IReviewCreate {
  _id: Types.ObjectId
  createdAt: Date
  deletedAt?: Date
}
