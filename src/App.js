import Header from "./component/header/Header";
import LeftSide from "./component/left side/LeftSide";
import Main from "./component/main/Main";
import { Col, Row } from "antd";
import "./app.css";
import React, { useState } from "react";

function App() {
  const [userSelect, setUserSelect] = useState(1);
  const [contactList, setContactList] = useState([
    {
      user_id: 1,
      name: "test1",
      last_message: "test last message",
      date: "26/01/2023",
      image: "https://reqres.in/img/faces/1-image.jpg",
      type: "Trainer"
    },
    {
      user_id: 2,
      name: "test2",
      last_message: "test last message",
      date: "26/01/2023",
      image: "https://reqres.in/img/faces/2-image.jpg",
      type: "Trainer"
    },
    {
      user_id: 3,
      name: "test3",
      last_message: "test last message",
      date: "26/01/2023",
      image: "https://reqres.in/img/faces/3-image.jpg",
      type: "Trainer"
    },
    {
      user_id: 4,
      name: "test4",
      last_message: "test last message",
      date: "26/01/2023",
      image: "https://reqres.in/img/faces/4-image.jpg",
      type: "Trainer"
    },
  ]);
  const selectUser = (id) => {
    setUserSelect(id);
  };
  return (
    <div className="App">
      <Header />
      <Row>
        <Col flex={2} className="leftSide">
          <LeftSide contactList={contactList} selectUser={selectUser} userSelect={userSelect}/>
        </Col>
        <Col flex={12} className="main">
          <Main contactList={contactList.filter((user)=>user.user_id===userSelect)} userSelect={userSelect}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
