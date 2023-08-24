import { Button } from '@chakra-ui/react'
import React from 'react'
// Button
export default function ADDTOCART({title,width,color}) {


  return (
    <Button width={width} mt={2} colorScheme={color} fontWeight={'hairline'}>
        {title}
      </Button>
  )
}
