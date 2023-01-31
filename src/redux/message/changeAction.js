import { CHANGE_INPUT } from "./messageType";

export const onChange = ({ target }) => {
  const { value } = target;
  return {
    type: CHANGE_INPUT,
    value
    };
};