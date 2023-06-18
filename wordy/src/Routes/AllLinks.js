import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Home, Search, Thesaurus } from "../pages"

export const AllLinks = () => {

  const [favorites, setFavorites] = useState([])
  return (
    <>
        <Routes>
            <Route path="/" element={<Home favoriteList={favorites}/>}/>
            <Route  path="search" element={<Search apiPath="collegiate/json/" favoriteList={favorites}/>}/>
            <Route  path="thesaurus" element={<Thesaurus/>}/>
        </Routes>
    </>
  )
}
