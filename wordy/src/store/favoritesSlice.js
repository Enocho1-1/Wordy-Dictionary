import { createSlice } from "@reduxjs/toolkit";

// LocalStorage Function
function LSFunc(list){
    localStorage.setItem("favoriteList",JSON.stringify(list))
}
const favoritesSlice = createSlice({
    name: "favorites",
    initialState: JSON.parse(localStorage.getItem('favoriteList')) || [],
    reducers:{
        addFavorite:(state,action)=>{
            const updateFavorites = state.concat(action.payload)
            LSFunc(updateFavorites)
            return [...updateFavorites]
        },
        redefine:(state,action) =>{
            const seletedWord = state.find( item => item.id === action.payload.id)
            return seletedWord
        },
        removeFavorite:(state,action)=>{
            const filteredList = state.filter( item => item.id !== action.payload.id)
            LSFunc(filteredList)
            return [...filteredList]
        }
    }
})

export const { addFavorite, redefine, removeFavorite} = favoritesSlice.actions
export const favoriteReducers = favoritesSlice.reducer