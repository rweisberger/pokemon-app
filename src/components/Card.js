import { useContext, useEffect, useState} from "react";

import PokeContext from "./Context";
import "./Card.css";

const Card = ({pokemon:{name, abilities, types, weight, height, sprites}}) => {
    const { isBattleActive, competitors, setCompetitors } = useContext(PokeContext);
    const { ability } = abilities[0];
    const { type } = types[0];
    const typeColor = {'grass': 'green', 
                      'water': 'blue',
                      'fire': 'red'};
    let color= typeColor[type.name];
    const [isSelected, setIsSelected] = useState(false)

    name = name[0].toUpperCase() + name.slice(1);

    useEffect(() => {
        if(competitors.length === 2) setIsSelected(false);
    },[competitors.length]);

    const handleClick = () => {
        if(isBattleActive){
            setIsSelected(true);
            setCompetitors([...competitors, name]);
        }
    }
    
    return(
        <>
        {isBattleActive ? (
            <div className="card" style={{ "width": "15rem", "background": isSelected ? "lightgreen": ""}} onClick={handleClick}>
                <h5 className="card-title mt-2">{name}</h5>
                <img className="card-img-top" src={sprites.front_default} alt={`Front view of ${name}`}/>
                <div className="card-body">
                    <div> <b>Height:</b> {height} <b>Weight:</b> {weight}</div>
                    <div> <b>Ability:</b> {ability.name} </div>
                    <div style={{ "color": color}}> <b>Type:</b> {type.name} </div>
                </div>
            </div>
        ) : (
        <div className="card" style={{ "width": "15rem", "background": 'white'}}>
            <h5 className="card-title mt-2">{name}</h5>
            <img className="card-img-top" src={sprites?.front_default} alt={`Front view of ${name}`}/>
            <div className="card-body">
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