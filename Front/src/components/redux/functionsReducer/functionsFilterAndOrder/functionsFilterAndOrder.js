import { notGender } from "./functionsNot"
import ordered from "./functionsOrders"

// FUNCION PARA ORDENAR Y/O FILTRAR LOS FAVORITOS EN CASO QUE HAYA ORDEN Y/O GENERO SELECIONADO
export default function filterAndOrder(state, gender, order, allCharacters) {
    if (gender) {
        return ordered(order, state, allCharacters, gender)
    }
    else {
        const chars = [...state.myFavorites]
        return notGender(order, state, chars, allCharacters)
    }
}

