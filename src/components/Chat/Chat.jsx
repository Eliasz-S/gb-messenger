import { ListItem } from "@mui/material"
import './Chat.styles.css';

export const Chat = ({ name, id, deleteChat }) => {
    return (
        <ListItem sx={{ width: 1/4 }} divider={true}>
            <h4>{name}</h4>
            <button className="delete-button" onClick={() => deleteChat(id)}>x</button>
        </ListItem>
    )
}