import { SELECT_USER } from "./contactListType";

export const selectUser = (id) => {
    return {
        type: SELECT_USER,
        payload: id,
    }
}