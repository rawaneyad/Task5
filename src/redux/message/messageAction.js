import { ADD_MESSAGE } from "./messageType";

export const addMessage = (user_id) => {
    return {
        type: ADD_MESSAGE,
        payload: user_id,
    }
}