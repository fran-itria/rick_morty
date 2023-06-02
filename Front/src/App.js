import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/login/Form";
import Favorites from "./components/favorites/Favorites";
// import { removeFavorite } from './components/redux/actions';
import { onSearch } from "./functions/functions";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id != id));
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  axios.defaults.baseURL = "http://localhost:3001/";
  return (
    <div className="App">
      {pathname !== "/" ? (
        <Nav
          onSearch={onSearch}
          characters={characters}
          setCharacters={setCharacters}
          setAccess={setAccess}
          navigate={navigate}
        />
      ) : (
        <Form setAccess={setAccess} navigate={navigate} />
      )}
      <Routes>
        {characters && (
          <Route
            path="/cards"
            element={<Cards characters={characters} onClose={onClose} />}
          />
        )}
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
