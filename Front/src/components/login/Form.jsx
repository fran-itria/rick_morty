import React, { useEffect, useState } from "react";
import style from "./Form.module.css";
import { validate } from "../../functions/functions.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handlerSession } from "../redux/actions";

export default function Form({setAccess, navigate }) {
  const [select, setSelect] = useState("login");
  const [inputs, setInputs] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch()

  function handleChange(event) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  }
  async function handleAccess(event, inputs) {
    event.preventDefault();
    const { username, password } = inputs;
    try {
      const user = await axios(`login?email=${username}&password=${password}`);
      if (user) {
        setAccess(true)
        navigate('/about')
        dispatch(handlerSession(inputs.username))
      };
    } catch (error) {
      const alert = error.response.data.error;
      window.alert(alert);
    }
  }
  async function handleRegister(event) {
    event.preventDefault();
    try {
      const newUser = await axios.post(`login`, inputs);
      if(newUser) {
        console.log(newUser)
        window.alert('Registro exitoso')
      }
    } catch (error) {
      const alert = error.response.data.error;
      window.alert(alert);
    }
  }
  function handleForm(event) {
    setSelect(event.target.name);
  }
  return (
    <div className={style.conteiner}>
      <div className={style.select}>
        <button name="login" onClick={handleForm}>
          Login
        </button>
        <button name="register" onClick={handleForm}>
          Register
        </button>
      </div>
      {select == "login" ? ( // FORMULARIO DE LOGIN
        <form
          className={style.form}
          onSubmit={(event) => handleAccess(event, inputs)}
        >
          <div className={style.inputs}>
            <div>
              {errors.username && (
                <p className={style.warning}>¡{errors.username}!</p>
              )}
              <label className={style.label}>Username:</label>
              <input
                className={errors.username ? style.danger : style.input}
                value={inputs.username}
                name="username"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              {errors.password && (
                <p className={style.warning}>¡{errors.password}!</p>
              )}
              <label className={style.label}>Password:</label>
              <input
                className={errors.password ? style.danger : style.input}
                value={inputs.password}
                type="password"
                name="password"
                onChange={(event) => {
                  handleChange(event);
                }}
              ></input>
            </div>
          </div>
          <button
            className={
              errors.username || errors.password ? style.disabled : style.button
            }
            type="submit"
          >
            LOGIN
          </button>
        </form>
      ) : (
        // FROMULARIO DE REGISTRO
        <form className={style.form} onSubmit={(event) => handleRegister(event)}>
          <div className={style.inputs}>
            <div>
              {errors.username && (
                <p className={style.warning}>¡{errors.username}!</p>
              )}
              <label className={style.label}>Username:</label>
              <input
                className={errors.username ? style.danger : style.input}
                value={inputs.username}
                name="username"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              {errors.password && (
                <p className={style.warning}>¡{errors.password}!</p>
              )}
              <label className={style.label}>Password:</label>
              <input
                className={errors.password ? style.danger : style.input}
                value={inputs.password}
                type="password"
                name="password"
                onChange={(event) => {
                  handleChange(event);
                }}
              ></input>
            </div>
          </div>
          <button
            className={
              errors.username || errors.password ? style.disabled : style.button
            }
            type="submit"
          >
            REGISTER
          </button>
        </form>
      )}
    </div>
  );
}
