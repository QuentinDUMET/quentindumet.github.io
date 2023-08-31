import { useState, useEffect } from "react"
import axios from "axios"
import TreasureTpl from "./Treasure"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

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
        return (
            <Grid key={chest.id} xs="auto">
                <TreasureTpl key={chest.id} chest={chest} />
            </Grid>
        )
    })

    
    return (
        <main>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={3} spacing={15} disableEqualOverflow>
                    {ulElt}
                </Grid>
            </Box>
        </main>
    )
}

export default Treasures