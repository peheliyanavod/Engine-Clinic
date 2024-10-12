const express = require("express");
const router = express.Router();
const {reservasionController} = require("../controller");


router.post("/addReservasion", reservasionController.addReservasion);
router.delete("/deleteReservasion/:registerNumber", reservasionController.deleteReservasion);

module.exports = router;