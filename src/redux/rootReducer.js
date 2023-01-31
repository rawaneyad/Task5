import { combineReducers } from "redux";
import  contactListReducer  from "./contactList/contactListReducer"

const rootReducer = combineReducers({
    contactList: contactListReducer,
})

export default rootReducer