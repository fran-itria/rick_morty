export default function order(state, payload) {
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
}