const EquipmentTpl = ({stuff}) => {
    
    const statsElt = stuff.properties.attack === null ? null : 
        <li>Stats :
                <ul> 
                <li>Attack : {stuff.properties.attack} </li>
                <li>Defense : {stuff.properties.defense} </li>
            </ul> 
        </li>

    const liElt = stuff.common_locations === null ? <li> ??? </li> : stuff.common_locations.map(location => {return (<li key={location}>{location}</li>)})

    const dlcElt = stuff.dlc === false ? null : <li>DLC</li>

    return (
        <ul key={stuff.id}>
            <img src={stuff.image}/>
            <li>Item name : {stuff.name}</li>
            <li>Description : {stuff.description} </li>
            {statsElt}
            <li>Location :
                <ul>
                    {liElt}
                </ul>
            </li>
            {dlcElt}
        </ul>            
    )
}

export default EquipmentTpl