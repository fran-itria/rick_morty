// FUNCION PARA EL CASO EN EL QUE NO HAYA UN GENERO SELECCIONADO
export function notGender(order, state, chars, allCharacters) {
    if (order === 'Default') return { ...state, myFavorites: allCharacters }
    if (order === 'Ascendente') {
        return {
            ...state,
            myFavorites: chars.sort((a, b) => a.id - b.id)
        }
    }
    if (order === 'Descendente') {
        return {
            ...state,
            myFavorites: chars.sort((a, b) => b.id - a.id)
        }
    }
}

// FUNCION PARA EL CASO EN EL QUE NO HAYA UN ORDEN SELECCIONADO
export function notOrder(state, gender, allCharacters) {
    if (gender === 'Default') {
        console.log('gender is' + gender)
        return {
            ...state,
            myFavorites: []
        }
    }
    if (gender === 'All') {
        return {
            ...state,
            myFavorites: allCharacters
        }
    } else return {
        ...state,
        myFavorites: allCharacters.filter((character) => character.gender === gender)
    }
}