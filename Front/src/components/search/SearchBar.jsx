import { useState } from "react";
import style from './Search.module.css'

export default function SearchBar({onSearch, characters, setCharacters}) {
   const [id, setId] = useState('')
   function onChange(e){
      setId(e.target.value)
   }
   return (
      <div className={style.search}>
         <input className={style.input} type='number' onChange={(e) => onChange(e)}/>
         <button className={style.button} onClick={() => onSearch(id, characters, setCharacters)}>Agregar</button>
      </div>
   );
}
