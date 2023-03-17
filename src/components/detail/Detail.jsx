import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { detailCharacter } from "../redux/actions";
import style from './Detail.module.css'

export default function Detail() {
    // const [character, setCharacter] = useState()
    const { id } = useParams()
    const navigate = useNavigate()
    const detail = useSelector(state => state.detailCharacter)
    const first = useSelector(state => state.firstEpisode)
    const last = useSelector(state => state.lastEpisode)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailCharacter(id))
    }, [])

    if (!detail) return (<h1 style={{ background: 'white' }}>LOADING...</h1>)
    return (
        <div className={style.conteiner} >
            <div className={style.introduction}>
                <h4 className={style.p}>A continuación encontrarás una lista de detalles del personaje seleccionado,
                    podrás ver su nombre en el centro, su estado, su género, especie,
                    cantidad de episodios en los que aparece y su origen</h4>
            </div>
            <h1 className={style.name}>{detail.name}</h1>
            <div className={style.information}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <span className={style.subTitle}>Status:</span>
                        <span className={style.text}>{detail.status}</span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Gender:</span>
                        <span className={style.text}>{detail.gender} </span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Specie:</span>
                        <span className={style.text}>{detail.species}</span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Episodes:</span>
                        <span className={style.text}>{detail.episode?.length}</span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>First episode: </span>
                        <span className={style.text}>{first.name}</span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Last episode: </span>
                        <span className={style.text}>{last.name}</span>
                    </li>
                    <li className={style.item}>
                        <span className={style.subTitle}>Origin:</span>
                        <span className={style.text}>{detail.origin?.name}</span>
                    </li>
                </ul>
                <img src={detail.image} className={style.image} />
            </div>
            <div className={style.button}>
                <button className={style.volver} onClick={() => navigate('/cards')}>Volver</button>
            </div>
        </div>
    )
}

/* useEffect(() => {
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
    if (!character) return (<h1 style={{ background: 'white' }}>LOADING...</h1>) */