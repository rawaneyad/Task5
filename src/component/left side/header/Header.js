import { Space, Typography, Divider } from "antd";
import React, {useState} from "react";
import Modal from "./modal/Modal";
import { FormOutlined, InboxOutlined, SettingFilled  } from '@ant-design/icons';

const { Text, Title } = Typography;
const Header = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <Space className="leftSideHeader" size="small">
        <div className="titleHeader">
          <Title level={5}>Messages</Title>
          <Text type="secondary" >Show Message</Text>
        </div>
       <div className="iconHeader">
        <FormOutlined onClick={() => showModal()}  /><InboxOutlined /><SettingFilled />
        </div> 
      </Space>
      <Divider />
      <Modal open={open} handleCancel={handleCancel} />
    </div>
  );
};

export default Header;
