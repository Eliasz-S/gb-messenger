import './ChatList.styles.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { addChat, deleteChat } from '../../store/chats/actions';
import { ChatList } from './ChatList';

export const ChatListContainer = () => {
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

    return <ChatList 
        chats={chats} 
        handleSubmit={handleSubmit} 
        handleDeleteChat={handleDeleteChat} />
}
