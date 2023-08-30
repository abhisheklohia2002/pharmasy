
import { createSlice} from "@reduxjs/toolkit";


const Auth  = createSlice({
    name:"Auth",
    initialState :[],
    reducers:{
AuthAdd:(state,action)=>{
 state.push({Auth:true})
},
AuthRemove:(state,action)=>{
    state.pop()
}
    }
})


const Auths = Auth.reducer;
export default Auths;
export const {AuthAdd,AuthRemove} = Auth.actions