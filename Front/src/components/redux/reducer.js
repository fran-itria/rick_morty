import { CLEAN_DETAIL, DETAIL_CHARACTER, FILTER, GET_FAV, GET_FAVORITE_FILTER, ORDER } from "./actions";
import filterAndOrder from "./functionsReducer/functionsFilter";
import getFavoritesAndFilter from "./functionsReducer/functionGetFavorite";
import order from "./functionsReducer/functionOrder";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    detailCharacter: {},
    firstEpisode: {},
    lastEpisode: {},
}

const reducer = (state = initialState, { type, payload }) => {
    const { allCharacters } = state
    switch (type) {
        case GET_FAV:
            return getFavoritesAndFilter(state, payload.response, payload.gender, payload.order)

        // case GET_FAVORITE_FILTER:
        //     const paramState = {
        //         ...state,
        //         myFavorites: payload.response,
        //         allCharacters: payload.response
        //     }
        //     return filterAndOrder(paramState, payload.gender, payload.order, paramState.allCharacters)

        case DETAIL_CHARACTER:
            return {
                ...state,
                detailCharacter: payload,
                // firstEpisode: payload.first,
                // lastEpisode: payload.last
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                detailCharacter: {},
            };
        case FILTER:
            // FUNCION PARA ORDENAR EL FILTRADO SI HAY UN ORDEN SELECCIONADO
            return filterAndOrder(state, payload.gender, payload.orden, allCharacters)
        case ORDER:
            return order(state, payload)
        default:
            return state
    }
}

export default reducer