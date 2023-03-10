import { Link } from 'react-router-dom';
import style from './Card.module.css'

export default function Card({ name, species, gender, image, id, onClose }) {
   return (
      <div className={style.card}>
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
   );
}
