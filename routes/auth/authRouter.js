const {
  signUp,
  signIn,
} = require("../../controller/authController/authControl");

const authRouter = require("express").Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);

module.exports = authRouter;
