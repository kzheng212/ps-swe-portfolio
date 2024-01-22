import mongoose from "mongoose";

// profileSchema will import usersSchema into user_id
// type: mongoose.Schema.ObjectId will be the about the same as the on based on the ref but with a few additional letter(s)
//  - Outer `_id` (Document ID):
//  - Inner `_id` (Nested within `user_id`):
// ref: refers to the Mongoose model named "User" as the referenced model and this establishes the relationship between `profile` model and the `User` model
const profileSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    bio: {
      type: String,
      minLength: 5,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    photo: {
      type: String,
    },
    notification: [{ noti_type: String, message: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
