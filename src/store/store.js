import { configureStore } from "@reduxjs/toolkit";
import playerSliceReducer from "./slice/raiderSlice";
import PuneriTvDataReducer from "./slice/puneriTvSlice";
import tvreducer from "./slice/tvslice";
const store = configureStore({
    reducer: {
        playerData: playerSliceReducer,
        puneriData: PuneriTvDataReducer,
        tv:tvreducer,
    }
})

export default store;