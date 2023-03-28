const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    LastName: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    
},{strict:false});

const users = new mongoose.model("users",userSchema);


module.exports = users;