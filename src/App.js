import { useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import CardDisplay from './components/CardDisplay';
import BattleButton from './components/BattleButton';
import UserContext from './components/Context';

function App() {
  const [isBattleActive, setIsBattleActive] = useState(false);
  const [competitors, setCompetitors] = useState([]);
  const [pokemons, setPokemons] = useState();
  const [displayedPokemons, setDisplayedPokemons] = useState();

  let context = {pokemons, setPokemons, displayedPokemons, setDisplayedPokemons, isBattleActive, setIsBattleActive, competitors, setCompetitors}
  
  return (

    <div className="App">
      <UserContext.Provider value={context}> 
        <SearchBar />
        <BattleButton />
        <h1>Pokemon</h1>
        <CardDisplay />
      </UserContext.Provider>
    </div>
  );
}

export default App;
