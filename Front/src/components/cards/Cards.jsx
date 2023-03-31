import Card from '../card/Card';
import style from './Cards.module.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFavorites } from '../redux/actions';

export default function Cards({ characters, onClose}) {
   const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFavorites())
    }, [])
   return (
         <div className={style.contenedor}>
            <div className={style.cards}>
               {characters && characters.map((character) => {
                  return <Card
                     key={character.id}
                     name={character.name}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     id={character.id}
                     onClose={onClose}
                  />
               })}
            </div>
      </div>
   );
}
