import React, { useEffect } from "react";
import style from './About.module.css'
import { useDispatch } from "react-redux";
import { navBackground } from "../redux/actions";

export default function About() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(navBackground('About'))
    }, [])
    return (
        <div className={style.container}>
            <div className={style.information}>
                <p className={style.p}>En esta app podrasa busacr mediante un número un personaje, podras agregarlo a favoritos si así lo deseas
                y podrás filtrarlos por el género y ordenarlos si usted gusta</p>
                <h3 className={style.k3}>Autor: Franco Itria</h3>
            </div>
        </div>
    )
}