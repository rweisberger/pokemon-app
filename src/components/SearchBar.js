
import { useContext } from "react";
import PokeContext from "./Context";


const SearchBar =() => {
    const { pokemons, setDisplayedPokemons } = useContext(PokeContext);
    
    const findPokemon = (e) => {
        // e.preventDefault();
        let searchName = e.currentTarget.value
        let matches = pokemons.filter(pokemon => pokemon.name.includes(searchName))
        setDisplayedPokemons(matches);
    }
 
    return (
        <div className="input-group w-75 mx-auto mt-3">
            <input type="text" className="form-control" placeholder="Search Pokemon" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => findPokemon(e)}/>
        </div>
    )
}
export default SearchBar;