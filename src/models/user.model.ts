import mongoose from "mongoose"

const schema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	created_at: { type: Date, default: new Date() },
})
const User = mongoose.model("User", schema, "users")

export default User
