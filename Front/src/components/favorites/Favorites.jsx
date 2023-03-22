import { useEffect } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { filterCards, orderCards, removeFavorite } from "../redux/actions"
import style from './Favorites.module.css'

export default function Favorites(props) {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.myFavorites)

    const filter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    const order = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const remove = (id) => {
        dispatch(removeFavorite(id))
    }

    return (
        <div>
            {/* FILTER AND ORDER */}
            <h1 className={style.h1}>List of your favorite Rick and Morty characters</h1>
            <div className={style.options}>
                <p className={style.p}>Select gender:</p>
                <div className={style.contentSelect}>
                    <select name="" onChange={(event) => filter(event)} className={style.select}>
                        <option></option>
                        <option value='All'>All</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Genderless'>Genderless</option>
                        <option value='unknown'>unknown</option>
                    </select>
                </div>
                <p className={style.p}>Select order:</p>
                <div className={style.contentSelect}>
                    <select name="" onChange={(event) => order(event)} className={style.select}>
                        <option></option>
                        <option value='Ascendente'>Ascendente</option>
                        <option value='Descendente'>Descendente</option>
                    </select>
                </div>
            </div>

            {/* FAVORITE CHARACTER */}
            {favorites.length == 0 && <h1 style={{ color: 'white' }}>Not found characters with this gender</h1>}
            {favorites && favorites.map(character => {
                return <div className={style.container} key={character.id}>
                    <div className={style.information}>
                        <button onClick={() => remove(character.id)} className={style.fav}>❤️</button>
                        <div className={style.texts}>
                            <h2 className={style.name}>{character.name}</h2>
                            <h2 className={style.specie}>{character.species}</h2>
                            <h2 className={style.gender}>{character.gender}</h2>
                            <h2> {character.id} </h2>
                        </div>
                        <img src={character.image} alt={character.name} className={style.image} />
                    </div>
                </div>
            })}
        </div>
    )
}

// export function mapStateToProps(state) {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps, null)(Favorites)