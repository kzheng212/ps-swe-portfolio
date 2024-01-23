import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 8; // Ideally 10-12 is best corporate practices for salt_rounds (hashing strength at load time when hashing is generated)

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minLength: 3,
      maxLength: 20,
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
    age: {
      type: Number,
      min: 18,
      max: 200,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    department: {
      type: String,
      enum: ["IT", "UX", "DEV", "HR"],
    },
    // Demonstrated but not really implemented in class activity
    // Nice to know
    comments: [
      {
        user: String,
        text: String,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, retDoc) {
        delete retDoc.password; // removes password (even hashes) from the json doc that is return to the front end
        // Meaning the password is shown in mongodb
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
