import { useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import CardDisplay from './components/CardDisplay';
import UserContext from './components/Context';

function App() {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [pokemons, setPokemons] = useState();
  const [displayedPokemons, setDisplayedPokemons] = useState();



  let context = {pokemons, setPokemons, displayedPokemons, setDisplayedPokemons, player1, setPlayer1, player2, setPlayer2}
  
//   useEffect(() => {    
//     let results = [];

//     for(let i = 1; i < 9; i++){
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
//         .then((response) => {
//             const { name, abilities, types, weight, height, sprites } = response.data;
//             results.push({name, abilities, types, weight, height, sprites});
//             setPokemons(results);
//         })
//         .catch((error)=> {
//             console.log(error);
//         }) 
//         // setPokemons([...results]);

//     }   
// // eslint-disable-next-line 
// },[])

  return (

    <div className="App">
      <UserContext.Provider value={context}> 
        <SearchBar />
        <button type="button" className="btn btn-primary">Primary</button>
        <h1>Pokemon</h1>
        <CardDisplay />
      </UserContext.Provider>

    </div>
  );
}

export default App;
