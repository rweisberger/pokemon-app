import axios from "axios";
import { useContext, useEffect } from "react";

import Card from "./Card";
import UserContext from "./Context";
import "./CardDisplay.css";

const CardDisplay = () => {
    const { setPokemons, displayedPokemons, setDisplayedPokemons, isBattleActive, competitors, setCompetitors } = useContext(UserContext);

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
