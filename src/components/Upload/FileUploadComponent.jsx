import React, { useState } from "react";
import "./FileUploadComponent.css";
import axios from "axios";

const FileUploadComponent = () => {
  const [files, setFiles] = useState([]);

  console.log(files);

  const uploadImages = async (images) => {
    if (images) {
      try {
        const response = await axios.post(
          "http://localhost:3500/images",
          images,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Custom-Header": "value",
            },
          }
        );

        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    } else {
      console.log("Select images first");
    }
  };

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newFiles = Array.from(fileList).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleUpload = () => {
    uploadImages(files);
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Images</button>
      <div className="preview-container">
        {files.map((file, index) => (
          <div key={index} className="preview-item">
            <img src={file.preview} alt={file.file.name} />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadComponent;
