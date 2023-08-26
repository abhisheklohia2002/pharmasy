import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import {EditIcon} from "@chakra-ui/icons"
import AlertPopExample from '../popup/PopAlertOne';
import "./profile.css"
const GridExample = ({email}) => {
    const [info,setinfo]= useState({
        name:"",
        mobile_no:""
    })
    const [editshow,seteditshow]= useState(false)
    const [diactive,setdiactive] = useState(false)
let name,value;

    const HandleChange = (e)=>{
name = e.target.name;
value = e.target.value;
setinfo({...info,[name]:value})
// console.log(info)
    }

const HandlePost = async(e)=>{
    e.preventDefault();
    try {
        const data = await fetch("http://localhost:8000/api/pharm",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(info)
        });

        const res= await data.json();
        console.log(res);
        if(res.status==200){
setdiactive(true)
        }
        else {
            console.log("something went worng")
        }
        
    } catch (error) {
        console.log(error)
    }
}



  return (
    <Grid templateColumns="1fr 3fr" gap={8}>
      {/* Sidebar */}
      <GridItem>
        <Box bg="gray.200" p={4} h="100vh">
          Sidebar content
        </Box>
      </GridItem>

      {/* Main Content */}
      <GridItem className='GridItem_from'>
            
        <Flex justify="center" align="center" h="100vh">
          <Box w="300px">
            <form>
            <FormControl mb={4}>
              
<Box className='form_edit_profile'>
    <Box>
    Edit Profile
    </Box>
    <Box className  = "pointer" >
<EditIcon/>
    </Box>
</Box>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Name*</FormLabel>
                <Input disabled = {diactive} onChange={HandleChange} value = {info.name} name = "name" width={500}  type="text" placeholder={ diactive ? info.name : "Enter your name"} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Email*</FormLabel>
                <Input disabled = {true} width={500} type="email" placeholder={email} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Phone*</FormLabel>
                <Input disabled = {diactive} onChange={HandleChange} value = {info.mobile_no} name = "mobile_no" width={500} type="number" maxLength={10} placeholder={ diactive ? info.mobile_no : "Enter your Number"} />
              </FormControl>
              <Button disabled = {diactive} onClick={HandlePost} colorScheme="blackAlpha" width="2xs" >
                {"save".toUpperCase()}
              </Button>
            </form>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default GridExample;
