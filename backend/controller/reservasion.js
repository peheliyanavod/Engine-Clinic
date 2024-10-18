const { Reservasion } = require("../models");

const addReservasion = async (req, res, next) => {
  try {
    const { vehicle_no, date, time, location, mileage, message } =
      req.body;

    //validate the time to check that time resrved or not
    //take the user name from the token

    if (!vehicle_no) {
      return res
        .status(400)
        .json({ status: false, message: "Vehicle Number is required" });
    }
    // if (!username) {
    //   return res
    //     .status(400)
    //     .json({ status: false, message: "Username is required" });
    // }
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
    // if (!message) {
    //   return res
    //     .status(400)
    //     .json({ status: false, message: "Message is required" });
    // }

    const newReservasion = new Reservasion({
      registerNumber,
      // username,
      date,
      time,
      location,
      mileage,
      message,
    });

    await newReservasion.save();

    res.status(203).json({
      code: 201,
      status: true,
      message: "Reservasion added successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteReservasion = async (req, res, next) => {
  try {
    const { registerNumber } = req.params;

    const reservasion = await Reservasion.findOne({ registerNumber });

    if (!reservasion) {
      return res.status(404).json({ status: false, message: "Reservation not found" });
    }

    await Reservasion.findOneAndDelete({ registerNumber });

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

      
    const reservasions = await Reservasion.find({});
    res.json({status: "OK",data: reservasions});
      
      

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
