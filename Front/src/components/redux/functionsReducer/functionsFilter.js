// FUNCION PARA ORDENAR EL FILTRADO SI HAY O NO UN ORDEN SELECCIONADO
export default function filterAndOrder(state, gender, order, allCharacters) {
    if (order) {
        if (order === 'Ascendente') {
            return ascendente(state, allCharacters, gender)
        }
        if (order === 'Descendente') {
            return descendente(state, allCharacters, gender)
        }
    } else {
        return notOrder(state, gender, allCharacters)
    }
}

// FUNCION PARA EL CASO QUE HAYA UN ORDEN ASCENDENTE
function ascendente(state, allCharacters, gender) {
    const genero = allCharacters.filter((character) => character.gender === gender)
    if (gender === 'All') {
        return {
            ...state,
            myFavorites: allCharacters.sort((a, b) => a.id - b.id)
        }
    } else return {
        ...state,
        myFavorites: genero.sort((a, b) => a.id - b.id)
    }

}

// FUNCION PARA EL CASO QUE HAYA UN ORDEN DESCENDENTE
function descendente(state, allCharacters, gender) {
    const genero = allCharacters.filter((character) => character.gender === gender)
    if (gender === 'All') {
        return {
            ...state,
            myFavorites: allCharacters.sort((a, b) => b.id - a.id)
        }
    } else return {
        ...state,
        myFavorites: genero.sort((a, b) => b.id - a.id)
    }
}

//FUNCION CUANDO NO HAY UN ORDEN SELECCIONADO
function notOrder(state, gender, allCharacters) {
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
