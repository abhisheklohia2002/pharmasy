// React

import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ALLROUTES from './components/AllRoutes/ALLROUTES'

import {DrawerContent, Button,Drawer,DrawerBody,DrawerFooter,DrawerOverlay,DrawerCloseButton ,DrawerHeader, useDisclosure,Input } from '@chakra-ui/react'
function App() {

  const { isOpen, onOpen, onClose } = useDisclosure()


  const btnRef = React.useRef()
 
  return (
    <>
    <div>
   

      <Navbar btnRef = {btnRef} HandleClickCart = {onOpen} />
     
     
      <ALLROUTES/>
    </div>
   
    <Drawer
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
{/* Cart Products */}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Proceed to Payment</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


    </>
  )
}

export default App
