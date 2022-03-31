import './Form.styles.css';
import { useState } from "react";
import { Button, TextField } from '@mui/material';

export const Form = ({ onSubmit }) => {
    const [ value, setValue ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(value);
        setValue("");
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField sx={{ width: 3/4 }} variant="outlined" size="small" autoFocus={true} value={value} onChange={handleChange}></TextField>
            <Button sx={{ width: 1/4, height: 40 }} type="submit" variant="contained">Send</Button>
        </form>
    )
}