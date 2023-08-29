import { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Autocomplete } from "@mui/material"

const Searchbar = ({setResearch}) => {

    const [allEntries, setAllEntries] = useState([])

    const getAllEntries = async () => {
        try {
        const response = await axios(`https://botw-compendium.herokuapp.com/api/v3/compendium/all`)
        setAllEntries(response.data.data);
        } catch (e) {
            console.log("Impossible de récupérer les infos depuis l'API", e);
        }
    }

    useEffect(() => {
        getAllEntries()
    }, [])



    const toPascalCase = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }


    const toPascalEntries = allEntries.map(entry => ({
        ...entry,
        name: toPascalCase(entry.name),
        category: toPascalCase(entry.category)
    }));

    return (
        <div className='searchbar'>
            <Autocomplete
            id="searchbar"
            options={toPascalEntries.sort((a, b) => -b.category.localeCompare(a.category))}
            groupBy={(option) => option.category}
            getOptionLabel={option => option.name}
            // isOptionEqualToValue(toPascalEntries.filter(entry => entry.name === option.name))
            sx={{ width: 500 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
            onChange={(event, selectedValue) => {
                selectedValue ? setResearch(selectedValue.name) : setResearch('')
            }}
            isOptionEqualToValue={(option, value) => 
                option &&
                value &&
                option.category === value.category &&
                (option.common_locations || []).every(location => (value.common_locations || []).includes(location)) &&
                option.cooking_effect === value.cooking_effect &&
                option.description === value.description &&
                option.dlc === value.dlc &&
                option.edible === value.edible &&
                option.hearts_recovered === value.hearts_recovered &&
                option.id === value.id &&
                option.image === value.image &&
                option.name === value.name
            }
            />
        </div>
    )
}

export default Searchbar