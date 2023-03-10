import React, { useEffect } from 'react'
import style from './Form.module.css'
import validate from './validation'

export default function Form({ login }) {
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
    function handleSubmit() {
        login(inputs)
    }
    return (
        <div className={style.conteiner}>
            <form className={style.form}>
                <div className={style.inputs}>
                    <div>
                        {errors.username && <p className={style.warning}>¡{errors.username}!</p>}
                        <label className={style.label}>Username:</label>
                        <input
                            className={style.input}
                            value={inputs.username}
                            name='username'
                            onChange={handleChange}>
                        </input>
                    </div>
                    <div>
                        {errors.password && <p className={style.warning}>¡{errors.password}!</p>}
                        <label className={style.label}>Password:</label>
                        <input
                            className={style.input}
                            value={inputs.password}
                            type='password'
                            name='password'
                            onChange={(event) => { handleChange(event) }}>
                        </input>
                    </div>
                </div>
                <button className={(errors.username || errors.password) ? style.disabled : style.button} onClick={() => handleSubmit(inputs)}>LOGIN</button>
            </form>
        </div>
    )
}