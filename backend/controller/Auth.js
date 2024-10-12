const { User } = require("../models");
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      res.code = 400;
      throw new Error("Email already exist");
    }

    if (!name) {
      res.code = 400;
      throw new Error("Name is required");
    }

    if (!email) {
      res.code = 400;
      throw new Error("Email is required");
    }

    if (!password) {
      res.code = 400;
      throw new Error("Password is required");
    }

    if (password.length < 6) {
      res.code = 400;
      throw new Error("Password should be 6 char long");
    }

    const newUser = new User({ name, email, password });

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
      res.code = 400;
      throw new Error("Email is required");
    }

    if (!password) {
      res.code = 400;
      throw new Error("Password is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.code = 401;
        throw new Error("Invalid credentials");
    }

    if(user.password != password){
        res.code = 401;
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    },
    jwtSecret,
    {
        expiresIn: "7d",
    }
);

res.status(200).json({
        code: 200,
        status: true,
        message: "User signin successfully",
        data: { token },
      });





  } catch (error) {
    next();
  }
};

module.exports = { signup };
