const TreasureTpl = ({chest}) => {

    const locationElt = chest.common_locations === null ? <li> ??? </li> : chest.common_locations.map(location => {return (<li key={location}>{location}</li>)})

    const dlcElt = chest.dlc === false ? null : <li>DLC</li>

    const dropsElt = (
    <li> Drops : 
        <ul>
            {chest.drops.map(drop => (<li key={drop}>{drop}</li>))}
        </ul>
    </li>
    )

    return (
        <ul key={chest.id}>
            <img src={chest.image}/>
            <li>Treasures name : {chest.name}</li>
            <li>Description : {chest.description} </li>
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

export default TreasureTpl