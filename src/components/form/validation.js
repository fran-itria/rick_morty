export default function validate(inputs) {
    let errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i
    if (!regexEmail.test(inputs.username) || inputs.username.length > 35) errors.username = 'Debe ser un correo electronico'
    if (regexEmail.test(inputs.username) && inputs.username.length > 35) errors.username = 'Debe ser menor a 35 carateres'
    if (!inputs.password.match(/\d/)) errors.password = 'Debe contener al menos un numero'
    if (inputs.password.match(/\d/) && (inputs.password.length < 6 || inputs.password.length > 8)) errors.password = 'Debe contener entre 6 y 8 caracteres'
    // console.log(inputs.password.match(/[0-9]/))
    return errors
}