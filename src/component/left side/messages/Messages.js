import React from 'react'
import Inbox from './Inbox'
import Sent from './Sent'
import { Tabs } from 'antd';
const Messages = ({contactList,selectUser}) => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `Inbox`,
      children: (<Inbox contactList={contactList} selectUser={selectUser}/>),
    },
    {
      key: '2',
      label: `Sent`,
      children: (<Sent contactList={contactList} selectUser={selectUser}/>),
    },
  ];
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

export default Messages