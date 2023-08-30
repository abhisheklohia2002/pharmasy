import { Box,Text,Grid,Image } from '@chakra-ui/react'
import React from 'react'
import "./store.css"
import { useDispatch, useSelector } from 'react-redux'
import ThreeColumnGrid from './EachProducts'

export default function Eachitems({btnRef,HandleClickCart}) {

const Show_cart = useSelector((state)=>state.cart.cart);


  return (
   <Box className='Box_Eachitems'>
{
    Show_cart?.map((elem,index)=>(
      <span key={index}>
          <ThreeColumnGrid id = {elem.id} price  = {elem.price} 
        title = {elem.title} images = {elem.images}
   
        btnRef = {btnRef}  HandleClickCart = {HandleClickCart}

        
   
        />
      </span>
    ))
}

   </Box>
  )
}




// import { Box, Grid } from "@chakra-ui/react";
// import React from "react";

// const ThreeColumnGrid = () => {
//   return (
  
//   );
// };

// export default ThreeColumnGrid;
