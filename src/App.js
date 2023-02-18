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
  
  const handleClick = () => {
    setIsBattleActive(true);
    // console.log('battle', isBattleActive)
  }

  return (

    <div className="App">
      <UserContext.Provider value={context}> 
        <SearchBar />
        <button type="button" className="btn btn-primary" onClick={handleClick}>Battle Mode</button>
 
        <h1>Pokemon</h1>
        <CardDisplay />
      </UserContext.Provider>

    </div>
  );
}

export default App;
