const MonsterTpl = ({enemy}) => {

    const locationElt = enemy.common_locations === null ? <li> ??? </li> : enemy.common_locations.map(location => {return (<li key={location}>{location}</li>)})

    const dlcElt = enemy.dlc === false ? null : <li>DLC</li>

    const dropsElt = enemy.drops === null || enemy.drops.length === 0 ? <li>No drops</li> : (
        <li> Drops : 
            <ul>
                {enemy.drops.map(drop => (<li key={drop}>{drop}</li>))}
            </ul>
        </li>
        )

    return (
        <ul key={enemy.id}>
            <img src={enemy.image}/>
            <li>Enemy name : {enemy.name}</li>
            <li>Description : {enemy.description} </li>
            {dropsElt}
            <li>Location :
                <ul>
                    {locationElt}
                </ul>
            </li>
            {dlcElt}
        </ul>
    )
}

export default MonsterTpl