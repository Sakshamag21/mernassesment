const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    component2: {
        type: String,
        required: true
    },
    component2: {
        type: String,
        required: true,
        unique: true
    },
    component3: {
        type: String,
        required: true
    },
    component4: {
        type: Number,
        required: true
    },
    component5: {
        type: String,
        required: true
    },
    componnet6: {
        type: String,
        required: true
    },
    
},{strict:false});

const users = new mongoose.model("users",userSchema);


module.exports = users;