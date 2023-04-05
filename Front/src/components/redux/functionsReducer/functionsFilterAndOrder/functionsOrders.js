import { notOrder } from "./functionsNot"

// FUNCION PARA ORDENAR FAVORITOS CUANDO HAY UN GENERO SELECCIONADO 
export default function ordered(order, state, allCharacters, gender) {
    if (order) {
        return orderByOrderSelected(order, state, allCharacters, gender)
    } else {
        return notOrder(state, gender, allCharacters)
    }
}

// FUNCION PARA ORDENAR LOS FAVORITOS FILTRADOS CUANDO HAY UN ORDEN SELECCIONADO
function orderByOrderSelected(order, state, allCharacters, gender) {
    const genero = allCharacters.filter((character) => character.gender === gender)
    if (order === 'Default') return notOrder(state, gender, allCharacters)
    if (order === 'Ascendente') {
        return ascendente(state, allCharacters, gender, genero)
    }
    if (order === 'Descendente') {
        return descendente(state, allCharacters, gender, genero)
    }
}

// FUNCION PARA EL CASO QUE HAYA UN ORDEN ASCENDENTE
function ascendente(state, allCharacters, gender, genero) {
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
function descendente(state, allCharacters, gender, genero) {
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