import { combineReducers } from "redux";
import  contactListReducer  from "./contactList/contactListReducer"
import messageReducer from "./message/messageReducer";

const rootReducer = combineReducers({
    contactList: contactListReducer,
    message: messageReducer,
})

export default rootReducer