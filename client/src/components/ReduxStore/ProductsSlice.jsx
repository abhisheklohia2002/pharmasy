import { createSlice} from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
    name:"product",
    initialState:{
        cart:[]
    },
    reducers:{
        AddToCart:(state,action)=>{
            
            return { ...state, cart: [...state.cart, { ...action.payload }] };
        },
        RemoveToCart:(state,action)=>{
            return {
                ...state,
                cart: state.cart.filter((e) => e.id !== action.payload.id),

              };
        },
        Subtotal:(state,action)=>{
return {
    
}
        }
    }
})
const ProductsReducer= ProductsSlice.reducer
export default ProductsReducer
export const {AddToCart,RemoveToCart,Subtotal}  = ProductsSlice.actions