import app from "./app.js";
import mongoose from "mongoose";

const port = 3000;

// Database Connection
/*
Two Important Points of DB 

1. Database connection may fail
2. Database is in another continent
*/

// mongoose.connect("mongodb://127.0.0.1:27017/test");

/*
// Async IIFE
(async () => {
  try {
    // db conncetion
    await mongoose.connect(
      "mongodb+srv://new_db:<password>@cluster0.vxndbiq.mongodb.net/"
    );
    console.log("DB connected successfully");

    app.on("error", () => {
      console.log("ERROR ", err);
      throw err;
    });

    const onListen = () => {
      console.log(`Listening on port ${port}`);
    };

    app.listen(port, onListen);
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// trying to make db connection using Promises

(() => {
  new Promise((resolve, reject) => {
    mongoose.connection.on("connected", () => {
      resolve();
    });

    mongoose.connection.on("error", (err) => {
      reject(err);
    });

    mongoose.connect(
      "mongodb+srv://new_db:<password>@cluster0.vxndbiq.mongodb.net/"
    );
  })
    .then(() => {
      console.log("DB connection successful");

      app.on("error", () => {
        console.log("ERROR ", error);
        throw error;
      });

      const onListen = () => {
        console.log(`Listening on port ${port}`);
      };

      app.listen(port, onListen);
    })
    .catch((err) => {
      console.log("ERROR ", err);
      throw err;
    });
})();

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
