import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosHttp from "../../../util/axiosInterceptor";

export const getRaiderData = createAsyncThunk("getRaiderData", async ()=>{
    try{
        const raiderData = await axiosHttp.get("/player_list?cat_id=1");
        // console.log(raiderData.data);
        return raiderData.data;
    }
    catch (err){
        throw err;
    }
})


export const getDefenderData = createAsyncThunk("getDefenderData", async ()=>{
    try{
        const defenderData = await axiosHttp.get("/player_list?cat_id=2");
        console.log(defenderData.data);
        return defenderData.data;
    }
    catch (err){
        throw err;
    }
})


export const getAllRounderData = createAsyncThunk("getAllRounderData", async ()=>{
    try{
        const allRounderData = await axiosHttp.get("/player_list?cat_id=3");
        // console.log(raiderData.data);
        return allRounderData.data;
    }
    catch (err){
        throw err;
    }
})

export const getSinglePlayerData = createAsyncThunk("getSinglePlayerData",async (playerID)=>{
    try{
        const singlePlayerData = await axiosHttp.get(`/single_player?id=${playerID}`);
        console.log(singlePlayerData.data);
        return singlePlayerData.data;
    }
    catch (err){
        throw err;
    }
})


export const getSeasonPuneriTv = createAsyncThunk("getSeasonPuneriTv", async(id)=>{
    try {
      const catIds = [1, 2, 3, 4, 5, 6, 7];
      const allResponses = await Promise.all(
        catIds.map(id => axiosHttp.get(`puneri_tv_list?cat_id=${id}`))
      );

      // attach cat_id to each item
      const data = allResponses.flatMap((response, index) =>
        response.data.map(item => ({
          ...item,
          cat_id: String(catIds[index])
        }))
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
})

export const getSeasonGallery = createAsyncThunk("getSeasonGallery", async()=>{
    try{
        const seasonGallery = await axiosHttp.get(`/gallary_list?cat_id=7`);
        return seasonGallery.data;
    }
    catch(err){
        throw(err);
    }
})