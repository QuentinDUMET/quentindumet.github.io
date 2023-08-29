import CreatureTpl from "../Templates/Creature";
import MonsterTpl from "../Templates/Monster";
import MaterialsTpl from "../Templates/Material"
import EquipmentTpl from "../Templates/Equipment";
import TreasureTpl from "../Templates/Treasure";


const SearchResult = ({searchToShow}) => {

    return (
    searchToShow.category === "creatures" ? (<CreatureTpl creature={searchToShow}/>) : 
    searchToShow.category === "monsters" ? <MonsterTpl enemy={searchToShow}/> :
    searchToShow.category === "materials" ? <MaterialsTpl item={searchToShow}/> :
    searchToShow.category === "equipment" ? <EquipmentTpl stuff={searchToShow}/> :
    searchToShow.category === "treasure" ? <TreasureTpl chest={searchToShow}/> :
    null
    )

}

export default SearchResult