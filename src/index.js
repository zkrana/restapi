const express = require("express");
const app = express();

const ConnectDb = require("../config/ConnectDb");

const dotenv = require("dotenv");
const authRouter = require("../routes/auth/authRouter");
const userRouter = require("../routes/userRouter");

dotenv.config();

// Call Json
app.use(express.json());

//Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
  ConnectDb();
});
