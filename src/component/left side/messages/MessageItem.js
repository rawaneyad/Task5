import React from 'react'
import { Avatar, List } from 'antd';

const MessageItem = ({contactList, selectUser, userSelect}) => {
  return (
    <List
    itemLayout="horizontal"
    dataSource={contactList}
    renderItem={(item) => (
      <List.Item className={userSelect===item.user_id?'selectUser':''} onClick={()=>(selectUser(item.user_id))}>
        <List.Item.Meta
          avatar={<Avatar src={item.image} />}
          title={item.name}
          description={item.last_message}
        /><div>
          {item.date}
          </div>
      </List.Item>
    )}
  />
  )
}

export default MessageItem