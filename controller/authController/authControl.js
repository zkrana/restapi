const User = require("../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    const { name, username, email, password, profile } = req.body;
    const user = await User.create({
      name,
      username,
      email,
      password,
      profile,
    });
    res.status(201).json({
      message: `Hello! Mr. ${name} your account is successfully created.`,
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: "Something went wrong.",
      error,
    });
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        message: "Wrong Username!",
      });
    }

    // Validate the password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Password does not match!",
      });
    }

    // Generate a JWT token
    const jwtToken = jwt.sign(
      { username, _id: user._id },
      process.env.PRIVATE_KEY,
      { expiresIn: "2h" }
    );

    // Respond with the JWT token
    res.status(200).json({
      message: "Login Successful.",
      jwtToken,
    });
  } catch (error) {
    // Handle any errors during the login process
    res.status(500).json({
      message: "Something went wrong in login!",
      error: error.message,
    });
  }
};
