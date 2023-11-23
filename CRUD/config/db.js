const mongoose = require("mongoose");

const connectToDb = async (req, res) => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((conn) => {
      console.log(`Connected to Database ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDb;
