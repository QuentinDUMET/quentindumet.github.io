import Searchbar from "../Searchbar"
import Navbar from "../Navbar"
import SearchResult from "../SearchResult"
import Materials from "../Materials"
import Equipments from "../Equipments"
import Monsters from "../Monsters"
import Treasures from "../Treasures"
import Creatures from "../Creatures"
import { useState, useEffect } from "react"
import axios from "axios";

import logo from '../../assets/logoBOTW.png'
import './App.css'


const App = () => {

    const [research, setResearch] = useState("")

    const [page, setPage] = useState("Creatures");
    
    const [searchToShow, setSearchToShow] = useState("")

    const [currentPage, setCurrentPage] = useState(1);

    const [totalPages , setTotalPages ] = useState(1);

    const entryPerPage = 12;

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    
    const pageGestion = {
        currentPage: currentPage,
        prevPage: prevPage,
        nextPage: nextPage,
        totalPages: totalPages ,
        setTotalPages: setTotalPages,
        entryPerPage: entryPerPage,
    }

    const handleResearche = async research => {
        try {
        const response = await axios(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${research}`)
        setSearchToShow(response.data.data)
        } catch (e) {
            console.log("Impossible de récupérer les infos depuis l'API", e)
        }
    }
    
    useEffect(() => {
        if (research !== "") {
        handleResearche(research)
    }}, [research])

    return (
        <>
            <header>
                <img id="logo" src={logo} />
                <Navbar page={page} setPage={setPage} setResearch={setResearch} />
                <Searchbar setResearch={setResearch} />                
            </header> 
            {(research !== "") ? <SearchResult searchToShow={searchToShow} /> :
            (page === "Creatures") ? <Creatures {...pageGestion} /> : 
            (page === "Monsters") ? <Monsters {...pageGestion} /> : 
            (page === "Materials") ? <Materials {...pageGestion} /> : 
            (page === "Equipments") ? <Equipments {...pageGestion} /> :
            <Treasures {...pageGestion} />}
        </>
    )
}

export default App

// Récupérer les boutons et les intégrer dans un composant footer pour ne pas les dupliquer dans chaque page
// Penser à clean tout les objet et props
// et factoriser la gestion de page et le fetch

// Essayer d'intégret le setTotalPage au fetch