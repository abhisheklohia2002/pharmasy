import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
// Import your external CSS file
import "./HomePage.css"
import { useDispatch } from 'react-redux';
import { AddToCart } from '../ReduxStore/ProductsSlice';
const ProductBox = ({id, imageUrl, title, price }) => {
  const dispatch = useDispatch();

  return (
    <Box  className='Box_productsList'
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      m={1}
      key = {id}
      textAlign={"center"}
      boxShadow="md"
    >
      <Image width={"sm"} src={imageUrl} alt={title} />
      <Text mt={2} fontWeight="semibold" fontSize="sm">
        {title}
      </Text>
      <Text mt={2} color="gray.600">
        ${price}
      </Text>
      <Button onClick={()=>dispatch(AddToCart({id:id,price:price,title:title,images:imageUrl,qty:1}))} mt={4} colorScheme="whatsapp"   >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductBox;
