import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { detailCharacter, cleanDetail } from "../redux/actions";
import style from './Detail.module.css'

export default function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const detail = useSelector(state => state.detailCharacter)
    // const first = useSelector(state => state.firstEpisode)
    // const last = useSelector(state => state.lastEpisode)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailCharacter(id))
        return () => dispatch(cleanDetail())
    }, [])

    if (Object.keys(detail).length == 0) return <div className={style.loadingPadre}>
        <h1 className={style.loading}>LOADING...</h1>
    </div>
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
                    {/* {first.hasOwnProperty('name') ?
                        <li className={style.item}>
                            <span className={style.subTitle}>First episode: </span>
                            <span className={style.text}>{first.name}</span>
                        </li>
                        :
                        <></>
                    }
                    {first.hasOwnProperty('name') ?
                        <li className={style.item}>
                            <span className={style.subTitle}>Last episode: </span>
                            <span className={style.text}>{last.name}</span>
                        </li>
                        :
                        <></>
                    } */}
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