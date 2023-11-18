const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    maxLength: [25, "name should be less than 25 characters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "password should not be less than 8 characters"],
  },
});

module.exports = mongoose.model("User", userSchema);
