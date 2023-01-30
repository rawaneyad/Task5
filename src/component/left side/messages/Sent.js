import React from 'react'
import MessageItem from './MessageItem'

const Sent = ({contactList, selectUser}) => {
  return (
    <div>
        <MessageItem contactList={contactList} selectUser={selectUser}/>
    </div>
  )
}

export default Sent