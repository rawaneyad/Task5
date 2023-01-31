import React from "react";
import { List } from "antd";
import MessageBox from "./MessageBox";
import { useSelector } from "react-redux";

const MessageList = () => {
  const { userSelect } = useSelector((state) => state.contactList);
  const { messages } = useSelector((state) => state.message);

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={userSelect.concat(messages.filter(item=>item.user_id===userSelect[0].user_id))}
        renderItem={(item) => (
          <List.Item>
            <MessageBox item={item} />
          </List.Item>
        )}
      />
    </>
  );
};

export default MessageList;
