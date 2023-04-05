import filterAndOrder from "./functionsFilterAndOrder/functionsFilterAndOrder"

//FUNCION PARA QUE SI TENGO LOS PERSONAJES FAVORTIOS FILTRADOS, CUANDO ELIMINE UNO, LOS PERSONAJES SIGAN FILTRADOS, Y NO ME TRAIGA TODOS DE VUELTA
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