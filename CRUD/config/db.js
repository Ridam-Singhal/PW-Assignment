const mongoose = require("mongoose");

// Method 1

const connectToDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_DB);

    console.log("Database connected successfully");
    console.log(mongoose.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
    // throw error;
  }
};

// Method 2

const connectToDb2 = async (req, res) => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then((conn) => {
      console.log(`Connected to DB : ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

//  Method 3

const connectToDb3 = () => {
  new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_DB);

    mongoose.connection.on("connected", () => {
      resolve(mongoose.connection);
    });

    mongoose.connection.on("error", (error) => {
      reject(error);
    });
  })
    .then((conn) => {
      console.log(`Connected to Database using Promise: ${conn.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDb3;
