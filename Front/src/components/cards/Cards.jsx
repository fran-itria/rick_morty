import Card from '../card/Card';
import style from './Cards.module.css'
import { useDispatch } from "react-redux";
import { navBackground } from "../redux/actions";
import { useEffect } from 'react';

export default function Cards({ characters, onClose }) {
   const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(navBackground('Cards'))
    }, [])
   return (
      <div className={style.contenedor}>
         {characters.length == 0 ?
         <div className={style.notFound}>
            <h1 className={style.h1}> No se encuentran personajes</h1>
         </div>
            :
            <div className={style.cards}>
               {characters && characters.map((character) => {
                  return <Card
                     key={character.id}
                     name={character.name}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     origin={character.origin}
                     status={character.status}
                     id={character.id}
                     onClose={onClose}
                  />
               })}
            </div>
         }
      </div>
   );
}
