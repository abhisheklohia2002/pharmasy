import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";
import Products_cart from "./CartPage";
import Auths from "./authslice";



const Main_Store = configureStore({
    reducer:{product:ProductsReducer
    ,
    cart:Products_cart,
    Auth:Auths
    }
})

export default Main_Store