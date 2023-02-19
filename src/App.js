import { useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import CardDisplay from './components/CardDisplay';
import BattleButton from './components/BattleButton';
import PokeContext from './components/Context';

function App() {
  const [isBattleActive, setIsBattleActive] = useState(false);
  const [competitors, setCompetitors] = useState([]);
  const [pokemons, setPokemons] = useState();
  const [displayedPokemons, setDisplayedPokemons] = useState();

  let context = {pokemons, setPokemons, displayedPokemons, setDisplayedPokemons, isBattleActive, setIsBattleActive, competitors, setCompetitors}
  
  return (

    <div className="App">
      <PokeContext.Provider value={context}> 
        <SearchBar />
        <BattleButton />
        <h1 className="display-4">{isBattleActive ? "Pokemon Battle!" : "Pokemon" }</h1>
        <CardDisplay />
      </PokeContext.Provider>
    </div>
  );
}

export default App;
