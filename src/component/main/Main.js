import React from 'react'
import Header from './header/Header'
import MessageList from './message box/MessageList'

const Main = ({contactList, userSelect}) => {
  return (
    <div><Header/>
    <MessageList contactList={contactList.filter((user)=>user.user_id===userSelect)}/></div>
  )
}

export default Main