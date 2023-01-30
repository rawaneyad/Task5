import React from 'react'
import { List } from "antd";
import MessageBox from "./MessageBox"
const MessageList = ({contactList}) => {
  return (
    <List
    itemLayout="horizontal"
    dataSource={contactList}
    renderItem={(item) => (
      <List.Item>
        <MessageBox item={item}/>
      </List.Item>
    )}
  />
  )
}

export default MessageList