import React from "react";
import Form from "./form/Form";
import Header from "./Header";
import { Modal } from "antd";

const ModalFun = ({open, handleCancel}) => {
  return (
    <>
      <Modal
      className="modal"
        open={open}
        title={<Header />}
        footer={null}
        onCancel={handleCancel}
      >
        <Form />
      </Modal>
    </>
  );
};

export default ModalFun;
