import { Box ,Center,SimpleGrid} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./store.css"
import SelectionOption from './Selection'
import CartProducts from './CartProducts'
const options = ["Price Low to High", "Price High to Low", "Discount"];


export default function StoreValue({btnRef,HandleClickCart}) {
  const arrow  = ">"
  const [refs,setrefs] = useState(0)
const [products,setproducts] = useState([]);
const [selectedOption, setSelectedOption] = useState("");



const FetchProducts = async()=>{
  if(refs==0){
    try {
      const getData = await fetch(`https://fakestoreapi.com/products`);
      const res = await getData.json();
     
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
    



  }
   
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
<Box backgroundColor={""}>



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





<Box className='CartProducts_Box'>

<SimpleGrid className='grid_simple' columns={3} spacing={6} textAlign={"Center"} >
  {
    products?.map((elem,index)=>(

      <span key={index}>
                <CartProducts  id = {index} price = {elem.price} title = {elem.title} images = {elem.image} off = {Math.floor(elem.price%20)*10}  />
      </span>
      
    ))
  }
</SimpleGrid >






</Box>


</Box>
  )
}



