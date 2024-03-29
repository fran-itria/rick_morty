import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavorites,
  filterFavorites,
  genderOrder,
  navBackground,
} from "../redux/actions";
import style from "./Favorites.module.css";

export default function Favorites(props) {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState();
  const [gender, setGender] = useState();
  const favorites = useSelector((state) => state.myFavorites);
  const filters = useSelector((state) => state.filters);
  const email = useSelector(state => state.session)

  const filter = (event) => {
    setGender(event.target.value);
    dispatch(filterFavorites(event.target.value, orden));
  };
  const order = (event) => {
    setOrden(event.target.value);
    dispatch(filterFavorites(gender, event.target.value));
  };
  const removeFavorite = async (name) => {
    await axios.delete(`fav/${name}`);
    dispatch(getFavorites(filters.gender, filters.order, email));
  };
  useEffect(() => {
    dispatch(getFavorites(filters.gender, filters.order, email));
    dispatch(navBackground("Favorites"));
  }, []);

  useEffect(() => {
    if (typeof gender != "undefined" || typeof orden != "undefined") {
      dispatch(genderOrder(gender, orden));
    }
  }, [gender, orden]);

  return (
    <div className={style.padre}>
      <div>
        <br></br>
        <h1 className={style.h1}>
          List of your favorite Rick and Morty characters
        </h1>

        {/* FILTER AND ORDER */}
        <div className={style.options}>
          <p className={style.p}>Select gender:</p>
          <div className={style.contentSelect}>
            <select
              name="filtro"
              onChange={(event) => filter(event)}
              className={style.select}
            >
              <option value="Default"></option>
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </select>
          </div>
          <p className={style.p}>Select order:</p>
          <div className={style.contentSelect}>
            <select
              name="orden"
              onChange={(event) => order(event)}
              className={style.select}
            >
              <option value="Default"></option>
              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>
          </div>
        </div>

        {filters.gender && favorites?.length > 0 ? (
          <div className={style.genderCount}>
            <p className={style.p}>
              {filters.gender} characters: {favorites.length}
            </p>
          </div>
        ) : (
          <></>
        )}
        {/* Si no hay personajes favoritos mostrar el siguiente titulo */}
        {Array.isArray(favorites) && favorites.length == 0 ? (
          <h1 style={{ color: "white" }}>Select your favorite characters</h1>
        ) : (
          <></>
        )}
        {/* FAVORITE CHARACTER */}
        {favorites &&
          favorites.map((character) => {
            return (
              <div className={style.container} key={character.id}>
                <div className={style.information}>
                  <button
                    onClick={() => removeFavorite(character.name)}
                    className={style.fav}
                  >
                    ❤️
                  </button>
                  <div className={style.texts}>
                    <h2 className={style.name}>{character.name}</h2>
                    <h2 className={style.specie}>{character.species}</h2>
                    <h2 className={style.gender}>{character.gender}</h2>
                  </div>
                  <img
                    src={character.image}
                    alt={character.name}
                    className={style.image}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
