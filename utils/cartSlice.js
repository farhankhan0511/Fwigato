import { createSlice } from "@reduxjs/toolkit"



const cartSlice=createSlice({
    name:"cart",
    initialState:{
    items:[],
    }
    ,
    reducers:{
    additem:(state,action)=>{
    state.items.push(action.payload)
   
}
    ,
    
    removeitem:(state,action)=>{
    state.items.pop(this)}
    ,
    clearcart:(state,action)=>{
    state.items.length=0;  },
    
    
    }});

export const {additem,removeitem,clearcart}=cartSlice.actions;

export default cartSlice.reducer;