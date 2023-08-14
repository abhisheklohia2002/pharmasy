import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../Home/HomePage'
import StoreValue from '../StoreValue/StoreValue'
export default function ALLROUTES() {
  return (
   <Routes>
    <Route path = "/" element = {<HomePage/>} />
    <Route path = "/store" element = {<StoreValue/>} />

   </Routes>
  )
}

