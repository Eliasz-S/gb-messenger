import { AUTHORS } from "../../components/utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        newMessage,
    },
});

let timeout;

export const addMessageWithReply = (newMessage, chatId) => (dispatch, getState) => {
    dispatch(addMessage(newMessage, chatId));

    if (newMessage?.author === AUTHORS.human) {
        clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            dispatch(
                addMessage(
                    {
                        id: `msg-${Date.now()}`,
                        text: "Hello! I'm your virtual assistant. Nice to meet you.",
                        author: AUTHORS.robot, 
                    }, 
                    chatId
                )
            );
        }, 1500); 
    }
}