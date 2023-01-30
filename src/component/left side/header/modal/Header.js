import React from 'react'
import { Divider, Typography } from "antd";

const { Title, Text } = Typography;
const header = () => {
  return (
    <div><>
    <Title level={5}>Create message</Title>
    <Text type="secondary">Message</Text>
    <Divider />
  </></div>
  )
}

export default header