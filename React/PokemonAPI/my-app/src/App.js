import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(response => response.json())
      .then(response => setCharacters(response.results))
  }, [])

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      {characters.length > 0 && characters.map((character) => {
        return (<p> {character.name} </p>)
      })}
    </div>
  );
}

export default App;
