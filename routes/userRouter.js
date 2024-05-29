const { getAlluser } = require("../controller/userController");
const { AuthMiddleware } = require("../middleware");
const userRouter = require("express").Router();

userRouter.get("/", AuthMiddleware, getAlluser);

module.exports = userRouter;
