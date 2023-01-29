import { Space, Typography, Divider } from "antd";
import React from "react";
// import Modal from "./modal/Modal";
import { FormOutlined, InboxOutlined, SettingFilled  } from '@ant-design/icons';

const { Text, Title } = Typography;
const Header = () => {
  return (
    <div>
      <Space className="leftSideHeader" size="small">
        <div className="titleHeader">
          <Title level={5}>Messages</Title>
          <Text type="secondary" >Show Message</Text>
        </div>
       <div className="iconHeader">
        <FormOutlined /><InboxOutlined /><SettingFilled />
        </div> 
      </Space>
      <Divider />
      {/* LeftSide Header */}
      {/* <Modal /> */}
    </div>
  );
};

export default Header;
