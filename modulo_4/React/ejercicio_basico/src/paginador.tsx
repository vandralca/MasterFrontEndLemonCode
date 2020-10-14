import React from "react";
import Button from '@material-ui/core/Button';

interface Props {
    currentPage: number;
    lastPage: number;
    setNewPageNumber: (pageNumber: number) => void;
}

export const Paginador: React.FC<Props> = ({ currentPage, lastPage, setNewPageNumber }) => {
    return (
        <>
            <span>Mostrando página &#9;{Math.min(currentPage, lastPage)} de un total de {lastPage}&#9; páginas.</span>

            <div>
                <Button type="button" variant="outlined" color="primary" size="small" onClick={_e => setNewPageNumber(1)}>|&lt;</Button>
                <Button type="button" variant="outlined" color="primary" size="small" onClick={_e => setNewPageNumber(Math.max(currentPage - 1, 1))}>&lt;&lt;</Button>
                <Button type="button" variant="outlined" color="primary" size="small" onClick={_e => setNewPageNumber(Math.min(currentPage + 1, lastPage))}>&gt;&gt;</Button>
                <Button type="button" variant="outlined" color="primary" size="small" onClick={_e => setNewPageNumber(lastPage)}>&gt;|</Button>
            </div>
        </>
    );
};