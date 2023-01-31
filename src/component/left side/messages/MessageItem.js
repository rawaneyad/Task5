import React from "react";
import { Avatar, List } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../redux";

const MessageItem = () => {
  const {contactList, userSelect} = useSelector((state) => state.contactList);
  const dispatch = useDispatch();
  return (
    <List
      itemLayout="horizontal"
      dataSource={contactList}
      renderItem={(item) => (
        <List.Item
          className={userSelect[0].user_id === item.user_id ? "selectUser" : ""}
          onClick={() => dispatch(selectUser(item.user_id))}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={item.name}
            description={item.last_message}
          />
          <div>{item.date}</div>
        </List.Item>
      )}
    />
  );
};

export default MessageItem;
