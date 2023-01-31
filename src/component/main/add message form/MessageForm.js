import React from "react";
import { Input, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { onChange, addMessage } from "../../../redux";
const MessageForm = () => {
  const dispatch = useDispatch();
  const { userSelect } = useSelector((state) => state.contactList);

  return (
    <Space className="AddMessage">
      <Input
        className="addMessageInput"
        placeholder="Add message"
        onChange={(e) => dispatch(onChange(e))}
      />
      <Button type="primary" onClick={()=>dispatch(addMessage(userSelect[0].user_id))}>Send</Button>
    </Space>
  );
};

export default MessageForm;
