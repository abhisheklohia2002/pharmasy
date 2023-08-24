import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'

export default function OfferBox(props) {
    const {image,off,title} = props
  return (
  <Box className='Offer_Box_you'>
    <Box className='Box_image_offer'>
<Image width={20} src={image} />
    </Box>
    <Box>
        <Box>
<Text>
{off}
</Text>
        </Box>
        <Box>
<Text>
   {title}
</Text>
        </Box>
    </Box>
  </Box>
  )
}
