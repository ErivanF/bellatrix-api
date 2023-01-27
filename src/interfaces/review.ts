import { Types } from "mongoose";

export interface IReviewCreate {
  userId: string;
  title: string;
  text?: string;
  firstDate: string;
  reviewDays: [number];
  reviewTimes?: number;
}
export interface IReview extends IReviewCreate {
  _id: Types.ObjectId;
  reviewTimes: number;
  createdAt: Date;
  deletedAt?: Date | null;
}
