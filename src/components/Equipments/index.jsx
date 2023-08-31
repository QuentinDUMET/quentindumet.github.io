import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import axios from "axios"
import EquipmentTpl from "./Equipment"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const Equipment = ({currentPage, setTotalPages, entryPerPage}) => {

    const [stuff, setStuff] = useState([])
    
    useEffect(() => {
        setTotalPages(Math.ceil(stuff.length / entryPerPage));
    }, [stuff, entryPerPage, setTotalPages]);

    const indexOfLastStuff = currentPage * entryPerPage;
    const indexOfFirstStuff = indexOfLastStuff - entryPerPage;
    const currentStuffs = stuff.slice(indexOfFirstStuff, indexOfLastStuff);

    const getstuffs = async () => {
        try {
        const response = await axios(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment`)
        const stuffs = response.data.data
        stuffs.sort((a, b) => a.id - b.id)
        setStuff(stuffs);
        } catch (e) {
            console.log("Impossible de récupérer les infos depuis l'API", e);
        }
    }

    useEffect(() => {
        getstuffs()
    }, [])
    
    const ulElt = currentStuffs.map(stuff => {
        return (
            <Grid key={stuff.id} xs="auto">
                <EquipmentTpl key={stuff.id} stuff={stuff}/>
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

Equipment.propTypes = {
    currentPage: PropTypes.number,
    prevPage: PropTypes.func,
    nextPage: PropTypes.func,
    totalPages: PropTypes.number,
    setTotalPages: PropTypes.func,
    entryPerPage: PropTypes.number
}

export default Equipment