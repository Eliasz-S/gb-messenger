import { initialMessageState } from "../../components/utils/constants";
import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";

const initialState = initialMessageState;

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_MESSAGE: {
            return {
                ...state, 
                [payload.chatId]: [...state[payload.chatId], payload.newMessage],
            };
        }
        case ADD_CHAT: {
            return {
                ...state,
                [payload.id]: [],
            }
        }
        case DELETE_CHAT: {
            const copy = { ...state };
            delete copy[payload];

            return copy;
        }
        default: {
            return state;
        }
    }
}