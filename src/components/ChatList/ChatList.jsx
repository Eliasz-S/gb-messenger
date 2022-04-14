import { NavLink, Outlet } from "react-router-dom";
import { Chat } from "../Chat/Chat";
import { Form } from "../Form/Form";
import { isLinkActive } from "../utils/styles";

export const ChatList = ({ chats, handleSubmit, handleDeleteChat }) => {
    return (
        <>
            <div>
                {chats.map((chat) => (
                    <NavLink 
                        className="Chat-link" 
                        style={isLinkActive} 
                        key={chat.id} 
                        to={`/chat/${chat.id}`}
                    >
                        <Chat name={chat.name} id={chat.id} deleteChat={handleDeleteChat} />
                    </NavLink>
                ))}
            </div>
            <div className='Chat-add-form'>
                <Form onSubmit={handleSubmit} />
            </div>

            <Outlet />
        </>
    );
};