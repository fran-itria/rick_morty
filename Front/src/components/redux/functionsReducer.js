// FUNCION PARA ORDENAR EL FILTRADO SI HAY O NO UN ORDEN SELECCIONADO
export default function filterAndOrder(state, gender, order, allCharacters) {
    if (order) {
        const filt = allCharacters
        if (order === 'Ascendente') {
            return ascendente(state, filt, gender)
        }
        if (order === 'Descendente') {
            return descendente(state, filt, gender)
        }
    } else {
        return notOrder(state, gender, allCharacters)
    }
}

// FUNCION PARA EL CASO QUE HAYA UN ORDEN ASCENDENTE
function ascendente(state, filt, gender) {
    const genero = filtro(filt, gender)
    if (gender === 'All') {
        return {
            ...state,
            myFavorites: ordenarAscendente(filt)
        }
    } else return {
        ...state,
        myFavorites: ordenarAscendente(genero)
    }

}
// FUNCION PARA ORDENAR DE MENOR A MAYOR 
function ordenarAscendente(array) {
    return array.sort((a, b) => a.id - b.id)
}

// FUNCION PARA EL CASO QUE HAYA UN ORDEN DESCENDENTE
function descendente(state, filt, gender) {
    const genero = filtro(filt, gender)
    if (gender === 'All') {
        return {
            ...state,
            myFavorites: ordenarDescendente(filt)
        }
    } else return {
        ...state,
        myFavorites: ordenarDescendente(genero)
    }
}
// FUNCION PARA ORDENAR DE MAYOR A MENOR 
function ordenarDescendente(array) {
    return array.sort((a, b) => b.id - a.id)
}

// FUNCION PARA FILTRAR EL ESATDO
function filtro(array, gender) {
    return array.filter((character) => character.gender === gender)
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
        myFavorites: filtro(allCharacters, gender)
    }
}
