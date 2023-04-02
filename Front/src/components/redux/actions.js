import axios from 'axios'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORTIE'
export const DETAIL_CHARACTER = 'DETAIL_CHARACTER'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const GET_FAV = 'GET_FAV'

const URL_BASE = 'http://localhost:3001'
export const getFavorites = () => {
    return async function (dispatch) {
        const response = await axios(`${URL_BASE}/rickandmorty/fav`)
        dispatch({ type: GET_FAV, payload: response.data })
    }
}

export const detailCharacter = (id) => {
    return async function (dispatch) {
        const response = await fetch(`${URL_BASE}/detail/${id}`)
        const detail = await response.json()
        /* const episodeOne = await fetch(`${detail.episode[0]}?key=${KEY}`)
        const first = await episodeOne.json()
        const episodeFinal = await fetch(`${detail.episode.at(-1)}?key=${KEY}`)
        const last = await episodeFinal.json()
        dispatch({ type: DETAIL_CHARACTER, payload: { detail, first, last } }) */
        dispatch({ type: DETAIL_CHARACTER, payload: detail })
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

export function filterCards(gender, orden) {
    return { type: FILTER, payload: {gender, orden} }
}

export function orderCards(orden) {
    return { type: ORDER, payload: orden }
}
