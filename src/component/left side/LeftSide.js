import React from 'react'
import Header from './header/Header'
import Messages from './messages/Messages'
import Search from './search/Search'

const LeftSide = ({ contactList, selectUser }) => {
  return (
    <div><Header/><Search/><Messages contactList={contactList} selectUser={selectUser}/></div>
  )
}

export default LeftSide