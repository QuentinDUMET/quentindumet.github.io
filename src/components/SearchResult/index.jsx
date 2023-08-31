import DialogCreature from "./Dialog";
import CreatureTpl from "../Creatures/Creature";
import MonsterTpl from "../Monsters/Monster";
import MaterialsTpl from "../Materials/Material"
import EquipmentTpl from "../Equipments/Equipment";
import TreasureTpl from "../Treasures/Treasure";


const SearchResult = ({searchToShow}) => {
    console.log(searchToShow);

    return (
    searchToShow.category === "creatures" ? <DialogCreature creature={searchToShow}/> :
    // searchToShow.category === "creatures" ? <CreatureTpl creature={searchToShow}/> : 
    searchToShow.category === "monsters" ? <MonsterTpl enemy={searchToShow}/> :
    searchToShow.category === "materials" ? <MaterialsTpl item={searchToShow}/> :
    searchToShow.category === "equipment" ? <EquipmentTpl stuff={searchToShow}/> :
    searchToShow.category === "treasure" ? <TreasureTpl chest={searchToShow}/> :
    null
    )
}

export default SearchResult