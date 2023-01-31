import React from "react";
import Header from "./header/Header";
import MessageList from "./message box/MessageList";
import MessageForm from "./add message form/MessageForm";
const Main = () => {
  return (
    <div>
      <Header 
      />
      <MessageList/>
      <MessageForm/>
    </div>
  );
};

export default Main;
