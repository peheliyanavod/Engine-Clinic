const mongoose = require('mongoose');

const reservasionSchema = mongoose.Schema({
    registerNumber:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    location:{
        type: String,
        required: true,
        minlength: 6
    },
    mileage:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
},
{timestamp: true}
);

const Reservasion = mongoose.model("reservasion",reservasionSchema);

module.exports = Reservasion;