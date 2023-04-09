import { CLEAN_DETAIL, DETAIL_CHARACTER, FILTER_FAVORITES, GENDER_ORDER, GET_FAV, NAV_BACKGROUND, genderOrder } from "./actions";
import filterAndOrder from "./functionsReducer/functionsFilterAndOrder/functionsFilterAndOrder";
import getFavoritesAndFilter from "./functionsReducer/functionGetFavorite";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    detailCharacter: {},
    firstEpisode: {},
    lastEpisode: {},
    filters: {
        gender: '',
        order: ''
    },
    component: ''
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
                detailCharacter: payload.detail,
                firstEpisode: payload.first,
                lastEpisode: payload.last
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                detailCharacter: {},
            };
        case FILTER_FAVORITES:
            return filterAndOrder(state, payload.gender, payload.order, allCharacters)
        case GENDER_ORDER:
            return {
                ...state,
                filters: {
                    gender: payload.gender,
                    order: payload.order
                }
            }
            case NAV_BACKGROUND:
                return {
                    ...state,
                    component: payload
                }
        default:
            return state
    }
}

export default reducer