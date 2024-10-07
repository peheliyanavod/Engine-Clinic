const express = require('express');
const bodyParser = require("body-parser");


const connectMongoDB = require('./init/mongoDB');

connectMongoDB();

const app = express();

