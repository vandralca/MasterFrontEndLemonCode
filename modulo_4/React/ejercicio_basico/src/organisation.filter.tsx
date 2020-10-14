import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface Props {
    defaultText: string,
    applyFilter: (filtro: string) => void
}

export const OrganisationFilter: React.FC<Props> = ({ defaultText, applyFilter }) => {
    const [textFilter, setTextFilter] = React.useState(defaultText);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (textFilter && textFilter.length > 0) {
            applyFilter(textFilter);
        }
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <TextField
                  label="Organización"
                  margin="normal"
                  variant="outlined"
                  value={textFilter}
                  onChange={e => setTextFilter(e.target.value)}
                />
            </div>
                <Button type="submit" variant="contained" color="primary" size="small">
                    Listar
                </Button>
        </form>
    );
};