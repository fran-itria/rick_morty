import { DETAIL_CHARACTER } from "../components/redux/actions";

////////////////////////////////

// FUNCION SEARCH APP
const URL_BASE = "http://localhost:3001/rickandmorty";
const KEY = '179180d9d086.4e91a167f3c86bcbbb24';

export function onSearch(characterId, characters, setCharacters) {
    // const KEY = '179180d9d086.4e91a167f3c86bcbbb24';
    fetch(`${URL_BASE}/onsearch/${characterId}`) // ?key=${KEY}
        .then(res => res.json())
        .then(data => {
            (data.name && !characters.find((char) => char.id === data.id)) ?
                setCharacters((oldCharacters) => [...oldCharacters, data])
                : window.alert('There is no character with that id')
        })
}

////////////////////////////////

// FUNCTIONS FORM 

// LOGIN FORM
const username = ''
const password = ''
export function login(userData, setAccess, navigate) {
    if (userData.password == password && userData.username == username) {
        setAccess(true)
        navigate('/about')
    } else window.alert('Correo o contraseña incorrectos')
}
// VALIDATE FORM 
export function validate(inputs) {
    let errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i
    if (!regexEmail.test(inputs.username) || inputs.username.length > 35) errors.username = 'Debe ser un correo electronico'
    if (regexEmail.test(inputs.username) && inputs.username.length > 35) errors.username = 'Debe ser menor a 35 carateres'
    if (!inputs.password.match(/\d/)) errors.password = 'Debe contener al menos un numero'
    if (inputs.password.match(/\d/) && (inputs.password.length < 6 || inputs.password.length > 8)) errors.password = 'Debe contener entre 6 y 8 caracteres'
    return errors
}

////////////////////////////////

// ACTION DETAIL FUNCTION 
export function restDetail(id) {
    return async function (dispatch) {
        const response = await fetch(`${URL_BASE}/detail/${id}`)
        const detail = await response.json()
        const episodeOne = await fetch(`${detail.episode[0]}?key=${KEY}`)
        const first = await episodeOne.json()
        const episodeFinal = await fetch(`${detail.episode[detail.episode.length - 1]}?key=${KEY}`)
        const last = await episodeFinal.json()
        dispatch({ type: DETAIL_CHARACTER, payload: { detail, first, last } })
        // dispatch({ type: DETAIL_CHARACTER, payload: detail })
    }
}