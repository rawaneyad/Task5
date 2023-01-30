import React from "react";
import Buttons from "./Buttons";
import Title from "./Title";
import { Space, Divider } from "antd";

const Header = ({contactList}) => { 
  return (
    <div>
      <Space className="mainHeader" size="small">
        <div className="titleHeader">
          <Title contactList={contactList}/>
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
