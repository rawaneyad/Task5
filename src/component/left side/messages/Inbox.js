import React from "react";
import MessageItem from "./MessageItem";

const Inbox = ({contactList, selectUser}) => {
  return (
    <div>
      <MessageItem contactList={contactList} selectUser={selectUser}/>
    </div>
  );
};

export default Inbox;
