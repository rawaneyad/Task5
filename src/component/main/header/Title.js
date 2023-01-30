import React from "react";
import { Typography } from "antd";
import { Avatar } from "antd";

const { Text, Title } = Typography;

const TitleMain = ({contactList}) => {
  return (
    <>
      <div>
        <Avatar src={contactList[0].image} />
      </div>
      <div>
        <Title level={5}>{contactList[0].name}</Title>
        <Text type="secondary">{contactList[0].type}</Text>
      </div>
    </>
  );
};

export default TitleMain;
