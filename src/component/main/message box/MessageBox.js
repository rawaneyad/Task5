import React from "react";
import { Space, Avatar, Typography } from "antd";

const { Text, Title } = Typography;

const MessageBox = ({ item }) => {
  return (
    <div>
      <Space className="mainMessage" size="small">
        <div className="titleMessage">
          <div>
            <Avatar src={item.image} />
          </div>
          <div>
            <Title level={5}>{item.name}</Title>
            <Text  className="lastMessage">{item.last_message}</Text>
          </div>
        </div>
        <div className="dateMain">{item.date}</div>
      </Space>
    </div>
  );
};

export default MessageBox;
