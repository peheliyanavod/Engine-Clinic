const express = require("express");
const router = express.Router();
const {reservasionController} = require("../controller");


router.post("/addReservasion", reservasionController.addReservasion);
router.delete("/deleteReservasion/:id", reservasionController.deleteReservasion);
router.get("/getReservasions/:username",reservasionController.getReservasions);
// router.get("/getSingleReservasion/:registerNumber", reservasionController.getSingleReservasion);



module.exports = router;