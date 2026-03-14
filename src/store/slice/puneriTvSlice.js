import { createSlice } from "@reduxjs/toolkit";
import { getSeasonGallery, getSeasonPuneriTv } from "../action/playerActionMethod";
const initialState = {
    puneriTvData: [],
    puneriTvStatus: "Idle",
    galleryData: [],
    galleryStatus: "Idle"
}

const PuneriTvData = createSlice({
    name: "PuneriTvData",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSeasonPuneriTv.fulfilled, (state, action) => {
                state.puneriTvStatus = "Fulfilled";
                state.puneriTvData = action.payload;
            })
            .addCase(getSeasonPuneriTv.rejected, (state) => {
                state.puneriTvStatus = "Rejected";
                console.log(state.puneriTvStatus)
            })
            .addCase(getSeasonPuneriTv.pending, (state) => {
                state.puneriTvStatus = "Pending";
                console.log(state.puneriTvStatus);
            })
            .addCase(getSeasonGallery.fulfilled, (state, action) => {
                state.galleryStatus = "Fulfilled";
                state.galleryData = action.payload;
                console.log(state.galleryStatus);
                console.log(state.galleryData);
            })
            .addCase(getSeasonGallery.rejected, (state) => {
                state.galleryStatus = "Rejected";
                console.log(state.galleryStatus)
            })
            .addCase(getSeasonGallery.pending, (state) => {
                state.galleryStatus = "Pending";
                console.log(state.galleryStatus);
            })
    }
})

export const PuneriTvDataActions = PuneriTvData.actions;
const PuneriTvDataReducer = PuneriTvData.reducer;
export default PuneriTvDataReducer;