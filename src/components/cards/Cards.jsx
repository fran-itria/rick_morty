import Card from '../card/Card';
import style from './Cards.module.css'


export default function Cards({ characters, onClose }) {
   return (
      <div className={style.contenedor}>
         <div className={style.cards}>
            {characters.map((character, index) => {
               return <Card
                  key={`${character.name} esta en ${index}`}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  id={character.id}
                  onClose={onClose}
               />
            })}
         </div>
      </div>);
}