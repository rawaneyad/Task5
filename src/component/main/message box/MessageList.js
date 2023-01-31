import React from 'react'
import { List } from "antd";
import MessageBox from "./MessageBox"
import { useSelector } from "react-redux";

const MessageList = () => {
  const { userSelect} = useSelector((state) => state.contactList);

  return (
    <List
    itemLayout="horizontal"
    dataSource={userSelect}
    renderItem={(item) => (
      <List.Item>
        <MessageBox item={item}/>
      </List.Item>
    )}
  />
  )
}

export default MessageList