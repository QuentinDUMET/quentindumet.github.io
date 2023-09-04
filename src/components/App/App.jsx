import { Routes, Route, useLocation } from "react-router-dom"
import { NavLink } from 'react-router-dom';

import Home from "../Home"
import Searchbar from "../Searchbar"
import Navbar from "../Navbar"
import SearchResult from "../SearchResult"
import Materials from "../Materials"
import Equipments from "../Equipments"
import Monsters from "../Monsters"
import Treasures from "../Treasures"
import Creatures from "../Creatures"
import PageManagement from "../PageManagement";
import { useState, useEffect } from "react"
import axios from "axios";

import logo from '../../assets/logoBOTW.png'
import './App.css'

const App = () => {

    const [research, setResearch] = useState("")

    const [page, setPage] = useState("Creatures");
    
    const [searchToShow, setSearchToShow] = useState({})

    const [currentPage, setCurrentPage] = useState(1);

    const [totalPages , setTotalPages ] = useState(1);

    const entryPerPage = 10;

    const location = useLocation()

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

    useEffect(() => {
        setCurrentPage(1);
    }, [location.pathname])
    
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
        handleResearche(research);
    }}, [research])
    
    return (
        <>
            <header>
                <NavLink to={'/'}><img id="logo" src={logo} /></NavLink>
                <Navbar page={page} setPage={setPage} setResearch={setResearch} />
                <Searchbar setResearch={setResearch} setSearchToShow={setSearchToShow} />
            </header> 
            <Routes>
                <Route path='/' element={<><Home /> <SearchResult searchToShow={searchToShow} /></>} />

                <Route path='/creatures' element={<><Creatures {...pageGestion} /> <SearchResult searchToShow={searchToShow} /></>} />

                <Route path='/monsters' element={<><Monsters {...pageGestion} /> <SearchResult searchToShow={searchToShow} /></> } />
                <Route path='/materials' element={<><Materials {...pageGestion} /> <SearchResult searchToShow={searchToShow} /></> } />
                <Route path='/equipments' element={<><Equipments {...pageGestion} /> <SearchResult searchToShow={searchToShow} /></> } />
                <Route path='/treasures' element={<><Treasures /> <SearchResult searchToShow={searchToShow} /></> } />
            </Routes>
            {location.pathname !== "/" && location.pathname !== "/treasures" && (
                <footer>
                    <PageManagement 
                        prevPage={prevPage}
                        nextPage={nextPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </footer>
            )}
        </>
    )
}

export default App