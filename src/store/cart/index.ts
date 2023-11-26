import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartInitialState } from "../../types/Type";
import { IModule } from "../store";

const initialState :ICartInitialState = {
    cartSlice :[]
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers : {
        SET_CART_DATA:(state,action:PayloadAction<ICart[]>)=>{
            state.cartSlice=action.payload
        }
    }
})

export const {SET_CART_DATA} = cartSlice.actions;
export const cartSelector = (state:IModule) => state.cartSlice;
export default cartSlice.reducer