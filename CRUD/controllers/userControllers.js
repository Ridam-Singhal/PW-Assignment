const User = require("../models/userModel.js");

exports.home = (req, res) => {
  res.send("Hello World ! Controllers");
};

exports.createUser = async (req, res) => {
  // extract info
  try {
    // request parameter comes with so many values in it
    const { name, email, gender, DOB } = req.body;

    if (!name || !email) {
      throw new Error("Name and Email are required");
    }

    if (!gender) throw new Error("gender is required");

    if (!DOB) throw new Error("DOB is required");

    const userexists = await User.findOne({ email: email });

    if (userexists) {
      throw new Error("User already exists");
    }

    // check @

    const user = await User.create({
      name,
      email,
      gender,
      DOB,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    // users array length is zero check

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
