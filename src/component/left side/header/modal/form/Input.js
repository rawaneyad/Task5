import React from 'react'
import { Form, Input, Select } from "antd";

const { TextArea } = Input;
const InputFun = (props) => {
  return (
    <Form.Item name={props.name} label={props.label}>
        {props.options ? (
          <Select defaultValue="Select " options={props.options} />
        ) : props.inputType === "Input" ? (
          <Input />
        ) : (
          <TextArea
            placeholder="Enter your message"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        )}
      </Form.Item>
  )
}

export default InputFun