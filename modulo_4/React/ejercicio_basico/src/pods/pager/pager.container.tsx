import React from "react";
import { PagerComponent } from "./pager.component";

interface Props {
    currentPage: number;
    lastPage: number;
    setNewPageNumber: (pageNumber: number) => void;
}

export const PagerContainer: React.FC<Props> = ({ currentPage, lastPage, setNewPageNumber }) => {
    return (
        <PagerComponent currentPage={currentPage}
            lastPage={lastPage}
            setNewPageNumber={setNewPageNumber} />
    );
};