import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import axios from "axios"
import MaterialsTpl from "../Templates/Material"

const Materials = ({currentPage, prevPage, nextPage, totalPages, setTotalPages, entryPerPage}) => {

    const [material, setMaterial] = useState([])

    useEffect(() => {
        setTotalPages(Math.ceil(material.length / entryPerPage));
    }, [material, entryPerPage, setTotalPages]);
    

    const indexOfLastMaterial = currentPage * entryPerPage;
    const indexOfFirstMaterial = indexOfLastMaterial - entryPerPage;
    const currentMaterial = material.slice(indexOfFirstMaterial, indexOfLastMaterial);

    const getMaterials = async () => {
        try {
        const response = await axios(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials`)
        const materials = response.data.data
        materials.sort((a, b) => a.id - b.id)
        setMaterial(materials);
        } catch (e) {
            console.log("Impossible de récupérer les infos depuis l'API", e);
        }
    }

    useEffect(() => {
        getMaterials()
    }, [])
    
    const ulElt = currentMaterial.map(item => {
        return <MaterialsTpl key={item.id} item={item}/>
    })

    return (
        <div>
            {ulElt}
            <button onClick={prevPage} disabled={currentPage === 1}>Page précédente</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Page suivante</button>
        </div>
    )
} 

Materials.propTypes = {
    currentPage: PropTypes.number,
    prevPage: PropTypes.func,
    nextPage: PropTypes.func,
    totalPages: PropTypes.number,
    setTotalPages: PropTypes.func,
    entryPerPage: PropTypes.number
}

export default Materials