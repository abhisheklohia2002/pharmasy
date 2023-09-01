import React from "react";
import { Box, Divider, Text, Image } from "@chakra-ui/react";
import SearchBox from "../Search/SearchBox";
import CartBox from "../Box/CartBox";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import OfferBox from "../Box/OfferBox";
import CaptionCarousel from "./Carsouel";

import LargeWithNewsletter from "../footer/Footer";
import ShopCart from "../Box/ShopCart";
import ProductBox from "./ProductList";

export default function HomePage() {
  // const images = ["https://cdn01.pharmeasy.in/dam/banner/banner/cdd68240872-MainSaleBannerHP.jpg","	https://cdn01.pharmeasy.in/dam/banner/banner/8a627d07bfb-WELL25.jpg","https://cdn01.pharmeasy.in/dam/banner/banner/8729de110af-BOGO_iday.jpg","	https://cdn01.pharmeasy.in/dam/banner/banner/8729de110af-BOGO_iday.jpg","	https://cdn01.pharmeasy.in/dam/banner/banner/48fcda97da9-slippernew.jpg"]
  const Nav = useNavigate();
  const HandleJump = () => {
    Nav("/store");
  };

  const shop_cart = [
    {
      id: 100,
      img: "	https://cdn.pixabay.com/photo/2012/02/29/15/57/baby-19261_960_720.jpg",
      title: "Baby Diaper",
      price:"10.00"
    },

    {
      id: 200,
      img: "https://immigrationimpact.com/wp-content/uploads/2023/01/immigration-impact-shortage-home-health-aides.jpg",
      title: "Personel Care",
      price:"510.00"

    },

    {
      id: 300,
      img: "https://cdn.pixabay.com/photo/2013/07/12/18/39/clinical-thermometer-153666_960_720.png",
      title: "Theromter",
      price:"30.00"

    },
    {
      id: 400,
      img: "https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_960_720.jpg",
      title: "Top Medicine",
      price:"80.00"

    },
    {
      id: 500,
      img: "	https://cdn.pixabay.com/photo/2017/02/02/15/15/bottle-2032980_960_720.jpg",
      title: "Water Bottles",
      price:"90.00"

    },
    {
      id: 600,
      img: "https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_1280.jpg",

      title: "Oliver oil",
      price:"60.00"

    },
   
  ];

  return (
    <>
    
      <Box className="HomePage_main_Box">
        <Box className="Homepage_main_box_second">
          <Box
          onClick={HandleJump}
          >Medicine</Box>
          <Box
          onClick={HandleJump}
          >Lab Tests</Box>
          <Box
          onClick={HandleJump}
          >HealthCare</Box>
          <Box>PLUS</Box>
          <Box>Offers</Box>
          <Box onClick={HandleJump}>Value Store</Box>
        </Box>
      </Box>
      <Box className="divider_main_box">
        <Divider />
      </Box>

      <Box className="gradients" w="100%" h="30vh">
        <Box
          className="HomePage_main_looking"
          style={{ width: "40%", textAlign: "right", paddingTop: "2rem" }}
        >
          <Text fontSize="2xl" fontWeight="bold">
            What are you looking for?
          </Text>
        </Box>
        <Box className="searchBOx">
          <SearchBox />
        </Box>
      </Box>

      <Box className="CartBox_box">
        <CartBox
          imgs="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
          off={" FLAT 15% OFF"}
          values={"Medicine"}
        />
        <CartBox
          imgs="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
          off={"UPTO 70% OFF"}
          values={"Lab Tests"}
        />
        <CartBox
          imgs="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0"
          off={"UPTO 60% OFF"}
          values={"Healtcare"}
        />
        <CartBox
          imgs="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0"
          off={"Save 5% EXTRA"}
          values={"PLUS"}
        />
        <CartBox
          imgs={
            "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0"
          }
          off={"UPTO 50% OFF"}
          values={"Value Store"}
        />
      </Box>

      <Box className="welcome_offer">
        <Text fontSize="3xl" fontFamily="heading" fontWeight={500}>
          Your Welcome Offer
        </Text>
      </Box>
      
      <Box className="scrollbar">
        <CaptionCarousel />
      </Box>
      <Box className="Offer_Homepage">
        <Text backgroundColor={""} fontSize="3xl" fontFamily="heading" fontWeight={500}>
          Offers Just for You
        </Text>
        <Box className="Offer_OfferBox">
          <OfferBox
            image={
              "https://cms-contents.pharmeasy.in/offer/05aeec7a153-pelogo.png?dim=1440x0"
            }
            off={"Get Flat 25% OFF on first 2 medicine order"}
            title={"medicine order"}
          />
          <OfferBox
            image={
              "https://cms-contents.pharmeasy.in/offer/ca6fdf0f40e-600.jpg?dim=1440x0"
            }
            off={"Order medicines worth Rs.999 "}
            title={"& get FLAT Rs.600 OFF on your first lab test"}
          />
          <OfferBox
            image={
              "	https://cms-contents.pharmeasy.in/offer/841931c5555-icici-new.jpg?dim=1440x0"
            }
            off={"Flat Rs.100 off on transaction above "}
            title={"Rs.1500"}
          />

          <OfferBox
            image={
              "https://cms-contents.pharmeasy.in/offer/976c75e8d9f-600.jpg?dim=1440x0"
            }
            off={"Get FLAT Rs.600 OFF on Lab Test bookings  above "}
            title={"Rs 1999."}
          />
        </Box>
      </Box>
      <Box className="Box_shop_categories">
        <Text backgroundColor={""} fontSize={"3xl"} fontWeight={600} className="shop_categories">
          Shop by Categories
        </Text>
        <Box className="Shop_cart_products">
         <ShopCart/>
        </Box>
      </Box>


      <Box className="Box_shop_categories">
        <Text backgroundColor={""} fontSize={"3xl"} fontWeight={600} className="shop_categories">
        New Launches
        </Text>
        <Text fontSize={"sm"} pl={20} fontFamily={"sans-serif"}>
        New wellness range just for you!
        </Text>
        <Box  className="Shop_cart_products">
{
  shop_cart.map((e,i)=><ProductBox key = {i} id = {e.id}  imageUrl= {e.img} title = {e.title} price = {e.price} />)
}
        </Box>
      </Box>


      <Box>
        {/* <footer></footer> */}
        <LargeWithNewsletter />
      </Box>
    </>
  );
}
