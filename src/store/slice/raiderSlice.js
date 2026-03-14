import { createSlice } from "@reduxjs/toolkit";
import { getAllRounderData, getDefenderData, getRaiderData, getSinglePlayerData } from "../action/playerActionMethod";
const initialState = {
    raiderData: [],
    raiderStatus: "Idle",
    defenderData: [],
    defenderStatus: "Idle",
    allRounderData: [],
    allRounderStatus: "Idle",
    singlePlayerData : [],
    singlePlayerStatus: "Idle"
}

const playerSlice = createSlice({
    name: "playerSlice",
    initialState,
    extraReducers: (builder)=>{
        builder
        // Raider
        .addCase(getRaiderData.fulfilled, (state, action)=>{
            state.raiderStatus = "Fulfilled",
            console.log(state.raiderStatus)
            state.raiderData = action.payload;
        })
        .addCase(getRaiderData.pending, (state)=>{
            state.raiderStatus = "Pending"
            console.log(state.raiderStatus);
        })
        .addCase(getRaiderData.rejected, (state)=>{
            state.raiderStatus = "Rejected";
            console.log(state.raiderStatus);
        })
        // Defender
        .addCase(getDefenderData.fulfilled, (state, action)=>{
            state.defenderStatus = "Fulfilled",
            console.log(state.defenderStatus)
            state.defenderData = action.payload;
        })
        .addCase(getDefenderData.pending, (state)=>{
            state.defenderStatus = "Pending"
            console.log(state.defenderStatus);
        })
        .addCase(getDefenderData.rejected, (state)=>{
            state.defenderStatus = "Rejected";
            console.log(state.defenderStatus);
        })
        // All Rounder
        .addCase(getAllRounderData.fulfilled, (state, action)=>{
            state.allRounderStatus = "Fulfilled",
            console.log(state.allRounderStatus)
            state.allRounderData = action.payload;
        })
        .addCase(getAllRounderData.pending, (state)=>{
            state.allRounderStatus = "Pending"
            console.log(state.allRounderStatus);
        })
        .addCase(getAllRounderData.rejected, (state)=>{
            state.allRounderStatus = "Rejected";
            console.log(state.allRounderStatus);
        })
        // Single Player
        .addCase(getSinglePlayerData.fulfilled, (state, action)=>{
            state.singlePlayerStatus = "Fulfilled",
            console.log(state.singlePlayerStatus)
            state.singlePlayerData = action.payload;
        })
        .addCase(getSinglePlayerData.pending, (state)=>{
            state.singlePlayerStatus = "Pending"
            console.log(state.singlePlayerStatus);
        })
        .addCase(getSinglePlayerData.rejected, (state)=>{
            state.singlePlayerStatus = "Rejected";
            console.log(state.singlePlayerStatus);
        })
    }
})

export const playerSliceActions = playerSlice.actions;
const playerSliceReducer = playerSlice.reducer;
export default playerSliceReducer;
