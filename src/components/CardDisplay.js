import axios from "axios";
import { useContext, useEffect } from "react";

import Card from "./Card";
import UserContext from "./Context";
import "./CardDisplay.css";

const CardDisplay = () => {
    const { pokemons, setPokemons, displayedPokemons, setDisplayedPokemons, isBattleActive, competitors, setCompetitors } = useContext(UserContext);

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

    useEffect(() => {
        if (competitors.length === 2) {
            alert(`${competitors[0]} v. ${competitors[1]}: Battle on!`)
            let card1 = (pokemons.find(pokemon => pokemon.name === competitors[0].toLowerCase()));
            let card2 = (pokemons.find(pokemon => pokemon.name === competitors[1].toLowerCase()));
            console.log(card1.types[0].type.name, card2.types[0].type.name);
            if(card1.types[0].type.name === card2.types[0].type.name) {
                console.log('check evolution');
            } else if(card1.types[0].type.name === 'fire' && card2.types[0].type.name === "grass") {
                console.log(card1.name, 'wins')
            } else if(card1.types[0].type.name === 'grass' && card2.types[0].type.name === "water") {
                console.log(card1.name, 'wins')
            } else if(card1.types[0].type.name === 'water' && card2.types[0].type.name === "fire") {
            console.log(card1.name, 'wins')
            } else { 
                console.log(card2.name, 'wins')
            }
            setCompetitors([]);
            } 
    // eslint-disable-next-line
    },[competitors.length])

    
  return (
    <div className="flex">
        {displayedPokemons?.length ? (
            displayedPokemons.map((pokemon, i) => <Card pokemon={pokemon} isBattle = {isBattleActive} key={i}/>)
        ) : (
            <div>Pokemon Loading...</div>
        ) }
    </div>
  )
}

export default CardDisplay;
