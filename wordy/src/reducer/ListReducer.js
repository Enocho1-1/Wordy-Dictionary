export const ListReducer = (state, action) => {
    const {type, payload} = action

    switch(type){
        case "ADD_WORD":
            return
        default:
            throw new Error('Unable to add word to list')
    }
}