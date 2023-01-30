import React from "react";
import Button from "./Button";
import Input from "./Input";
import { Form } from "antd";

const FormFun = () => {
  return (
    <Form name="form_item_path" layout="vertical" autoComplete="off">
      <Input
        name="sendTo"
        label="Send to"
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
        ]}
      />
      <Input
        name="userGroup"
        label="User Group"
        defaultValue="Select User Group"
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
        ]}
      />{" "}
      <Input
        name="users"
        label="Users"
        defaultValue="Select Users"
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
        ]}
      />
      <Input
        name="trainer"
        label="Trainer"
        defaultValue="learner"
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
        ]}
      />
      <Input name="subject" label="Subject" inputType="Input" />
      <Input name="message" label="Message" inputType="TextArea" />
      <Button />
    </Form>
  );
};

export default FormFun;
