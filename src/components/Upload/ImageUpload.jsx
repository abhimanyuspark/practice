import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
const fileList = [];
const App = () => (
  <Upload
    action="http://localhost:3500/images"
    listType="picture"
    multiple
    defaultFileList={[...fileList]}
  >
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);
export default App;
