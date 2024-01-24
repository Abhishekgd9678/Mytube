import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:'app',
    initialState:{
        isopen:true,
    },
    reducers:{
        toggle:(state)=>{
            state.isopen=!state.isopen;
        }
    }
})

export const {toggle}= Slice.actions
export default Slice.reducer;