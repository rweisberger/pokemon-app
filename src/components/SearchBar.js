
import { useContext, useState } from "react";
import UserContext from "./Context";


const SearchBar =() => {
    const [searchName, setSearchName] = useState('');
    const { pokemons, setDisplayedPokemons } = useContext(UserContext);
    // console.log('pokemons',pokemons)

    const findPokemon = (e) => {
        e.preventDefault();
        if(searchName.length){
            // console.log(searchName);
            let matches = pokemons.filter(pokemon => pokemon.name.includes(searchName))
            setDisplayedPokemons(matches);
        } else {
            setDisplayedPokemons(pokemons)
        }
    }
 
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search Pokemon" aria-label="Search" value={searchName} onChange={e => setSearchName(e.currentTarget.value)}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={findPokemon}>Search</button>
        </form>
    )
}
export default SearchBar;