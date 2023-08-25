

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


module.exports = {
    Post_ParmEasy,Phoneverify
}