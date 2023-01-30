import React from 'react'
import MessageItem from './MessageItem'

const Sent = ({contactList, selectUser, userSelect}) => {
  return (
    <div>
        <MessageItem contactList={contactList} selectUser={selectUser}userSelect={userSelect}/>
    </div>
  )
}

export default Sent