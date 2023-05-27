const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please enter all required fields",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "User already exist, Please Login !",
      });
    }
    const user = await User.create({ name, email, password });
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in the registration process",
      err: error,
    });
  }
};
