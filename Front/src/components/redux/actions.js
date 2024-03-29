import axios from 'axios'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORTIE'
export const DETAIL_CHARACTER = 'DETAIL_CHARACTER'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const GET_FAV = 'GET_FAV'
export const FILTER_FAVORITES = 'FILTER_FAVORITES'
export const GENDER_ORDER = 'GENDER_ORDER'
export const NAV_BACKGROUND = 'NAV_BACKGROUND'
export const HANDLER_SESSION = 'HANDLER_SESSION'
export const SESSION_CLOSE = 'SESSION_CLOSE'

const URL_BASE = 'http://localhost:3001'
const KEY = '179180d9d086.4e91a167f3c86bcbbb24';

export const handlerSession = (email) => {
    return {type: HANDLER_SESSION, payload: email}
}

export const sessionClose = () => {
    return {type: SESSION_CLOSE}
}

export const getFavorites = (gender, order, email) => {
    return async function (dispatch) {
        const user = await axios(`user?email=${email}`)
        dispatch({ type: GET_FAV, payload: { response: user.data.Favorites, gender, order } })
    }
}

// export const getFavoriteFilter = (gender, order) => {
//     return async function (dispatch) {
//         const response = await axios(`${URL_BASE}/rickandmorty/fav`)
//         dispatch({ type: GET_FAVORITE_FILTER, payload: {response: response.data, gender, order} })
//     }
// }

export const detailCharacter = (id) => {
    return async function (dispatch) {
        const response = await fetch(`${URL_BASE}/detail/${id}`)
        const detail = await response.json()
        const episodeOne = await fetch(`${detail.episode[0]}?key=${KEY}`)
        const first = await episodeOne.json()
        const episodeFinal = await fetch(`${detail.episode.at(-1)}?key=${KEY}`)
        const last = await episodeFinal.json()
        dispatch({ type: DETAIL_CHARACTER, payload: { detail, first, last } })
        // dispatch({ type: DETAIL_CHARACTER, payload: detail })
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

export function filterFavorites(gender, order) {
    return { type: FILTER_FAVORITES, payload: { gender, order } }
}

export const genderOrder = (gender, order) => {
    return { type: GENDER_ORDER, payload: { gender, order } }
}

export const navBackground = (component) => {
    return { type: NAV_BACKGROUND, payload: component}
}