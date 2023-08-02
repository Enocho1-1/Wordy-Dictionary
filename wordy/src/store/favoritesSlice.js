import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState:[],
    reducers:{
        addFavorite:(state,action)=>{
            console.log(action.payload)
        },
        removeFavorite:(state,action)=>{

        }
    }
})

export const { addFavorite, removeFavorite} = favoritesSlice.actions
export const favoriteReducers = favoritesSlice.reducer