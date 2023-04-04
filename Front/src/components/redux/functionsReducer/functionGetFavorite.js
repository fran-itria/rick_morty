import filterAndOrder from "./functionsFilter"

export default function getFavoritesAndFilter(state, response, gender, order){
    if (gender) {
        const paramState = {
            ...state,
            myFavorites: response,
            allCharacters: response
        }
        return filterAndOrder(paramState, gender, order, paramState.allCharacters)
    }
    return {
        ...state,
        myFavorites: response,
        allCharacters: response
    }
}