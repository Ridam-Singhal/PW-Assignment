const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
    maxLength: [20, "Name must be less than 20 char"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  // Contributed by me
  gender: {
    type: String,
    required: [true, "gender is required"],
    enum: ["Male", "Female", "Other"],
  },
  DOB: {
    type: Date,
    required: [true, "DOB is required"],
  },
});

module.exports = mongoose.model("User", userSchema);
