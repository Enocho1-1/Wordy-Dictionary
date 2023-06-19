import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Home, Search, Thesaurus } from "../pages"

export const AllLinks = () => {

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites"))  || [])
  const [word, setWord] = useState({})

  useEffect( () => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])
  return (
    <>
        <Routes>
            <Route path="/" element={<Home favoriteList={favorites} setFavorites={setFavorites} word={word} setWord={setWord}/>}/>
            <Route  path="search" element={<Search apiPath="collegiate/json/" favoriteList={favorites} setFavorites={setFavorites}/>}/>
            <Route  path="thesaurus" element={<Thesaurus/>}/>
        </Routes>
    </>
  )
}
