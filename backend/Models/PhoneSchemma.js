const mongoose = require("mongoose");


const phoneuser = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

const model_phone = new mongoose.model("phone",phoneuser);


module.exports  = model_phone;

