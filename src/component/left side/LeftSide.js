import React from 'react'
import Header from './header/Header'
import Messages from './messages/Messages'
import Search from './search/Search'

const LeftSide = () => {
  return (
    <div><Header/><Search/><Messages/></div>
  )
}

export default LeftSide