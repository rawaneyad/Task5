import React from "react";
import { Button, Form } from "antd";
const ButtonFun = () => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Send Message
      </Button>
    </Form.Item>
  );
};

export default ButtonFun;
