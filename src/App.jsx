// React

import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ALLROUTES from './components/AllRoutes/ALLROUTES'
// GridItem
import {DrawerContent, Button,Drawer,DrawerBody,DrawerFooter,DrawerOverlay,DrawerCloseButton ,DrawerHeader, useDisclosure,Input,Grid,GridItem,Text,Image,Box, Stack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import GridCartpage from './components/StoreValue/GridCartpage'
function App() {
const items = useSelector((state)=>state.product.cart)
  const { isOpen, onOpen, onClose } = useDisclosure();
const [isOTP,setOTP]  = useState(true)
const {isOpen:isLogin,onOpen:isLoginOpen,onClose:isloginClose} = useDisclosure()
const [otpValues, setOtpValues] = useState(['', '', '', '']);

const handleOtpChange = (index, value) => {
  if (value.length <= 1) {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  }
};

  const btnRef = React.useRef()
 const LoginDrawer = React.useRef()
  const uniqueItems = items.filter((value, index, self) => {
    const foundIndex = self.findIndex(item => 
      item.id === value.id && 
      item.price === value.price && 
      item.title === value.title && 
      item.images === value.images &&
      item.qty === value.qty
    );
    return foundIndex === index;
  });
  

const HandleOTP = ()=>{
  setOTP(false)
}

  return (
    <>
    <div>
   

      <Navbar btnRef = {btnRef} HandleClickCart = {onOpen} LoginDrawer = {LoginDrawer}
      isLoginOpen = {isLoginOpen}
      />
     
     
      <ALLROUTES  btnRef = {btnRef} HandleClickCart = {onOpen} />
    </div>
   
    <Drawer size="lg"
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart Products</DrawerHeader>

          <DrawerBody>

{


uniqueItems.length > 0 ? (
  uniqueItems.map((elem, index) => (
    <span key={index}>
      <GridCartpage
        id={elem.id}
        price={elem.price}
        title={elem.title}
        images={elem.images}
        qty={elem.qty}
      />
    </span>
  ))
) : (
  <Image
    src="https://thumbs.dreamstime.com/z/man-pushing-shopping-cart-empty-19880286.jpg?w=768"
    alt=""
  />
)


}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Proceed to Payment</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>









      <Drawer size="md"
        isOpen={isLogin}
        placement='right'
        onClose={isloginClose}
        finalFocusRef={LoginDrawer}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className='Header_drawer'>
            <Box className='Drawer_Box_login'>
              <Box>
<Text>
Login/Sign up to
</Text>
<Text>
continue with your order
</Text>
              </Box>
              <Box>
               <Image src='	https://assets.pharmeasy.in/web-assets/images/loginv2.svg' /> 
              </Box>
            </Box>
          </DrawerHeader>

          <DrawerBody className='DrawerBody_login'>
{
  isOTP?(<Box>

    <Text className='text_login_drawer'>
Enter your mobile number
</Text>
<Stack>
<Input maxLength={10} className='drawer_input_login'  placeholder='+91 Your Mobile Number' size='md' />

<Button onClick={HandleOTP} colorScheme='teal' size='md' className='btn_drawer_login'>
Send OTP
</Button>

</Stack>
</Box>):(

<Box>
<Text className='text_otp_drawer'>
Enter OTP Number
</Text>
<Box>
{otpValues.map((value, index) => (
          <Input
            key={index}
            className="inp_otp"
            width={20}
            placeholder=""
            size="lg"
            maxLength={1}
            value={value}
            onChange={(e) => handleOtpChange(index, e.target.value)}
          />
        ))}

</Box>
<Box>
  <Button colorScheme='teal' size='md' className='btn_drawer_login'>
    Verify
  </Button>
</Box>


</Box>


)
}



      </DrawerBody>

          <DrawerFooter>
<Text className='Drawerfooter_login'>
By continuing, you agree with our <b>
Privacy Policy</b> and <b>Terms and Conditions</b>
</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>




    </>
  )
}

export default App
