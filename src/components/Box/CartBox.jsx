import { Box, Text,Divider,Image} from '@chakra-ui/react'
import React from 'react'
import "./Box.css"
export default function CartBox({imgs,off,values}) {
  return (
   <Box className='cartbox'  w={40} textAlign={"center"} style={{cursor:"pointer"}}>
    <Image 
    w={40}
     src={imgs}
     alt="Express Delivery Icon"
    />
    <Divider/>
    <Box>
        <Text>
            {values}
        </Text>
    </Box>
    <Box>
        <Text style={{color:"red"}}>
            {off}
        </Text>
    </Box>
   </Box>
  )
}
