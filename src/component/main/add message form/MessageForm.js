import React from "react";
import { Input, Button, Space } from "antd";

const MessageForm = () => {
  return (
    <Space className="AddMessage">
      <Input className="addMessageInput" placeholder="Add message" />
      <Button type="primary">Send</Button>
    </Space>
  );
};

export default MessageForm;
