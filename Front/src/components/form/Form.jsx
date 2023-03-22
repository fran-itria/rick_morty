import React, { useEffect } from 'react'
import style from './Form.module.css'
import { validate } from '../../functions/functions.js'

export default function Form({ login, setaccess, navigate }) {
    const [inputs, setInputs] = React.useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    })

    function handleChange(event) {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
        setErrors(validate({ ...inputs, [event.target.name]: event.target.value }))
    }
    // function validate(inputs) {
    //     let errors = {}
    //     const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i
    //     if (!regexEmail.test(inputs.username) || inputs.username.length > 35) errors.username = 'Debe ser un correo electronico'
    //     if (regexEmail.test(inputs.username) && inputs.username.length > 35) errors.username = 'Debe ser menor a 35 carateres'
    //     if (!inputs.password.match(/\d/)) errors.password = 'Debe contener al menos un numero'
    //     if (inputs.password.match(/\d/) && (inputs.password.length < 6 || inputs.password.length > 8)) errors.password = 'Debe contener entre 6 y 8 caracteres'
    //     return errors
    // }

    function handleSubmit() {
        login(inputs, setaccess, navigate)
    }
    return (
        <div className={style.conteiner}>
            <form className={style.form} onSubmit={() => handleSubmit()}>
                <div className={style.inputs}>
                    <div>
                        {errors.username && <p className={style.warning}>¡{errors.username}!</p>}
                        <label className={style.label}>Username:</label>
                        <input
                            className={errors.username ? style.danger : style.input}
                            value={inputs.username}
                            name='username'
                            onChange={handleChange}>
                        </input>
                    </div>
                    <div>
                        {errors.password && <p className={style.warning}>¡{errors.password}!</p>}
                        <label className={style.label}>Password:</label>
                        <input
                            className={errors.password ? style.danger : style.input}
                            value={inputs.password}
                            type='password'
                            name='password'
                            onChange={(event) => { handleChange(event) }}>
                        </input>
                    </div>
                </div>
                <button className={(errors.username || errors.password) ? style.disabled : style.button} type='submit'>LOGIN</button>
            </form>
        </div>
    )
}