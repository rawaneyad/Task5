import React from "react";
import Header from "./header/Header";
import Messages from "./messages/Messages";
import Search from "./search/Search";

const LeftSide = ({ contactList, selectUser, userSelect}) => {
  return (
    <div>
      <Header />
      <Search />
      <Messages contactList={contactList} selectUser={selectUser} userSelect={userSelect}/>
    </div>
  );
};

export default LeftSide;
