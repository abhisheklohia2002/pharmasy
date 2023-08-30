import { useSelector } from "react-redux";
import AlertPopExample from "../popup/PopAlertOne";

import React, { useState } from 'react'

export default function PrivateRoute({children}) {
   const [auth,setauth] = useState(false)
const selector = useSelector((state)=>state.Auth);
console.log(selector)
setauth(selector.Auth)
  return (
   <>
   {auth?(children):(<AlertPopExample otp = "Please Verify Your Email First" />)}
   </>
  )
}


