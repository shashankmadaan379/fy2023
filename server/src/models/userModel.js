const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

// hashed password
UserSchema.pre("save", async function (next) {
  if (!this.isModified(password)) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});

//match password
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const User = mongoose.model("users", UserSchema);
modules.exports = User;
