import axios from "axios";
import { useContext, useEffect } from "react";

import Card from "./Card";
import UserContext from "./Context";

const CardDisplay = () => {
    const {pokemons, setPokemons } = useContext(UserContext);

    useEffect(() => {    
        let results = [];

        for(let i = 1; i < 9; i++){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((response) => {
                const { name, abilities, types, weight, height, sprites } = response.data;
                results.push({name, abilities, types, weight, height, sprites});
                setPokemons(results);
            })
            .catch((error)=> {
                console.log(error);
            }) 
            // setPokemons([...results]);

        }   
    // eslint-disable-next-line 
    },[])
        console.log(pokemons);
    
  return (
    <div className="container">
        {pokemons?.length ? (
            pokemons.map((pokemon, i) => <Card pokemon={pokemon} key={i}/>)
        ) : (
            <div>NO POKES</div>
        ) }
    </div>
  )
}

export default CardDisplay;
