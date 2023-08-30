

const models_pharm  = require("../Models/PharmSchemma")
const model_verify = require("../Models/PhoneSchemma")
const nodemailer = require("nodemailer");




const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'tamia29@ethereal.email',
        pass: 'wj3TZXvQuZQMxUg9KP'
    }
});



const Post_ParmEasy = async(req,res)=>{
    const {name,mobile_no}  = req.body;

    try {
            if(name!=="" || mobile_no !== ""){

                const check_email = await models_pharm.findOne({mobile_no:mobile_no})


              if(check_email){
                res.status(404).send({msg:"Already register"})
              }
              else{
                const check_model = new models_pharm({
                    name,mobile_no
        });


       await check_model.save();
       res.send({msg:"successfully Register",status:200})
              }



            }
            else {
                res.send({msg:"fill all entry"})
            }



        
    } catch (error) {
        res.send(error,{msg:"sever side Error"})
    }
}


const Phoneverify  = async(req,res)=>{
    const {email} = req.body;
console.log(email)
    try {
if(email !== ""){
const check_phone  = await model_verify.findOne({email:email});

if(check_phone){
    res.status(500).send({msg:"user already Present"})
}
else {
    const save_phone = new model_verify({
        email:email
    })


    await save_phone.save();

    function generateOTP() {
        const min = 1000; 
        const max = 9999; 
      
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      const otp = generateOTP();
      console.log("Generated OTP:", otp);


let info = await transporter.sendMail({
    from:'<tamia29@ethereal.email>',
    to:email,
    subject:"One Time Password",
    text:`Dear User Please verify your email by entering ${otp}`,
   

})

transporter.sendMail(info, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });


res.send({msg:otp,OTP:"true"})

}



}
else {
res.send({msg:"please fill all entry"})
}
        
    } catch (error) {
       console.log(error) 
    }
}




const GetEmail = async(req,res)=>{
    try {
        const data_email = await model_verify.find({});
        console.log(data_email);
        res.send({msg:data_email,status:202})
    } catch (error) {
        console.log(error)
        res.send({msg:404})
    }
}

const UpdatePharm = async (req, res) => {
    const { name, mobile_no,name1,mobile_no1 } = req.body;
  
    try {
      if (name !== "" || mobile_no !== "") {
       const data_info = await models_pharm.findOne({name:name,mobile_no:mobile_no});



  
        if (data_info) {
         const id = data_info._id;
         const data_update = await models_pharm.findByIdAndUpdate(id,{name:name1,mobile_no:mobile_no1});

          res.status(200).json({ message: 'Document updated successfully', data_update ,status:true});
        } else {
          res.status(404).json({ message: 'Document not found' });
        }
      } else {
        res.status(400).json({ message: 'Both name and mobile_no cannot be empty' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

module.exports = {
    Post_ParmEasy,Phoneverify,GetEmail,UpdatePharm
}