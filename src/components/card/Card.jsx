import { Link } from 'react-router-dom';
import style from './Card.module.css'
import { addFavorite, removeFavorite } from "../redux/actions";
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Card(props) {
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = (props) => {
      if (isFav) {
         setIsFav(false)
         props.removeFavorite(props.id)
      } else {
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={style.card}>
            {
               isFav ? (
                  <button onClick={handleFavorite} className={style.favorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite} className={style.favorite}>🤍</button>
               )
            }
            <button className={style.close} onClick={() => props.onClose(props.id)}>X</button>
         <img className={style.image} src={props.image} alt="" />
         <div className={style.name}>
            <div className={style.text}>
               <Link to={`/detail/${props.id}`} className={style.link}>
                  <h2>{props.name}</h2>
               </Link>
            </div>
         </div>
         <div className={style.information}>
            <h2 className={style.specie}>{props.species}</h2>
            <h2 className={style.gender}>{props.gender}</h2>
         </div>
      </div>
   );
}


export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: (character) => { dispatch(addFavorite(character)) },
      removeFavorite: (id) => { dispatch(removeFavorite(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

