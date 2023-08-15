import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import ADDTOCART from '../button/ADDTOCART'
import { GetData, RemoveData } from '../ReduxStore/CartPage';
export default function CartProducts({key,price,title,images,off}) {
const dispatch = useDispatch();
const Show_cart = useSelector((state)=>state.cart.cart)
console.log(Show_cart,"hello")
const HandleClick_Cart = (id,price,title,images,off)=>{
    const payload  = {id,price,title,images,off};
    dispatch(RemoveData(payload))
dispatch(GetData(payload))
}


    const wordsArray = title.split(" ");
const firstTenWords = wordsArray.slice(0, 5);
const outputString = firstTenWords.join(" ");
  return (
    <Box onClick = {()=>HandleClick_Cart(key,price,title,images,off)} className='main_cart_products' key={key}>
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
