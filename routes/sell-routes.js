const express = require('express');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
const router = express.Router();
const sellModel = require('./sell-model');
app.use(express.json());


router.get('/',(req,res,next)=>{
    console.log('sell page working');
    res.json({message:'Sell electricity'})
});
router.post("/post",async(req, res, next)=>{
    console.log('uploading data');
    const data = new sellModel({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        units:req.body.units
    })
    const val = data.save();
    res.json(val);
})
module.exports = router;