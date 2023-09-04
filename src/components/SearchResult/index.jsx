import PropTypes from 'prop-types'
import CreatureDialog from "../Creatures/CreatureDialog"
import EquipmentDialog from '../Equipments/EquipmentDialog';
import MaterialDialog from '../Materials/MaterialDialog';
import MonsterDialog from '../Monsters/MonsterDialog';
import TreasureDialog from '../Treasures/TreasureDialog';



const SearchResult = ({ searchToShow }) => {

    return (
        searchToShow.category === "creatures" ? <CreatureDialog creature={searchToShow} />  : 
        searchToShow.category === "monsters" ? <MonsterDialog enemy={searchToShow}/> :
        searchToShow.category === "materials" ? <MaterialDialog item={searchToShow}/> :
        searchToShow.category === "equipment" ? <EquipmentDialog stuff={searchToShow}/> :
        searchToShow.category === "treasure" ? <TreasureDialog chest={searchToShow}/> :
        null
    )
}

export default SearchResult

SearchResult.propTypes = {
    searchToShow: PropTypes.object,
};