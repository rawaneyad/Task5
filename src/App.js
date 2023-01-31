import { Provider } from 'react-redux';
import store from './redux/store';
import Header from "./component/header/Header";
import LeftSide from "./component/left side/LeftSide";
import Main from "./component/main/Main";
import { Col, Row } from "antd";
import "./app.css";
import React from "react";
function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Row>
        <Col flex={2} className="leftSide">
          <LeftSide />
        </Col>
        <Col flex={12} className="main">
          <Main />
        </Col>
      </Row>
    </div>
    </Provider>
  );
}

export default App;
