import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minLength: 5,
      maxLength: 20,
      match: /^[a-zA-Z0-9_-]+$/,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: 8,
      maxLength: 50,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    experimental: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, retDoc) {
        delete retDoc.password; 
        return retDoc;
      },
    },
  }
);

usersSchema.index({ email: 1 });
usersSchema.index({ username: 1 });

// Middleware for hashing the (modified & new) password before being sent to MongoDB
usersSchema.pre("save", async function (next) {
  // if the password has not changed continue
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

export default mongoose.model("User", usersSchema);
