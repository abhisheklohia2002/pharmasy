import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../Home/HomePage'
import StoreValue from '../StoreValue/StoreValue'
import Eachitems from '../StoreValue/Eachitems'
export default function ALLROUTES({btnRef,HandleClickCart}) {
  return (
   <Routes>
    <Route path = "/" element = {<HomePage/>} />
    <Route path = "/store" element = {<StoreValue   />} />
<Route path='/eachproduct' element = {<Eachitems  btnRef = {btnRef}  HandleClickCart = {HandleClickCart}  />} />
   </Routes>
  )
}

