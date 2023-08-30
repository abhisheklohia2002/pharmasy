import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';

import { GetData, RemoveData } from '../ReduxStore/CartPage';
import { useNavigate } from 'react-router-dom';
export default function CartProducts({id,price,title,images,off}) {
const dispatch = useDispatch();
const nav = useNavigate();


const HandleClick_Cart = (id,price,title,images,off)=>{
    const payload  = {id,price,title,images,off};
    // dispatch(RemoveData(payload))
dispatch(GetData(payload));
nav("/eachproduct");

}


    const wordsArray = title.split(" ");
const firstTenWords = wordsArray.slice(0, 5);
const outputString = firstTenWords.join(" ");
const payload = {id}
dispatch(RemoveData(payload))
  return (
    <Box onClick = {()=>HandleClick_Cart(id,price,title,images,off)} className='main_cart_products' key={id}>
        <Box className='image_box'>
{/* Image */}
<Image className='image_products' src={images} alt={outputString} maxH="150px" objectFit="cover" mx="auto" />
        </Box>
        <Box className='cartProducts_box'>
            <Text mt={2} fontSize="sm" fontWeight="hairline">
                {/* title  */}
                {outputString}
            </Text>
        </Box>

        <Box className='Price_cart'>
            <Text fontSize="sm" fontStyle={'oblique'} fontWeight={'hairline'}>
             <del>  {off} </del>Off 
            </Text>
            <Text fontSize="sm" fontWeight={'hairline'}>

        $ {price}
            </Text>
        </Box>

        {/* <Box className='cartProducts_box'>
            <ADDTOCART/>
        </Box> */}

    </Box>
  )
}
