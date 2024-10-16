const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    contact:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
},
{timestamp: true}
);

const User = mongoose.model("user",userSchema);
module.exports = User;