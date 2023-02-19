import axios from "axios";
import { useContext, useEffect } from "react";

import Card from "./Card";
import PokeContext from "./Context";
import "./CardDisplay.css";

const CardDisplay = () => {
    const { pokemons, setPokemons, displayedPokemons, setDisplayedPokemons, isBattleActive, setIsBattleActive, competitors, setCompetitors } = useContext(PokeContext);

    useEffect(() => {    
        const requests = [];
        const results = [];
        
        for(let i = 1; i < 10; i++){
            requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
        }   
        Promise.all(requests).then(responses => {
            responses.forEach(response => {
                console.log(response.data)
                const { name, abilities, types, weight, height, sprites } = response.data;
                results.push({name, abilities, types, weight, height, sprites});   
            })
        })
        .catch((error)=> console.log("error", error))
        .finally(() => {
            setPokemons([...results]);
            setDisplayedPokemons([...results]);
        });
    // eslint-disable-next-line 
    },[]);

    useEffect(() => {
        if (competitors.length === 2) {
            let competitor1 = competitors[0];
            let competitor2 = competitors[1];
            let pokemon1 = (pokemons.find(pokemon => pokemon.name === competitors[0].toLowerCase()));
            let pokemon2 = (pokemons.find(pokemon => pokemon.name === competitors[1].toLowerCase()));
            let type1 = pokemon1.types[0].type.name;
            let type2 = pokemon2.types[0].type.name;
            if(type1 === type2) {
                // If the pokemon are the same type in the cards, I think they are they same pokemon in different evolutionary states and thus we can compare the weight. 
                // It think pokemon evolution is similar to growth. 
                let evo1 = pokemon1.weight;
                let evo2 = pokemon2.weight;
                if(evo1 > evo2){
                    alert(`${competitor1} wins!`);
                } else {
                    alert(`${competitor2} wins!`);
                }
            } else if(type1 === 'fire' && type2 === "grass") {
                alert(`${competitor1} wins!`);
            } else if(type1 === 'grass' && type2 === "water") {
                alert(`${competitor1} wins!`);
            } else if(type1 === 'water' && type2 === "fire") {
                alert(`${competitor1} wins!`);
            } else { 
                alert(`${competitor2} wins!`);
            }
            setCompetitors([]);
            setIsBattleActive(false);
            } 
    // eslint-disable-next-line
    },[competitors.length]);

  return (
    <div className="outer-container">
        <div className="inner-container">
            <div></div>
            {displayedPokemons?.length ? (
                displayedPokemons.map((pokemon, i) => <Card pokemon={pokemon} isBattle={isBattleActive} key={i}/>)
            ) : (
                <div>Pokemon Loading...</div>
            ) }
        </div>
    </div>
  )
}

export default CardDisplay;
