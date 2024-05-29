const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("DB Connected.");
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};

module.exports = connectDb;
