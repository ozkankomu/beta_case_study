import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISessionInitialStateType } from "../../types/Type";
import { IModule } from "../store";

const initialState :ISessionInitialStateType = {
    sessionId : ''
}

const sessionIdSlice = createSlice({
    name: 'sessionId',
    initialState,
    reducers : {
        SET_SESSIONID:(state,action:PayloadAction<string>)=>{
            state.sessionId=action.payload
        }
    }
})

export const {SET_SESSIONID} = sessionIdSlice.actions;
export const sessionIdSelector = (state:IModule) => state.sessionId;
export default sessionIdSlice.reducer