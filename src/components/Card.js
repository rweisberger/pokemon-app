const Card = ({pokemon:{name, abilities, types, weight, height, sprites}}) => {
    // console.log('props', name, abilities, types, weight, height, sprites)
    const [{ ability }] = abilities;
    const [{type}] = types
    const typeColor = {'grass': 'green', 
                      'water': 'blue',
                      'fire': 'red'};
    let color= typeColor[type.name];

    name = name[0].toUpperCase() + name.slice(1);

    return(
        <div className="card" style={{ "width": "18rem "}}>
            <img className="card-img-top" src={sprites?.front_default} alt={`Front view of ${name}`}/>
            <div className="card-body">
                <h5 class="card-title">{name}</h5>
                <div> <b>Height:</b> {height} <b>Weight:</b> {weight}</div>
                <div> <b>Ability:</b> {ability.name} </div>
                <div style={{ "color": color}}> <b>Type:</b> {type.name} </div>
            </div>
        </div>
    )
}
export default Card;