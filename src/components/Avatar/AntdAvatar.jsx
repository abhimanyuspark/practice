import React, { useState } from "react";
import {
  LoadingOutlined,
  PlusOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { message, Upload, Modal } from "antd";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const AntdAvatar = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [previewVisible, setPreviewVisible] = useState(false);

  const handlePreview = async (e) => {
    e.stopPropagation();
    if (imageUrl) {
      setPreviewVisible(true);
    }
  };

  const handleCancel = () => setPreviewVisible(false);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in the real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setImageUrl(null);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://localhost:3500/images"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        onPreview={handlePreview}
      >
        {imageUrl ? (
          <>
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            <div className="image-preview-overlay">
              <EyeOutlined
                onClick={handlePreview}
                style={{ marginRight: 8, color: "#fff" }}
              />
              <DeleteOutlined
                onClick={handleRemove}
                style={{ color: "#fff" }}
              />
            </div>
          </>
        ) : (
          uploadButton
        )}
      </Upload>

      <Modal open={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="Preview" style={{ width: "100%" }} src={imageUrl} />
      </Modal>
    </>
  );
};

export default AntdAvatar;
