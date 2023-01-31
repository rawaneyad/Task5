import { ADD_MESSAGE, CHANGE_INPUT } from "./messageType";

const initialState = {
  messages: [],
  message: {
    last_message: "",
  },
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        message: {
          last_message: action.value,
        },
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            user_id: action.payload,
            message_id: state.messages.length + 1,
            date: Date(),
            last_message: state.message.last_message,
          }
        ],
        message: {
          last_message: '',
        },
      };
    default:
      return state;
  }
};

export default messageReducer;
