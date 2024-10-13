const { type } = require('express/lib/response');
const mongoose =require('mongoose');

 

 const userSchema=mongoose.Schema({
    username:{
      type:String,
    },
    registrationNumber:{
      type:Number
    },
    email:{
      type:String,
    },
    password:{
      type:String,
    },
    posts :[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'post'
    }]
 
 })

 module.exports = mongoose.model('user',userSchema);