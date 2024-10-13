const { User } = require("../models");
const jwt = require("jsonwebtoken");
const jwtSecret = "ifhoie iuieb ieheoiu";

const signup = async (req, res, next) => {
  try {
    const { name, username, email, password, contact, country } = req.body;
    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      return res.status(400).json({ message: "Email is Exist" });
    }

    if (!name) {
      return res.status(400).json({ message: "Name is required" });

    }

    if (!username) {
      return res.status(400).json({ message: "Username is required" });

    }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });

    }

    if (!contact) {
      return res.status(400).json({ message: "Contact is required" });

    }

    if (!country) {
      return res.status(400).json({ message: "Country is required" });

    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });

    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password minimum length is 6 " });

    }

    const newUser = new User({ name, username, email, contact, country, password });

    await newUser.save();

    res.status(203).json({
      code: 201,
      status: true,
      message: "User registerd successfully",
    });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.password != password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      jwtSecret,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      code: 200,
      status: true,
      message: "User login successfully",
      data: { token },
    });
  } catch (error) {
    next(error);
  }
};


module.exports = { signup, signin };
