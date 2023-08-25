const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000 || process.env.PORT
const router = require('./Routes/AllRoutes')
app.use(express.json());


mongoose.connect(`mongodb+srv://king:king@cluster0.addnvdz.mongodb.net/pharmeasy?retryWrites=true&w=majority`,{
    
    useNewUrlParser: true
}).then((res)=>{

   
    console.log(`DB is Connected`,)
})
.catch((er)=>{
    console.log(`Err========= at DB`,er)
})

const Start = async()=>{
    app.use("/api",router)

    try {
app.listen(PORT,()=>{
    console.log(`${PORT} is Running`)
})

    } catch (error) {
        console.log(error)
    }
}


Start()

