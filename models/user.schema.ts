import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, default: "patient" },
    photo: { type: String, default: "/default-avatar.png" },
    gender: { type: String, enum: ["male", "female"], required: true },
    bloodType: { type: String, default: "unknown" },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
