
import { createSlice} from "@reduxjs/toolkit";


const Product_Cart  = createSlice({
    name:"cart",
    initialState : {cart:[]},
    reducers:{
GetData:(state,action)=>{
    // console.log(action)
    return { ...state, cart: [...state.cart, { ...action.payload }] };

},
RemoveData:(state,action)=>{
    return {
        ...state,
        cart: state.cart.filter((e) => e.id !== action.payload.id)
      };
}
    }
})


const Products_cart = Product_Cart.reducer;
export default Products_cart;
export const {GetData,RemoveData} = Product_Cart.actions