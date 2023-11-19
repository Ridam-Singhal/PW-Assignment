const User = require("../models/userModel.js");

exports.home = (req, res) => {
  res.send("Hello World using controllers");
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email) throw new Error("name and email is required");

    if (!password || password < 8) {
      throw new Error(
        "password is required and it should not be less than 8 characters"
      );
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("User already exists");
    }

    if (email.includes("@")) {
      const user = await User.create({
        name,
        email,
        password,
      });
    } else {
      throw new Error("@ is required");
    }

    res.status(200).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await User.findOne({ email });

    if (!userData) {
      res.status(401).json({
        message: "No account associated with this email",
      });
    }

    if (!(userData.password == password)) {
      res.status(401).json({
        message: "Password is wrong",
      });
    }
    res.status(200).json({
      message: "User login successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error.message,
    });
  }
};
