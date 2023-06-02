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

// VALIDATE FORM 
export function validate(inputs) {
    let errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i
    if (!regexEmail.test(inputs.username) || inputs.username.length > 35) errors.username = 'Debe ser un correo electronico'
    if (regexEmail.test(inputs.username) && inputs.username.length > 35) errors.username = 'Debe ser menor a 35 carateres'
    if (inputs.password.length < 6) errors.password = 'Debe contener mínimo 6 caracteres'
    if (inputs.password.length >= 6 && !inputs.password.match(/\d/)) errors.password = 'Debe contener al menos un numero'
    return errors
}
