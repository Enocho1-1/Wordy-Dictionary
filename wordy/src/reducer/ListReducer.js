export const ListReducer = (state, action) => {
    const {type, payload} = action

    switch(type){
        case "ADD_WORD":
            return {...state, list: payload.word}
        case "DELETE_WORD":
            return {...state, list: payload.word}
        default:
            throw new Error('Unable to add word to list')
    }
}