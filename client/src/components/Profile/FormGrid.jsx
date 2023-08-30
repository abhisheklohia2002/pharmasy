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
  Text,
  Divider
} from '@chakra-ui/react';
import {IoMdLogOut} from "react-icons/io"
import {EditIcon} from "@chakra-ui/icons"
import {GoCrossReference} from "react-icons/go"
import {BiSolidWallet} from "react-icons/bi"
import {FaUserAlt} from "react-icons/fa"
import {AiFillFolder} from "react-icons/ai"
import {BsFillCartFill}  from "react-icons/bs"
import "./profile.css"
import {MdShowChart} from "react-icons/md"
const GridExample = ({email}) => {
    const [info,setinfo]= useState({
        name:"",
        mobile_no:""
    })
    const [dis,setdis] = useState("block")
    const [info1,setinfo1]= useState({
      name1:"",
      mobile_no1:""
  })
    const [editshow,seteditshow]= useState(true)
    const [diactive,setdiactive] = useState(false)
    const [diactive1,setdiactive1] = useState(false)
const [updatetext,setupdatetext] = useState(true)
let name,value;

    const HandleChange = (e)=>{
name = e.target.name;
value = e.target.value;
setinfo({...info,[name]:value})
// console.log(info)
    }

    const HandleChange1 = (e)=>{
      name = e.target.name;
      value = e.target.value;
      setinfo1({...info1,[name]:value})
      console.log(info1)
          }

const HandlePost = async(e)=>{
    e.preventDefault();
    try {
        const data = await fetch("https://pharmasy.vercel.app/api/pharm",{
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
const HandleUpdate = async(e)=>{
  e.preventDefault()
  try {
    const data = await fetch("https://pharmasy.vercel.app/api/pharm",{
      method:"put",
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name:info.name,
        mobile_no:info.mobile_no,
        name1:info1.name1,
        mobile_no1:info1.mobile_no1
      })
  });


  const res = await data.json();
  // console.log(res)
  if(res.status){
setupdatetext(!updatetext);
setdiactive1(true)

setTimeout(()=>{
setdis("block")
},5000)

  }
  } catch (error) {
    console.log(error)
  }
}


  return (
    <Grid templateColumns="1fr 3fr" gap={8}>
      {/* Sidebar */}
      <GridItem className='griditem_box'>
        <Box bg="" p={4} h="100vh">
        <Box className='Box_Cart_order'>
          <Box>
            <BsFillCartFill/>
          </Box>
          <Box >
            
      <Text fontFamily={'heading'} fontSize={"md"} fontWeight={500} >
      Your Order
      </Text>
      <Box fontSize={"sm"}>
        Medicine
      </Box>
      <Box fontSize={"sm"}>
        Lab Tests
      </Box>
          </Box>
          
        </Box>
       <Box mt={5}>
       <Divider  />
       </Box>

<Box className='refills_cart_profile'>
<Box>
<MdShowChart/>
</Box>
<Box>
<Box
 fontFamily={'heading'} fontSize={"md"} fontWeight={500}
>
REFILLS
</Box>
<Box fontSize={"sm"}>
 ACTIVE
</Box>
<Box fontSize={"sm"}>
  INACTIVE
</Box>
</Box>
</Box>
<Box mt={5}>
       <Divider  />
       </Box>

       <Box className='refills_cart_profile'>
<Box>
<AiFillFolder/>
</Box>
<Box>
<Box
 fontFamily={'heading'} fontSize={"md"} fontWeight={500}
>
MEDICAL
</Box>
<Box fontSize={"sm"}>
 ALL
</Box>

</Box>
</Box>

<Box mt={5}>
       <Divider  />
       </Box>

       <Box className='refills_cart_profile'>
<Box>
<FaUserAlt/>
</Box>
<Box>
<Box
textAlign={"right"}
 fontFamily={'heading'} fontSize={"md"} fontWeight={500}
>
Profile
</Box>
<Box fontSize={"sm"} textAlign={"right"}>
 Edit Profile
</Box>
<Box fontSize={"sm"} textAlign={"right"}>
  Manage Address
</Box>
<Box fontSize={"sm"} textAlign={"right"}>
  Manage Refunds
</Box>
</Box>
</Box>
<Box mt={5}>
       <Divider  />
       </Box>

       <Box className='refills_cart_profile'>
<Box>
<BiSolidWallet/>
</Box>
<Box>
<Box
textAlign={"right"}
 fontFamily={'heading'} fontSize={"md"} fontWeight={500}
>
Wallet
</Box>

</Box>
</Box>
<Box mt={5}>
       <Divider  />
       </Box>

       <Box className='refills_cart_profile'>
<Box>
<GoCrossReference/>
</Box>
<Box>
<Box
textAlign={"right"}
 fontFamily={'heading'} fontSize={"md"} fontWeight={500}
>
Refers and Earn
</Box>

</Box>
</Box>
<Box mt={5}>
       <Divider  />
       </Box>

       <Box className='refills_cart_profile'>
<Box>
<IoMdLogOut/>
</Box>
<Box>
<Box
textAlign={"right"}
 fontFamily={'heading'} fontSize={"md"} fontWeight={500}
>
Logout
</Box>

</Box>
</Box>
        </Box>
      </GridItem>

      {/* Main Content */}
      <GridItem className='GridItem_from'>
            
        <Flex justify="center" align="center" h="100vh">
          <Box w="300px">
          {
            editshow ? (
              <form className='form_profile'>
              <FormControl mb={4}>
                
  <Box className='form_edit_profile'>
      <Box>
      Edit Profile
      </Box>
      <Box onClick={()=>seteditshow(!editshow)} className  = "pointer" >
  <EditIcon/>
      </Box>
  </Box>
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Name*</FormLabel>
                  <Input required disabled = {diactive} onChange={HandleChange} value = {info.name} name = "name" width={500}  type="text" placeholder={ diactive ? info.name : "Enter your name"} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Email*</FormLabel>
                  <Input disabled = {true} width={500} type="email" placeholder={email} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Phone*</FormLabel>
                  <Input required disabled = {diactive} onChange={HandleChange} value = {info.mobile_no} name = "mobile_no" width={500} type="number" maxLength={10} placeholder={ diactive ? info.mobile_no : "Enter your Number"} />
                </FormControl>
                <Button disabled = {diactive==true} onClick={HandlePost} colorScheme="blackAlpha" width="2xs" >
                  {"save".toUpperCase()}
                </Button>
              </form>
            ):(
              <form className='form_profile'>
              <FormControl mb={4}>
                
  <Box className='form_edit_profile'>
      <Box
      display={dis}
      >
    {updatetext? "Please Update Your Profile ?" : "Update Successfully" }
      </Box>
      <Box className  = "pointer" >
  {/* <EditIcon/> */}
      </Box>
  </Box>
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Name*</FormLabel>
                  <Input disabled = {diactive1} onChange={HandleChange1} value = {info1.name1} name = "name1" width={500}  type="text" placeholder={ diactive1 ? info1.name1 : "Enter your name"} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Email*</FormLabel>
                  <Input disabled = {true} width={500} type="email" placeholder={email} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Phone*</FormLabel>
                  <Input disabled = {diactive1} onChange={HandleChange1} value = {info1.mobile_no1} name = "mobile_no1" width={500} type="number" maxLength={10} placeholder={ diactive1 ? info1.mobile_no1 : "Enter your Number"} />
                </FormControl>
                <Button disabled = {diactive1===true} onClick={HandleUpdate} colorScheme="blackAlpha" width="2xs" >
                  {"Update ".toUpperCase()}
                </Button>
              </form>
            )
          }
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default GridExample;
