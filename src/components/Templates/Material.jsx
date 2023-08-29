const MaterialsTpl = ({item}) => {

    const cookingElt = item.cooking_effect === "" ? <li>No cooking effect</li> : <li>Cooking effect : {item.cooking_effect} </li>

    const locationElt = item.common_locations.map(location => {return (<li key={location}>{location}</li>)})

    const dlcElt = item.dlc === false ? null : <li>DLC</li>

    const heartELt = item.hearts_recovered === 0 ? "None" : item.hearts_recovered

    return (
    <ul key={item.id}>
        <img src={item.image}/>
        <li>Item name : {item.name}</li>
        <li>Description : {item.description} </li>
        <li>Hearts recovered if eaten raw : {heartELt}</li>
        {cookingElt}
        <li>Location :
            <ol> 
                {locationElt}
            </ol> 
        </li>
        {dlcElt}
    </ul>            
    )
}

export default MaterialsTpl