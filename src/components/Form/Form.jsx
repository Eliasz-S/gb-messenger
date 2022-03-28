import './Form.styles.css';
import { useState } from "react";

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
        <form className="form" onSubmit={handleSubmit}>
            <input className="input" value={value} onChange={handleChange} type="text" />
            <input className="submit" type="submit" />
        </form>
    )
}