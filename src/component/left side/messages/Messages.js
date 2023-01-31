import React from 'react'
import Inbox from './Inbox'
import Sent from './Sent'
import { Tabs } from 'antd';
const Messages = () => {
  const items = [
    {
      key: '1',
      label: `Inbox`,
      children: (<Inbox />),
    },
    {
      key: '2',
      label: `Sent`,
      children: (<Sent />),
    },
  ];
  return (
    <Tabs defaultActiveKey="1" items={items} />
  )
}

export default Messages