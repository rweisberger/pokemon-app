import { useContext,useEffect, useState} from "react";

import UserContext from "./Context";
import "./Card.css";

const Card = ({pokemon:{name, abilities, types, weight, height, sprites}}) => {
    const { pokemons, isBattleActive, competitors, setCompetitors } = useContext(UserContext);
    const [{ ability }] = abilities;
    const [{type}] = types
    const typeColor = {'grass': 'green', 
                      'water': 'blue',
                      'fire': 'red'};
    let color= typeColor[type.name];
    const [isSelected, setIsSelected] = useState(false)

    name = name[0].toUpperCase() + name.slice(1);

    // useEffect(() => {
    //     if (competitors.length === 2) {
    //         alert(`${competitors[0]} v. ${competitors[1]}: Battle on!`)
    //         let card1 = (pokemons.find(pokemon => pokemon.name === competitors[0].toLowerCase()));
    //         let card2 = (pokemons.find(pokemon => pokemon.name === competitors[1].toLowerCase()));
    //         console.log(card1.types[0].type.name, card2.types[0].type.name);
    //         if(card1.types[0].type.name === card2.types[0].type.name) {
    //             console.log('check evolution');
    //         } else if(card1.types[0].type.name === 'fire' && card2.types[0].type.name === "grass") {
    //             console.log(card1.name, 'wins')
    //         } else if(card1.types[0].type.name === 'grass' && card2.types[0].type.name === "water") {
    //             console.log(card1.name, 'wins')
    //         } else if(card1.types[0].type.name === 'water' && card2.types[0].type.name === "fire") {
    //         console.log(card1.name, 'wins')
    //         } else { 
    //             console.log(card2.name, 'wins')
    //         }
    //         setCompetitors([]);
    //         setIsSelected(false);
    //         } 
    // // eslint-disable-next-line
    // },[competitors.length])

    const handleClick = () => {
        console.log(name);
        setIsSelected(true);
        setCompetitors([...competitors, name])
    }
    
    return(
        <>
        {isBattleActive ? (
            <div className="card" style={{ "width": "18rem", "background": isSelected ? "lightgreen": ""}} onClick={handleClick}>
                <img className="card-img-top" src={sprites?.front_default} alt={`Front view of ${name}`}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div> <b>Height:</b> {height} <b>Weight:</b> {weight}</div>
                    <div> <b>Ability:</b> {ability.name} </div>
                    <div style={{ "color": color}}> <b>Type:</b> {type.name} </div>
                </div>
            </div>
        ) : (
        <div className="card" style={{ "width": "15rem", "background": 'white'}}>
            <img className="card-img-top" src={sprites?.front_default} alt={`Front view of ${name}`}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div> <b>Height:</b> {height} <b>Weight:</b> {weight}</div>
                <div> <b>Ability:</b> {ability.name} </div>
                <div style={{ "color": color}}> <b>Type:</b> {type.name} </div>
            </div>
        </div>
        )}
    </>
    )
}
export default Card;