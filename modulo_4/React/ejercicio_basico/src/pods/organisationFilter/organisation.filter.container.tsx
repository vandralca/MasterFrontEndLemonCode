import React from "react";
import { OrganisationFilterComponent } from "./organisation.filter.component";

interface Props {
    defaultText: string,
    applyFilter: (filtro: string) => void
}

export const OrganisationFilterContainer: React.FC<Props> = ({ defaultText, applyFilter }) => {

    return (
        <OrganisationFilterComponent
            defaultText={defaultText}
            applyFilter={applyFilter} />
    );
};