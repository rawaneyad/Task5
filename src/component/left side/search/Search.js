import { Input, Space } from 'antd';
import React from "react";
const { Search } = Input;
const search = () => {
  return (
    <Space>
      <Search className='search' placeholder="Search"  />
    </Space>
  );
};

export default search;
