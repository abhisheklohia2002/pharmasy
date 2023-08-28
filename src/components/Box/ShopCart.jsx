import React from 'react';
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const ShopCart = () => {
 
    const shop_cart = [
        {
          id: 1,
          img: "https://cdn.pixabay.com/photo/2017/02/01/09/43/mattress-2029190_640.jpg",
          title: "Mattresses",
        },
    
        {
          id: 2,
          img: "https://cdn.pixabay.com/photo/2016/03/27/22/01/person-1284444_640.jpg",
          title: "Personel Care",
        },
    
        {
          id: 3,
          img: "https://cdn.pixabay.com/photo/2020/11/07/20/29/injection-5722329_640.jpg",
          title: "HealthCare Devices",
        },
        {
          id: 4,
          img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
          title: "Top Products",
        },
        {
          id: 5,
          img: "	https://cdn.pixabay.com/photo/2016/01/30/22/09/mortar-1170665_640.jpg",
          title: "Health and Foods",
        },
        // {
        //   id: 6,
        //   img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
        //   title: "Top Products",
        // },
        // {
        //   id: 7,
        //   img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
        //   title: "Top Products",
        // },
        // {
        //   id: 8,
        //   img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
        //   title: "Top Products",
        // },
      ];
  return (
    <Container maxW="container.lg">
      <Box overflowX="auto">
        <SimpleGrid
          columns={shop_cart.length}
          spacingX={4}
          py={4}
          px={2}
          alignItems="center">
          {shop_cart.map(item => (
            <Box key={item.id}>
              <chakra.img src={item.img} alt={item.title} maxH="100px" />
              <chakra.p mt={2}>{item.title}</chakra.p>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ShopCart;
