import { Grid, GridItem ,Text,Image,Button} from '@chakra-ui/react'
import React, { useState } from 'react';
// GridItem
import {DeleteIcon} from "@chakra-ui/icons"
import "./store.css"
import { RemoveData } from '../ReduxStore/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveToCart } from '../ReduxStore/ProductsSlice';
export default function GridCartpage({id,price,title,images,qty}) {
const Dispatch  = useDispatch();

const select = useSelector((state)=>state.product.cart)
const HandleDeleteCart  = (id)=>{
const payload = {id};
console.log("delete")
// Dispatch(RemoveData(payload))
Dispatch(RemoveToCart(payload))
// console.log(select,"car")
}

  return (
    <Grid className='Cart_grid_Products' key = {id} templateColumns="repeat(4, 1fr)" gap={3}>
    <GridItem className='Cart_products_price_image'>
       <Image src={images} />
      <Text>
        $ {price}
      </Text>
    </GridItem>
    <GridItem>
      <Text>
        {title}
      </Text>
    </GridItem>
    <GridItem>

    <Button  >-</Button>
      <span style={{ margin: '0 10px' }}>{qty}</span>
      <Button >+</Button>
    </GridItem>
    <GridItem>
      <Button onClick={()=>HandleDeleteCart(id)}>
<DeleteIcon/>
      </Button>
    </GridItem>
    {/* You can add more GridItems as needed */}
  </Grid>
  )
}
