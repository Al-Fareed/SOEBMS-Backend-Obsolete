const express = require('express');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const router = express.Router();

const sell = new Schema({
    uname:"Alfareed",
    email:"alfarees@gamil.com",
    phone:'"7348842781',
    address:"Bangalore",
    units:50
})

router.get('/',(req,res,next)=>{
    console.log('sell page working');
    res.json({message:'Sell electricity'})
});

module.exports = router;