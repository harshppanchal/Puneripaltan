import { createSlice } from "@reduxjs/toolkit";
import { getSeasonPuneriTv } from "../action/playerActionMethod";


const initialState = {
    data: [],
    message:"idle"
}

const tvslice = createSlice({
     name:"tv",
     initialState,
     extraReducers: (builder)=>{
        builder
        .addCase(getSeasonPuneriTv.pending, (state,action)=>{
            state.message  = "Pending";
        })
        .addCase(getSeasonPuneriTv.fulfilled, (state,action)=>{
            state.data = action.payload;
            // console.log(action.payload)
            state.message = "Fulfilled";
        })
        .addCase(getSeasonPuneriTv.rejected, (state)=>{
            state.message="Rejected";
        })
     }
})

export const tvsliceactions = tvslice.actions;
const tvreducer = tvslice.reducer
export default tvreducer;