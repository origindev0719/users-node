require("dotenv").config();
const mongoose = require("mongoose");

const dbConfig = () => {
  mongoose
    .connect(process.env.dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("  MongoDB is connected successfully.", process.env.dbURL);
    })
    .catch((err: any) => {
      console.error(
        "  MongoDB connection error. Please make sure MongoDB is running. " +
          err
      );
      process.exit();
    });
};

export default dbConfig;
