import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/cards/Cards.jsx'
import Nav from "./components/nav/Nav.jsx";
import About from './components/about/About';
import Detail from './components/detail/Detail.jsx'
import Form from './components/form/Form';
import Favorites from "./components/favorites/Favorites";
import { useDispatch } from 'react-redux';
import { removeFavorite } from './components/redux/actions';

function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  // const username = 'franco08river@gmail.com'
  // const password = 'pepito20'
  const username = ''
  const password = ''

  function onSearch(characterId) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = '179180d9d086.4e91a167f3c86bcbbb24';
    fetch(`${URL_BASE}/character/${characterId}?key=${KEY}`)
      .then(res => res.json())
      .then(data => {
        (data.name && !characters.find((char) => char.id === data.id)) ?
          setCharacters((oldCharacters) => [...oldCharacters, data])
          : window.alert('There is no character with that id')
      })
  }
  function onClose(id) {
    setCharacters(characters.filter((character) => character.id != id))
    dispatch(removeFavorite(id))

  }
  function login(userData) {
    if (userData.password == password && userData.username == username) {
      setAccess(true)
      navigate('/about')
    } else window.alert('Correo o contraseña incorrectos')
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='App'>
      {location.pathname != '/' ?
        <Nav onSearch={onSearch} />
        :
        <Form login={login} />
      }
      <Routes>
        <Route path='/home' element={<Cards
          characters={characters}
          onClose={onClose}
        />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </div>
  )
}

export default App
