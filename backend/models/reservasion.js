const mongoose = require('mongoose');

const reservasionSchema = mongoose.Schema({
    vehicle_no:{
        type: String,
        required: true
    },
    username:{
        type: String,
        // required: true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
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