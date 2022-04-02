import { ListItem } from "@mui/material"

export const Chat = ({ name }) => {
    return (
        <ListItem sx={{ width: 1/4 }} divider={true}>
            <h4>{name}</h4>
        </ListItem>
    )
}