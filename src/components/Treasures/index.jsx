import { useState, useEffect } from "react"
import axios from "axios"
import TreasureTpl from "../Templates/Treasure"

const Treasures = () => {

    const [treasure, setTreasure] = useState([])

    const getTreasures = async () => {
        try {
        const response = await axios(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure`)
        const treasures = response.data.data
        treasures.sort((a, b) => a.id - b.id)
        setTreasure(treasures);
        } catch (e) {
            console.log("Impossible de récupérer les infos depuis l'API", e);
        }
    }

    useEffect(() => {
        getTreasures()
    }, [])
    
    const ulElt = treasure.map(chest => {
        return <TreasureTpl key={chest.id} chest={chest} />
    })

    
    return (
        <div>
            {ulElt}
        </div>
    )
}

export default Treasures