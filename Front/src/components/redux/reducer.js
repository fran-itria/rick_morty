import { ADD_FAVORITE, CLEAN_DETAIL, DETAIL_CHARACTER, FILTER, GET_FAV, ORDER } from "./actions";

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
            return { ...state, myFavorites: payload, allCharacters: payload }
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
            if (payload === 'All') {
                return {
                    ...state,
                    myFavorites: allCharacters
                }
            } else return {
                ...state,
                myFavorites: allCharacters.filter((character) => character.gender === payload)
            }
        case ORDER:
            const chars = [...state.myFavorites]
            if (payload === 'Ascendente') {
                return {
                    ...state,
                    myFavorites: chars.sort((a, b) => a.id - b.id)
                }

            }
            if (payload === 'Descendente') {
                return {
                    ...state,
                    myFavorites: chars.sort((a, b) => b.id - a.id)
                }
            }
        default:
            return state
    }
}

export default reducer