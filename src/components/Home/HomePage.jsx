import React from "react";
import { Box, Divider, Text, Image } from "@chakra-ui/react";
import SearchBox from "../Search/SearchBox";
import CartBox from "../Box/CartBox";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import OfferBox from "../Box/OfferBox";
import CaptionCarousel from "./Carsouel";

import LargeWithNewsletter from "../footer/Footer";
import ShopCart from "../Box/ShopCart";

export default function HomePage() {
  // const images = ["https://cdn01.pharmeasy.in/dam/banner/banner/cdd68240872-MainSaleBannerHP.jpg","	https://cdn01.pharmeasy.in/dam/banner/banner/8a627d07bfb-WELL25.jpg","https://cdn01.pharmeasy.in/dam/banner/banner/8729de110af-BOGO_iday.jpg","	https://cdn01.pharmeasy.in/dam/banner/banner/8729de110af-BOGO_iday.jpg","	https://cdn01.pharmeasy.in/dam/banner/banner/48fcda97da9-slippernew.jpg"]
  const Nav = useNavigate();
  const HandleJump = () => {
    Nav("/store");
  };

  const shop_cart = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2017/02/01/09/43/mattress-2029190_640.jpg",
      title: "Mattresses",
    },

    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2016/03/27/22/01/person-1284444_640.jpg",
      title: "Personel Care",
    },

    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2020/11/07/20/29/injection-5722329_640.jpg",
      title: "HealthCare Devices",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
      title: "Top Products",
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
      title: "Top Products",
    },
    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
      title: "Top Products",
    },
    {
      id: 7,
      img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
      title: "Top Products",
    },
    {
      id: 8,
      img: "https://cdn.pixabay.com/photo/2012/04/11/17/53/approved-29149_640.png",
      title: "Top Products",
    },
  ];

  return (
    <>
    
      <Box className="HomePage_main_Box">
        <Box className="Homepage_main_box_second">
          <Box>Medicine</Box>
          <Box>Lab Tests</Box>
          <Box>HealthCare</Box>
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
        <Text backgroundColor={"#F5F5F5"} fontSize="3xl" fontFamily="heading" fontWeight={500}>
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
        <Text backgroundColor={"#F5F5F5"} fontSize={"3xl"} fontWeight={600} className="shop_categories">
          Shop by Categories
        </Text>
        <Box className="Shop_cart_products">
         <ShopCart/>
        </Box>
      </Box>

      <Box>
        {/* <footer></footer> */}
        <LargeWithNewsletter />
      </Box>
    </>
  );
}
