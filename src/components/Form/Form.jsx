import './Form.styles.css';
import { useEffect, useRef, useState } from "react";
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
    };

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <TextField sx={{ width: 3/4 }} variant="outlined" size="small" value={value} onChange={handleChange} inputRef={inputRef} />
            <Button sx={{ width: 1/4, height: 40 }} type="submit" variant="contained">Send</Button>
        </form>
    )
}