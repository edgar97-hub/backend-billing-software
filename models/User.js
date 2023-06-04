import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: false,
    },
    userType: {
      type: String,
      enum: ["user", "administrator"],
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: false,
      default: "",
    },
  },
  {
    timestamps: {},
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
