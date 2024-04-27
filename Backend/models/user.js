const mongoose = require("mongoose");

// Schema for Users
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: { salt: String, hash: String },
  },
  {
    timestamps: true,
  },
);

// Model for Users
module.exports = mongoose.model("User", UserSchema, "users");