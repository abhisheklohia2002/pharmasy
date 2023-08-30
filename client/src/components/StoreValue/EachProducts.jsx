import { Box, Button, Divider, Grid,Image,Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./store.css"
import StarRating from "../Box/StarIcon";
import SelectOption from "../Box/Selected_quantity";
import ADDTOCART from "../button/ADDTOCART";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../ReduxStore/ProductsSlice";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

// useState

const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];
const ThreeColumnGrid = ({id,price,title,images,btnRef,HandleClickCart}) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    // console.log(selectedOption)
    const dispatch = useDispatch()




const AddToCarts = (id,price,title,images,selectedOption)=>{
const payload = {id:id,price:price,title:title,images:images,qty:selectedOption}

dispatch(AddToCart(payload))
}
// console.log(Selected,"view ")

  return (
   

    <Grid key={id} templateColumns="1fr 2fr 2fr" gap={4} p={4}>
      <Box bg="gray.100" p={4} textAlign="center">
        <Image src={images} alt={title} />
      </Box>
      <Box display={""} bg="gray.100" p={4} textAlign="center">
      <Box className="Box_grid_second">
      <Text className="Text_title_grid">
        {title}
       </Text>
       <Text className="star_grid" display={"flex"} placeItems={"center"} justifyContent={"space-around"} >
        <StarRating/> {Math.floor(price*20).toFixed(2)} Ratings
       </Text>
       <Text className="Text_price_grid">
        ${price  *(Number(selectedOption)) }
       </Text>
       <Text className="del_grid">
        MRP <del>
            {(Math.random(5000)).toFixed(4)}
        </del>
       </Text>
       <Text className="del_grid">
        Inclusive all texts
       </Text>

       <Text>
       Delivery by <span style={{color:"",fontFamily:"sans-serif" , fontWeight:"bold"}}>Today, before 10:00 pm</span>
       </Text>
      </Box>
<Box  className="selected_grid">
<SelectOption      options={options}
        selectedOption={selectedOption}
        onChange={handleOptionChange}  />
</Box>


<Box paddingTop={3} >
    <Divider color={''} />
</Box>

      </Box>
      <Box bg="gray.100" p={4} textAlign="center">
        <Text color={"gray.500"} textAlign={"left"} fontFamily={"sans-serif"} fontWeight={"semibold"} fontSize={"1xl"} paddingLeft={"2.2rem"}>
        Please add item(s) to proceed
        </Text>
        {/* <PrivateRoute> */}
<Text onClick={()=>AddToCarts(id,price*(Number(selectedOption)),title,images,selectedOption)} paddingTop={"1rem"}>
<ADDTOCART title = {"Add To Cart"} width = "30rem" color="whatsapp"   />
</Text>
    {/* </PrivateRoute> */}

      </Box>
    </Grid>
  );
};

export default ThreeColumnGrid;
