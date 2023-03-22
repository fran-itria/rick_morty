import { restDetail } from "../../functions/functions";

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORTIE'
export const DETAIL_CHARACTER = 'DETAIL_CHARACTER'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'


const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = '179180d9d086.4e91a167f3c86bcbbb24';

export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character }
}

export const removeFavorite = (id) => {
    return { type: REMOVE_FAVORITE, payload: id }
}

export const detailCharacter = (id) => {
    return restDetail(id, URL_BASE, KEY)
}

export function filterCards(gender) {
    return { type: FILTER, payload: gender }
}

export function orderCards(orden) {
    return { type: ORDER, payload: orden }
}
