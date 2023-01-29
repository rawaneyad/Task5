import React from "react";
import { Button } from "antd";
import { InboxOutlined, ContainerOutlined } from "@ant-design/icons";
const Buttons = () => {
  return (
    <>
      <Button type="primary" icon={<ContainerOutlined />}>
        Replay
      </Button>
      <Button type="primary" icon={<InboxOutlined />}>
        Archive
      </Button>
    </>
  );
};

export default Buttons;
