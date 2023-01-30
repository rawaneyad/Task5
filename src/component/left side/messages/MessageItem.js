import React from 'react'
import { Avatar, List } from 'antd';

const MessageItem = ({contactList, selectUser}) => {
  return (
    <List
    itemLayout="horizontal"
    dataSource={contactList}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.image} />}
          title={<label onClick={()=>(selectUser(item.user_id))}>{item.name}</label>}
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