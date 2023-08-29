import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const IconPositionTabs = ({page, setPage, setResearch}) => {


    const handleChange = (event, newValue) => {
        setPage(newValue);
        setResearch("");
    };

    return (
        <Tabs
            value={page}
            onChange={handleChange}
            aria-label="cat-choice"
            >
            <Tab value="Creatures" icon={<img src="../../src/assets/Creatures.png"/>} />
            <Tab value="Monsters" icon={<img src="../../src/assets/Monsters.png"/>} />
            <Tab value="Materials" icon={<img src="../../src/assets/Materials.png"/>} />
            <Tab value="Equipments" icon={<img src="../../src/assets/Equipment.png"/>} />
            <Tab value="Treasures" icon={<img src="../../src/assets/Treasure.png"/>} />
        </Tabs>
    );
}


const Navbar = ({page, setPage, setResearch}) => {
    
    return (
        <nav>
            <IconPositionTabs page={page} setPage={setPage} setResearch={setResearch} />
        </nav>
    )
}

export default Navbar