const express = require("express");
const router = express.Router();
const {reservasionController} = require("../controller");


router.post("/addReservasion", reservasionController.addReservasion);
router.delete("/deleteReservasion/:registerNumber", reservasionController.deleteReservasion);
router.get("/getReservasions",reservasionController.getReservasions);

module.exports = router;