import React from "react";
import MessageItem from "./MessageItem";

const Inbox = ({contactList, selectUser, userSelect}) => {
  return (
    <div>
      <MessageItem contactList={contactList} selectUser={selectUser}userSelect={userSelect}/>
    </div>
  );
};

export default Inbox;
