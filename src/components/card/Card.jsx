import { Link } from 'react-router-dom';
import style from './Card.module.css'
import { addFavorite, removeFavorite } from "../redux/actions";
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// export default 
function Card({ name, species, id, gender, image, onClose, addFavorite, removeFavorite, myFavorites}) { //, addFavorite, removeFavorite, myFavorites
   const [isFav, setIsFav] = useState(false)
   // HOOKS
   // const myFavorites = useSelector(state => state.myFavorites)
   // const dispatch = useDispatch()

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         // CON HOOKS
         // dispatch(removeFavorite(id))
         // SIN HOOKS
         removeFavorite(id)
      }
      if (!isFav) {
         setIsFav(true)
         // CON HOOKS
         // dispatch(addFavorite({name, species, id, gender, image}))
         // SIN HOOKS
         addFavorite({ name, species, id, gender, image })
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

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFavorite: (character) => {
//          dispatch(addFavorite(character));
//       },
//       removeFavorite: (id) => {
//          dispatch(removeFavorite(id));
//       }
//    }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Card)

