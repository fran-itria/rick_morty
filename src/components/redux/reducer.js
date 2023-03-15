import { ADD_FAVORITE, FILTER, ORDER, REMOVE_FAVORITE } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
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
                    myFavorites: allCharacters.sort((a, b) => a.id - b.id)
                }
            } else if (payload === 'Descendente') {
                return {
                    ...state,
                    myFavorites: allCharacters.sort((a, b) => b.id - a.id)
                }
            }
        default:
            return state
    }
}

export default reducer