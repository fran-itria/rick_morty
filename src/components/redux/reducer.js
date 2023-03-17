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
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }

        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== payload),
                allCharacters: state.allCharacters.filter((character) => character.id !== payload)
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
            if (payload === 'Ascendente') {
                return {
                    ...state,
                    allCharacters: allCharacters.sort((a, b) => a.id - b.id)
                }
            } else if (payload === 'Descendente') {
                return {
                    ...state,
                    allCharacters: allCharacters.sort((a, b) => b.id - a.id)
                }
            }
        default:
            return state
    }
}

export default reducer