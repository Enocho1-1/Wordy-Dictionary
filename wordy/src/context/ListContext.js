import { createContext, useContext, useEffect, useReducer } from "react";
import { ListReducer } from "../reducer/ListReducer";

const intialState = {
    list: JSON.parse(localStorage.getItem('favorites')) || []
}

const ListContext = createContext(intialState)

export const ListProvider = ({children}) => {
    const [state, dispatch] = useReducer(ListReducer, intialState)

    useEffect( () => {
        localStorage.setItem("favorites",JSON.stringify(state.list))
    },[state.list])

    // Add Favorite Word Func.
    const addFavWord = (word, def) => {
        const wordObj = {
            id: Math.floor(Math.random() * 10000),
            word: word,
            definition: def 
        }

        const updateList = state.list.concat(wordObj)

        dispatch({
            type:'ADD_WORD',
            payload:{word: updateList }
        })
    }
    
    const value = {
        list : state.list,
        addFavWord     
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