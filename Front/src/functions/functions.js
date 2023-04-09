import { DETAIL_CHARACTER } from "../components/redux/actions";

////////////////////////////////

// FUNCION SEARCH APP
const URL_BASE = "http://localhost:3001";
export function onSearch(characterId, characters, setCharacters) {
    fetch(`${URL_BASE}/onsearch/${characterId}`)
        .then(res => res.json())
        .then(data => {
            (data.name && !characters.find((char) => char.id === data.id)) ?
                setCharacters((oldCharacters) => [...oldCharacters, data])
                : window.alert('There is no character with that id')
        })
}

////////////////////////////////

//  <---- FUNCTIONS FORM ---->

// LOGIN FORM
const username = 'FrancoItria01@gmail.com'
const password = 'pepito01'
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
