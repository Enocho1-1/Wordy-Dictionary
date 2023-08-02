import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducers } from "./favoritesSlice";

export const store =configureStore({
    reducer:{
        favorites: favoriteReducers,
    }
})