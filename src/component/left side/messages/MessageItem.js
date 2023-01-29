import React from 'react'
import { Avatar, List } from 'antd';

const MessageItem = ({contactList}) => {
  return (
    <List
    itemLayout="horizontal"
    dataSource={contactList}
    renderItem={(item) => (
      <List.Item>
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