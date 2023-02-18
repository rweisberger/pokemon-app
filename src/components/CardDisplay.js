import axios from "axios";
import { useContext, useEffect } from "react";

import Card from "./Card";
import UserContext from "./Context";

const CardDisplay = () => {
    const { setPokemons, displayedPokemons, setDisplayedPokemons, isBattleActive } = useContext(UserContext);

    useEffect(() => {    
        let results = [];

        for(let i = 1; i < 10; i++){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((response) => {
                const { name, abilities, types, weight, height, sprites } = response.data;
                results.push({name, abilities, types, weight, height, sprites});
                setPokemons(results);
                setDisplayedPokemons(results);

            })
            .catch((error)=> {
                console.log(error);
            }) 
        }   
    // eslint-disable-next-line 
    },[])
    
  return (
    <div className="container">
        {displayedPokemons?.length ? (
            displayedPokemons.map((pokemon, i) => <Card pokemon={pokemon} isBattle = {isBattleActive} key={i}/>)
        ) : (
            <div>Pokemon Loading...</div>
        ) }
    </div>
  )
}

export default CardDisplay;
