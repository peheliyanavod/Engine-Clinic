const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
},
{timestamp: true}
);

const User = mongoose.model("user",userSchema);
module.exports = User;