import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
// Import your external CSS file
import "./HomePage.css"
const ProductBox = ({ imageUrl, title, price }) => {
  return (
    <Box  className='Box_productsList'
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      m={1}
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
      <Button mt={4} colorScheme="whatsapp"   >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductBox;
