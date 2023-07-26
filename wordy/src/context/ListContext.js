import { createContext, useContext } from "react";

const intialState = {
    list: JSON.parse(localStorage.getItem('favorites')) || []
}

const ListContext = createContext(intialState)

export const ListProvider = ({children}) => {
    const value = {
        list : []     
    }
    return(
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    )
}

export const useList = () => {
    const listContext = useContext(ListContext)
    return listContext
}