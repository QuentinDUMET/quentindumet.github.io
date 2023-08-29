const CreatureTpl = ({creature}) => {    

    const cookingElt = creature.cooking_effect !== undefined && creature.cooking_effect !== "" ? <li>Cooking effect : {creature.cooking_effect} </li> : <li>No cooking effect</li>

    const locationElt = creature.common_locations === null ? <li> ??? </li> : creature.common_locations.map(location => {return (<li key={location}>{location}</li>)})

    const dlcElt = creature.dlc === false ? null : <li>DLC</li>

    const edibleElt = creature.edible === true && creature.hearts_recovered !== 0 ? <li>Hearts recovered : {creature.hearts_recovered}</li> : <li>Non-food</li>

    const dropsElt =  creature.drops !== undefined && creature.drops !== null && creature.drops.length !== 0 ? (
        <li> Drops : 
            <ul>
                {creature.drops.map(drop => (<li key={drop}>{drop}</li>))}
            </ul>
        </li>
    ) :
    <li>No drops</li> 

    return (
            <ul key={creature.id}>
                <img src={creature.image}/>
                <li>Creature name : {creature.name}</li>
                <li>Description : {creature.description} </li>
                {edibleElt}
                {cookingElt}
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

export default CreatureTpl