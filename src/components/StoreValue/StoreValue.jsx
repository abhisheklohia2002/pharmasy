import { Box ,Center,SimpleGrid} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./store.css"
import SelectionOption from './Selection'
import CartProducts from './CartProducts'
const options = ["Price Low to High", "Price High to Low", "Discount"];


export default function StoreValue() {
  const arrow  = ">"
  const [refs,setrefs] = useState(0)
const [products,setproducts] = useState([]);
const [selectedOption, setSelectedOption] = useState("");

// console.log(selectedOption)

const FetchProducts = async()=>{
  if(refs==0){
    try {
      const getData = await fetch(`https://fakestoreapi.com/products`);
      const res = await getData.json();
      // console.log(res)
      setproducts([...res])
setrefs((refs)=>refs+1)

    } catch (error) {
      console.log(error)
    }
  }
  else {
    if("Price Low to High"==selectedOption){
for(var i = 0;i<products.length;i++){
  for(var j = 0; j<products.length-i-1; j++){
    if(products[j].price>products[j+1].price){
      var temp = products[j];
      products[j]  = products[j+1];
      products[j+1] = temp
    }
  }
}
setrefs((refs)=>refs+1)
setproducts(products)
// setSelectedOption("")

// console.log(products)
    }
    else if("Price High to Low"==selectedOption){
      for(var i = 0;i<products.length;i++){
        for(var j = 0; j<products.length-i-1; j++){
          if(products[j].price<products[j+1].price){
            var temp = products[j];
            products[j]  = products[j+1];
            products[j+1] = temp
          }
        }
    }

    setrefs((refs)=>refs+1)
    setproducts(products)
    // setSelectedOption("")



  }
    // else {
    //   // Math.floor(elem.price%20)*10
    //   for(var i = 0;i<products.length;i++){
    //     for(var j = 0; j<products.length-i-1; j++){
    //       if(Math.floor(products[j].price%20)*10<Math.floor(products[j+1].price%20)*10){
    //         var temp = products[j];
    //         products[j]  = products[j+1];
    //         products[j+1] = temp
    //       }
    //     }
    // }

    // setrefs((refs)=>refs+1)
    // setproducts(products)
    //   setSelectedOption("")

    // }
  }
}


const handleSelectChange = (event) => {
  setSelectedOption(event.target.value);
  
  setrefs((refs)=>refs+1)
};

useEffect(()=>{
FetchProducts()
},[refs])


  return (
<Box>
<Box className='valueStore_heading'>
  Home {arrow} All Categories {arrow} Values Store

</Box>


<Box className='ValueStore_filter'>
  <Box fontSize={25} fontFamily={"sans-serif"} fontWeight={500}>
    Filter
  </Box>
  <Box fontSize={25} fontFamily={"sans-serif"} fontWeight={500}>
    Value Store
  </Box>
  <Box className='sort_box'>
    <Box style={{fontFamily:"sans-serif",fontSize:"0.9rem",marginRight:"1rem"}}>
      Sort By:
    </Box>
  <Box className='select'>
  <SelectionOption  selectedOption = {selectedOption} handleSelectChange = {handleSelectChange} options = {options} />
  </Box>
  </Box>
</Box>



{/* base Filter and show */}

<Box className='CartProducts_Box'>
  <Box>
    Filter
  </Box>
<SimpleGrid className='grid_simple' columns={3} spacing={6} textAlign={"Center"} >
  {
    products?.map((elem,index)=>(

              <CartProducts  key = {elem.id} price = {elem.price} title = {elem.title} images = {elem.image} off = {Math.floor(elem.price%20)*10}  />
      
    ))
  }
</SimpleGrid >






</Box>


</Box>
  )
}
