const express = require("express");

const { home, register } = require("../controllers/userControllers.js");

const router = express();

router.get("/", home);
router.post("/register", register);

module.exports = router;
