const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
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
      required: true,
      select: false,
      minlength: 6,
    },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("users", UserSchema);
modules.exports = User;
