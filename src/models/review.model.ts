import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String },
    firstDate: { type: String, required: true },
    reviewDays: { type: [Number], default: [] },
    createdAt: { type: Date, required: true, default: Date.now },
    deletedAt: { type: Date },
  },
  { versionKey: false }
)

const Review = mongoose.model("Review", schema, "Reviews")

export default Review
