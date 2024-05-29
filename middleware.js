const User = require("./models/users");
const jwt = require("jsonwebtoken");

exports.AuthMiddleware = async (req, res, next) => {
  try {
    const bearertoken = req.headers.authorization;
    if (!bearertoken) {
      return res.status(401).json({
        message: "Access not allowed.",
      });
    }

    const validToken = bearertoken.split(" ")[1];

    const jwtDecode = jwt.verify(validToken, process.env.PRIVATE_KEY);
    const id = jwtDecode.id;
    const user = await User.findById(id);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Something went wrong in authentication.",
      error,
    });
  }
};
