import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appstore=configureStore({
reducer:{
cart: cartReducer
// if we have another slices then we have add it also
}

})

export default appstore;