const User = require("../models/users");

exports.getAlluser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({
      message: "Something wrong in users!",
      error,
    });
  }
};
