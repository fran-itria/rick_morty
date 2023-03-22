import { ADD_FAVORITE, DETAIL_CHARACTER, FILTER, GET_CHARACTER, ORDER, REMOVE_FAVORITE } from "./actions";

const initialState = {
    characters: [],
    myFavorites: [],
    allCharacters: [],
    detailCharacter: {},
    firstEpisode: {},
    lastEpisode: {},
}

const reducer = (state = initialState, { type, payload }) => {
    const { allCharacters } = state
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...allCharacters, payload],
                allCharacters: [...allCharacters, payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== payload),
                allCharacters: allCharacters.filter((character) => character.id !== payload)
            }
        case DETAIL_CHARACTER:
            return {
                ...state,
                detailCharacter: payload.detail,
                firstEpisode: payload.first,
                lastEpisode: payload.last
            }
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
            if (payload == 'Ascendente') {
                return {
                    ...state,
                    myFavorites: chars.sort((a, b) => a.id - b.id)
                }

            }
            if (payload == 'Descendente') {
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