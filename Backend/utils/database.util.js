require("dotenv").config();
const mongoose = require("mongoose");

function mongooseConnection() {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to Database");
    }).catch((err) => {
      console.log(err);
    });
}

module.exports = { mongooseConnection };
