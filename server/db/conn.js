const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;