import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        setCharacters(response.data.results);
      });
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      {characters.length > 0 &&
        characters.map((character) => {
          return <p> {character.name} </p>;
        })}
    </div>
  );
}

export default App;
