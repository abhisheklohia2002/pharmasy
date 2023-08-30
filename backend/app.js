const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000 || process.env.PORT
const cors = require("cors")
const router = require('./Routes/AllRoutes')
app.use(express.json());
// app.use(cors())
app.use(cors(

{
    origin:["https://pharmasy.vercel.app"],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}
))

mongoose.connect(`mongodb+srv://king:king@cluster0.addnvdz.mongodb.net/pharmeasy?retryWrites=true&w=majority`,{
    
    useNewUrlParser: true
}).then((res)=>{

   
    console.log(`DB is Connected`,)
})
.catch((er)=>{
    console.log(`Err========= at DB`,er)
})

app.use("/api",router)
app.get("/",(req,res)=>{
    res.send({msg:"Hello bro"})
})
const Start = async()=>{

    try {
app.listen(PORT,()=>{
    console.log(`${PORT} is Running`)
})

    } catch (error) {
        console.log(error)
    }
}


Start()


