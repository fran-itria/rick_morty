import { Link } from 'react-router-dom';
import style from './Card.module.css'
import { getFavorites } from "../redux/actions";
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios'

// export default 
function Card({ name, species, id, gender, image, origin, status, onClose, myFavorites }) {
   const [isFav, setIsFav] = useState(false)
   const email = useSelector(state => state.session)
   const dispatch = useDispatch()

   const addFavorite = (character) => {
      axios.post('fav', character)
   }
   const removeFavorite = async (id) => {
      await axios.delete(`fav/${id}`)
      dispatch(getFavorites())
   }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFavorite(id)
      } else {
         console.log(email)
         setIsFav(true)
         addFavorite({ name, species, id, gender, image, origin, status, email })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.padre}>
         <div className={style.card}>
            {
               isFav ? (
                  <button onClick={handleFavorite} className={style.favorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite} className={style.favorite}>🤍</button>
               )
            }
            <button className={style.close} onClick={() => onClose(id)}>X</button>
            <img className={style.image} src={image} alt="" />
            <div className={style.name}>
               <div className={style.text}>
                  <Link to={`/detail/${id}`} className={style.link}>
                     <h2>{name}</h2>
                  </Link>
               </div>
            </div>
            <div className={style.information}>
               <h2 className={style.specie}>{species}</h2>
               <h2 className={style.gender}>{gender}</h2>
            </div>
         </div>
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, null)(Card)

