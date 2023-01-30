import React from "react";
import Header from "./header/Header";
import MessageList from "./message box/MessageList";
import MessageForm from "./add message form/MessageForm";
const Main = ({ contactList, userSelect }) => {
  return (
    <div>
      <Header />
      <MessageList
        contactList={contactList.filter((user) => user.user_id === userSelect)}
      />
      <MessageForm/>
    </div>
  );
};

export default Main;
