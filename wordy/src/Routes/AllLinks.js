import { Routes, Route } from "react-router-dom"
import { Home, Search, Thesaurus } from "../pages"

export const AllLinks = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route  path="search/:id" element={<Search/>}/>
            <Route  path="thesaurus" element={<Thesaurus/>}/>
        </Routes>
    </>
  )
}
