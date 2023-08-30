import { useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PageManagement = ({prevPage, nextPage, setCurrentPage, currentPage, totalPages}) => {

    const HandleChange = (event, value) => {
        if (value < currentPage) {
            prevPage()
            setCurrentPage(value)
        } else if (value > currentPage) {
            nextPage()
            setCurrentPage(value)
        }
    }

    return (
        <>
            <Stack spacing={1}>
                <Pagination count={totalPages} page={currentPage} onChange={HandleChange} showFirstButton showLastButton />
            </Stack>
        </>
    )
}

export default PageManagement;