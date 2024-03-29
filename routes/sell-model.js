
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sell = new Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:Number, required: true},
    address:{type:String, required: true},
    units:{type:Number, required: true}
})

module.exports = mongoose.model('sellers', sell);