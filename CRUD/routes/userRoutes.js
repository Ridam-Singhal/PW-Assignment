const express = require("express");

const {
  home,
  register,
  login,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers.js");

const router = express();

router.get("/", home);
router.post("/register", register);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);

module.exports = router;
