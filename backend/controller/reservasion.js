const {Reservasion} = require("../models");

const addReservasion = async (req, res, next) => {
  try {
    const { registerNumber, username, date, time, location, mileage, message } =
      req.body;


    //validate the time to check that time resrved or not
    //take the user name from the token

    // if (!registerNumber) {
    //   res.code = 400;
    //   throw new Error("Register Number is required");
    // }
    // if (!username) {
    //   res.code = 400;
    //   throw new Error("Useraname is required");
    // }
    // if (!date) {
    //   res.code = 400;
    //   throw new Error("Date is required");
    // }
    // if (!time) {
    //   res.code = 400;
    //   throw new Error("Time is required");
    // }
    // if (!location) {
    //   res.code = 400;
    //   throw new Error("Location is required");
    // }
    // if (!mileage) {
    //   res.code = 400;
    //   throw new Error("Mileage is required");
    // }
    // if (!message) {
    //   res.code = 400;
    //   throw new Error("Message is required");
    // }

    if (!registerNumber) {
      return res.status(400).json({ status: false, message: "Register Number is required" });
    }
    if (!username) {
      return res.status(400).json({ status: false, message: "Username is required" });
    }
    if (!date) {
      return res.status(400).json({ status: false, message: "Date is required" });
    }
    if (!time) {
      return res.status(400).json({ status: false, message: "Time is required" });
    }
    if (!location) {
      return res.status(400).json({ status: false, message: "Location is required" });
    }
    if (!mileage) {
      return res.status(400).json({ status: false, message: "Mileage is required" });
    }
    if (!message) {
      return res.status(400).json({ status: false, message: "Message is required" });
    }

    const newReservasion = new Reservasion({
      registerNumber,
      username,
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

module.exports = { addReservasion };
