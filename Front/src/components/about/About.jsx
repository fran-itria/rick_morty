import React from "react";
import style from './About.module.css'

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.information}>
                <h1 className={style.h1}>Ricki and Morty </h1>
                <p className={style.p}>Por el momento lo que se puede hacer con la app es buscar mediante el buscador de la esquina
                    superior derecha a un personaje de la serie animada con su id, es decir escribiendo un número.</p>
                <h3 className={style.k3}>Autor: Franco Itria</h3>
            </div>
        </div>
    )
}