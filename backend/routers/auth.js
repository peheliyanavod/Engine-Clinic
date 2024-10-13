const express = require("express");
const router = express.Router();
const {authController} = require("../controller");


router.post("/signup", authController.signup);
router.post("/login", authController.signin);

module.exports = router;