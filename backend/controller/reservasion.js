const { Reservasion } = require("../models");

const addReservasion = async (req, res, next) => {
  try {
    const { vehicle_no, date, time, location, mileage, message, username } = req.body;


    if (!vehicle_no) {
      return res
        .status(400)
        .json({ status: false, message: "Vehicle Number is required" });
    }

    if (!username) {
      return res
        .status(400)
        .json({ status: false, message: "Username is required" });
    }

    if (!date) {
      return res
        .status(400)
        .json({ status: false, message: "Date is required" });
    }

    if (!time) {
      return res
        .status(400)
        .json({ status: false, message: "Time is required" });
    }

    if (!location) {
      return res
        .status(400)
        .json({ status: false, message: "Location is required" });
    }

    if (!mileage) {
      return res
        .status(400)
        .json({ status: false, message: "Mileage is required" });
    }

    const newReservasion = new Reservasion({
      vehicle_no,
      username, // Use the username from the token
      date,
      time,
      location,
      mileage,
      message,
    });

    await newReservasion.save();

    res.status(201).json({
      status: true,
      message: "Reservation added successfully",
    });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      status: false,
      message: "An error occurred while adding the reservation",
      error: error.message,
    });
  }
};


const deleteReservasion = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservasion = await Reservasion.findById(id); // Use findById for MongoDB _id

    if (!reservasion) {
      return res.status(404).json({ status: false, message: "Reservation not found" });
    }

    await Reservasion.findByIdAndDelete(id); // Use findByIdAndDelete for MongoDB _id

    res.status(200).json({
      status: true,
      message: "Reservation deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};




const getReservasions = async (req, res, next) => {
  try {
    const { username } = req.params;
    
    // Fetch reservations where the username matches the provided one
    const reservasions = await Reservasion.find({ username: username });

    if (!reservasions.length) {
      return res.status(404).json({ status: "No reservations found for this user" });
    }

    res.json({ status: "OK", data: reservasions });
  } catch (error) {
    next(error);
  }
};


const getSingleReservasion = async (req, res, next) => {
  try {
      const {registerNumber} = req.params;
      const reservasion = await Reservasion.findOne({registerNumber});
      if(!reservasion){
          res.code = 404;
          throw new Error("Reservasion not found");
      }

      res.status(200).json({code: 200, status: true, message: "Get Rservasion details successfully", data: {reservasion}});
  } catch (error) {
      next(error);
  }
}





module.exports = { addReservasion, deleteReservasion, getReservasions, getSingleReservasion };
