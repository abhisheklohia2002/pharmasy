import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";
import Products_cart from "./CartPage";



const Main_Store = configureStore({
    reducer:{product:ProductsReducer
    ,
    cart:Products_cart
    }
})

export default Main_Store