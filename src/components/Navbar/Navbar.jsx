import React from 'react'
import "./navbar.css"
import { Box, Flex, Text, Spacer, Link, Button ,Container,Image, Divider} from '@chakra-ui/react';
import {AiOutlineUser} from "react-icons/ai"
import {BiSolidOffer} from "react-icons/bi"
import {BsCart} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
export default function Navbar({btnRef,HandleClickCart,LoginDrawer,isLoginOpen}) {
const nav = useNavigate()
const HomeToLink = ()=>{
nav("/")
}
  return (
    <>
    <Box className='main_box_navbar'
   
  >
    <Box className='box_navbar'>
      <Box className='image_box' >
        <Image
        onClick={HomeToLink}
          src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
          alt="PharmEasy Logo"
        />
      </Box>
      <Divider  orientation="vertical"/>
      <Box className='after_box_'>
        <Box>
          <Flex align="center">
            <Image
              src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"
              alt="Express Delivery Icon"
              />
            <Text pl={2} fontWeight="bold">
              Express delivery to
            </Text>
          </Flex>
          <Box pl={5}>Selected PinCode</Box>
        </Box>
      </Box>
    </Box>

    <Box className='Main_box_second'>
    
      <Box>
        <Flex align="center">
          <Box ref={LoginDrawer} onClick={isLoginOpen} pl={3}>
            <AiOutlineUser size={22} />
          </Box>
          <Text ref={LoginDrawer} 
          onClick={isLoginOpen}
          >Hello,Log In</Text>
        </Flex>
      </Box>
      {/* BsCart */}
      <Box className='after_box_' >
      <Flex align="center">
          <Box pl={3}>
            <BiSolidOffer size={22} />
          </Box>
          <Text>Offers</Text>
        </Flex>
      </Box>
    <Box ref={btnRef} onClick={HandleClickCart} className='after_box_'  >
      <Flex align="center">
          <Box pl={3}>
            <BsCart size={22} />
          </Box>
          <Button  >Cart</Button>
        </Flex>
      </Box>
    </Box>




    </Box>
      <Box className='divider_padding'>
      <Divider/>
      </Box>

              </>
  

  )
}
