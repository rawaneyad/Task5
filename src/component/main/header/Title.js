import React from "react";
import { Typography } from "antd";
import { Avatar } from "antd";
import { useSelector } from "react-redux";

const { Text, Title } = Typography;

const TitleMain = () => {
  const { userSelect} = useSelector((state) => state.contactList);
  return (
    <>
      <div>
        <Avatar src={userSelect[0].image} />
      </div>
      <div>
        <Title level={5}>{userSelect[0].name}</Title>
        <Text type="secondary">{userSelect[0].type}</Text>
      </div>
    </>
  );
};

export default TitleMain;
