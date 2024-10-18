const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const {authRoute, reservasionRoute,} = require("./routers");



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/reservasion",reservasionRoute);

const connectMongoDB = require('./init/mongoDB');

connectMongoDB();

module.exports = app;