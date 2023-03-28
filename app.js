require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./conn");
const users = require("./userSchema");
const cors = require("cors");
const router = require("./router");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);

if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'frontend','build')))
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});