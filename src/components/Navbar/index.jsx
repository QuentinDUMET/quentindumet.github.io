import { NavLink } from 'react-router-dom';
import * as React from 'react';


const Navlink = ({page, setPage, setResearch}) => {


    const handleChange = (event, newValue) => {
        setPage(newValue);
        setResearch("");
    };

    return (
        <>
            <NavLink to="creatures"><img src="../../src/assets/Creatures.png"/></NavLink>
            <NavLink to="monsters"><img src="../../src/assets/Monsters.png"/></NavLink>
            <NavLink to="materials"><img src="../../src/assets/Materials.png"/></NavLink>
            <NavLink to="equipments"><img src="../../src/assets/Equipment.png"/></NavLink>
            <NavLink to="treasures"><img src="../../src/assets/Treasure.png"/></NavLink>
        </>
    );
}


const Navbar = ({page, setPage, setResearch}) => {
    
    return (
        <nav>
            <Navlink page={page} setPage={setPage} setResearch={setResearch} />
        </nav>
    )
}

export default Navbar