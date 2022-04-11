import './ChatList.styles.css';
import { NavLink, Outlet } from "react-router-dom";
import { Chat } from "../Chat/Chat"
import { isLinkActive } from '../utils/styles';

const chatList = [
    {
      id: "chat1",
      name: "Richard Adams",
    },
    {
      id: "chat2",
      name: "Jenna Richards",
    },
    {
      id: "chat3",
      name: "Maria Antonova",
    },
    {
      id: "chat4",
      name: "Vasiliy Detochkin",
    },
];

export const ChatList = () => (
    <>
        <div>
            {chatList.map((chat) => (
                <NavLink 
                    className="Chat-link" 
                    style={isLinkActive} 
                    key={chat.id} 
                    to={`/chat/${chat.id}`}
                >
                    <Chat name={chat.name} />
                </NavLink>
            ))}
        </div>
        <Outlet />
    </>
    
)
    
