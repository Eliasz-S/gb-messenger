import { Chat } from "../Chat/Chat"

export const ChatList = ({ chatList }) => 
    chatList.map((chat) => (
        <Chat key={chat.id} name={chat.name} />
    ));
