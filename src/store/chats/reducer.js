import { initialChatState } from "../../components/utils/constants";
import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = initialChatState;

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_CHAT: {
            return [...state, payload];
        }
        case DELETE_CHAT: {
            return state.filter(({ id }) => id !== payload);
        }
        default: {
            return state;
        }
    }
}