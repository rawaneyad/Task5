import React from "react";
import { Typography } from "antd";
import { Avatar } from "antd";

const { Text, Title } = Typography;

const TitleMain = () => {
  return (
    <>
      <div>
        <Avatar src="https://reqres.in/img/faces/5-image.jpg" />
      </div>
      <div>
        <Title level={5}>Messages</Title>
        <Text type="secondary">Show Message</Text>
      </div>
    </>
  );
};

export default TitleMain;
