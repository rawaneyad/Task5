import React from "react";
import Buttons from "./Buttons";
import Title from "./Title";
import { Space, Divider } from "antd";

const Header = () => { 
  return (
    <div>
      <Space className="mainHeader" size="small">
        <div className="titleHeader">
          <Title />
        </div>
        <div className="buttonHeader">
          <Buttons />
        </div>
      </Space>
      <Divider />
    </div>
  );
};

export default Header;
