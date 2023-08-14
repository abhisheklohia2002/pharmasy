import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";



const Main_Store = configureStore({
    reducer:ProductsReducer
})

export default Main_Store