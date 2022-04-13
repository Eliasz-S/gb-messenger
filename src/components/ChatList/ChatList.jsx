import './ChatList.styles.css';
import { NavLink, Outlet } from "react-router-dom";
import { Chat } from "../Chat/Chat"
import { isLinkActive } from '../utils/styles';
import { Form } from '../Form/Form';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { addChat, deleteChat } from '../../store/chats/actions';

export const ChatList = () => {
    const chats = useSelector(selectChats, shallowEqual);
    const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        if (newChat.name) {
            dispatch(addChat(newChat));
        }
    };

    const handleDeleteChat = (id) => {
        dispatch(deleteChat(id));
    }

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
    )
}
