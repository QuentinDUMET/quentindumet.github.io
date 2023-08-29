const PageManagement = () => {

    useEffect(() => {
        setTotalPages(Math.ceil(creatures.length / entryPerPage));
    }, [creatures, entryPerPage, setTotalPages]);

    const indexOfLast = currentPage * entryPerPage;
    const indexOfFirst = indexOfLastCreature - entryPerPage;
    const currentEntries = creatures.slice(indexOfFirst, indexOfLast);

    return (
        <>
            <button onClick={prevPage} disabled={currentPage === 1}>Page précédente</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Page suivante</button>
        </>
    )
}