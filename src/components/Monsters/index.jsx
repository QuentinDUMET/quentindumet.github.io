import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import axios from "axios"
import MonsterTpl from "../Templates/Monster"

const Monsters = ({currentPage, prevPage, nextPage, totalPages, setTotalPages, entryPerPage}) => {

    const [enemies, setEnemies] = useState([])

    useEffect(() => {
        setTotalPages(Math.ceil(enemies.length / entryPerPage));
    }, [enemies, entryPerPage, setTotalPages]);

    const indexOfLastEnemies = currentPage * entryPerPage;
    const indexOfFirstEnemies = indexOfLastEnemies - entryPerPage;
    const currentEnemies = enemies.slice(indexOfFirstEnemies, indexOfLastEnemies);

    const getEnemies = async () => {
        try {
        const response = await axios(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters`)
        const enemy = response.data.data
        enemy.sort((a, b) => a.id - b.id)
        setEnemies(enemy);
        } catch (e) {
            console.log("Impossible de récupérer les infos depuis l'API", e);
        }
    }

    useEffect(() => {
        getEnemies()
    }, [])

    const ulElt = currentEnemies.map(enemy => {
        return <MonsterTpl key={enemy.id} enemy={enemy}/>
    })

    return (
        <div>
            {ulElt}
            <button onClick={prevPage} disabled={currentPage === 1}>Page précédente</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Page suivante</button>
        </div>
    )
}

Monsters.propTypes = {
    currentPage: PropTypes.number,
    prevPage: PropTypes.func,
    nextPage: PropTypes.func,
    totalPages: PropTypes.number,
    setTotalPages: PropTypes.func,
    entryPerPage: PropTypes.number
}

export default Monsters