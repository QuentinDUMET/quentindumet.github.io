import CreatureDialog from "../Dialog/CreatureDialog"

import MonsterTpl from "../Monsters/Monster";
import MaterialsTpl from "../Materials/Material"
import EquipmentTpl from "../Equipments/Equipment";
import TreasureTpl from "../Treasures/Treasure";


const SearchResult = ({searchToShow}) => {
    return (
    searchToShow.category === "creatures" ? <CreatureDialog creature={searchToShow}/> : 
    searchToShow.category === "monsters" ? <MonsterTpl enemy={searchToShow}/> :
    searchToShow.category === "materials" ? <MaterialsTpl item={searchToShow}/> :
    searchToShow.category === "equipment" ? <EquipmentTpl stuff={searchToShow}/> :
    searchToShow.category === "treasure" ? <TreasureTpl chest={searchToShow}/> :
    null
    )
}

export default SearchResult