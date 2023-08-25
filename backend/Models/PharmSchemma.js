const mongoose = require("mongoose");
const add_Schemma = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile_no :{
        type:Number,
        required:true
    }
},
{
    timestamps:true
});


const Model_Pharmeasy = mongoose.model("user",add_Schemma);


module.exports = Model_Pharmeasy