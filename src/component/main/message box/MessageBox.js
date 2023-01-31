import React from "react";
import { Space, Avatar, Typography } from "antd";

const { Text, Title } = Typography;

const MessageBox = ({ item }) => {
  return (
    <div>
      <Space className="mainMessage" size="small">
        <div className="titleMessage">
          <div>
            <Avatar
              src={
                item.image
                  ? item.image
                  : "https://reqres.in/img/faces/7-image.jpg"
              }
            />
          </div>
          <div>
            <Title level={5}>{item.name}</Title>
            <Text className="lastMessage">{item.last_message}</Text>
            <Text className="dateMain">{item.date}</Text>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default MessageBox;
