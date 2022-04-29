import './ChatList.styles.css';
import { ChatList } from './ChatList';
import { useEffect, useState } from 'react';
import { onValue, remove, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMessagesRefById } from '../../services/firebase';
import { Outlet } from 'react-router-dom';

export const ChatListContainer = () => {

    const [chats, setChats] = useState([]);

    // const chats = useSelector(selectChats, shallowEqual);

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        if (newChat.name) {
            // dispatch(addChat(newChat));
            set(getMessagesRefById(newChat.id), {exists: true});
            set(getChatRefById(newChat.id), newChat);
        }
    };

    const handleDeleteChat = (id) => {
        remove(getChatRefById(id));
        set(getMessagesRefById(id), null);
        // dispatch(deleteChat(id));
    };

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            console.log(snapshot.val());
            setChats(Object.values(snapshot.val() || {})); 
        });

        return unsubscribe;
    }, []);

    return (
        <>
            <ChatList 
            chats={chats} 
            handleSubmit={handleSubmit} 
            handleDeleteChat={handleDeleteChat} />

            <Outlet />
        </>
        
    )
}
