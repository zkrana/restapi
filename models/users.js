const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    profile: {
      type: String,
      default: "avatar.png",
    },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("User", userSchema);
module.exports = users;
