import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from './Detail.module.css'

export default function Detail() {
    const [character, setCharacter] = useState()
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(response => response.json())
                .then((char) => {
                    console.log(char)
                    setCharacter(char);
                })
                .catch((err) => {
                    window.alert("No hay personajes con ese ID");
                });
            return setCharacter({})
    }, [id])
    if (!character) return (<h1 style={{ background: 'white' }}>LOADING...</h1>)
    return (
        <div className={style.conteiner} >
            <div className={style.introduction}>
                <h4 className={style.p}>A continuación encontrarás una lista de detalles del personaje seleccionado,
                    podrás ver su nombre en el centro, su estado, su género, especie,
                    cantidad de episodios en los que aparece y su origen</h4>
            </div>
            <h1 className={style.name}>{character.name}</h1>
            <div className={style.information}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <span className={style.subTitle}>Status:</span>
                        <span className={style.text}>{character.status}</span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Gender:</span>
                        <span className={style.text}>{character.gender} </span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Specie:</span>
                        <span className={style.text}>{character.species}</span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Episodes:</span>
                        <span className={style.text}>{character.episode?.length}</span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Origin:</span>
                        <span className={style.text}>{character.origin?.name}</span>
                    </li>
                </ul>
                <img src={character.image} className={style.image} />
            </div>
            <div className={style.button}>
                <button className={style.volver} onClick={() => navigate('/home')}>Volver</button>
            </div>
        </div>
    )
}