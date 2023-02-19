
import { useContext, useState } from "react";
import UserContext from "./Context";


const SearchBar =() => {
    const [searchName, setSearchName] = useState('');
    const [isActiveSearch, setIsActiveSearch] = useState(false)
    const { pokemons, setDisplayedPokemons } = useContext(UserContext);
    
    const findPokemon = (e) => {
        e.preventDefault();
        if(searchName.length){
            let matches = pokemons.filter(pokemon => pokemon.name.includes(searchName))
            setDisplayedPokemons(matches);
            setIsActiveSearch(true);
            setSearchName('');
        } else {
            setDisplayedPokemons(pokemons);
            setIsActiveSearch(false);   
        }
    }
 
    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search Pokemon" aria-label="Recipient's username" aria-describedby="basic-addon2" value={searchName} onChange={e => setSearchName(e.currentTarget.value)}/>
            <div class="input-group-append">
                <button class="input-group-text" id="basic-addon2" type="submit" onClick={findPokemon}>{isActiveSearch ? "View All" : "Search"}</button>
            </div>
         </div>
      
    )
}
export default SearchBar;