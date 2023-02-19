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

    useEffect(() => {
        if(competitors.length === 2) setIsSelected(false);
    },[competitors.length])

    const handleClick = () => {
        console.log(name);
        setIsSelected(true);
        setCompetitors([...competitors, name]);
    }
    
    return(
        <>
        {isBattleActive ? (
            <div className="card" style={{ "width": "15rem", "background": isSelected ? "lightgreen": ""}} onClick={handleClick}>
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