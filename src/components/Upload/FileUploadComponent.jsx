import React, { useState, useEffect } from "react";
import "./FileUploadComponent.css";
import axios from "axios";

const FileUploadComponent = () => {
  const [files, setFiles] = useState([]);

  const fetchImagesFromAPI = async () => {
    try {
      const response = await axios.get(
        "https://653f81109e8bd3be29e0b5b1.mockapi.io/fileList/1"
      );
      const data = response.data;
      return data; // Assuming the API returns an array of image URLs
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const uploadImages = async (images) => {
    const formData = new FormData();

    images.forEach((image, index) => {
      formData.append(`filelist[${index}]`, images);
      console.log(image, index);
    });

    console.log(formData);

    // try {
    //   const response = await axios.post(
    //     "https://653f81109e8bd3be29e0b5b1.mockapi.io/fileList/1",
    //     formData
    //   );

    //   if (response.status !== 200) {
    //     throw new Error("Upload failed");
    //   }

    //   const data = response.data;
    //   console.log(data);
    // } catch (error) {
    //   console.error("Error uploading images:", error);
    // }
  };

  useEffect(() => {
    fetchImagesFromAPI().then((images) => setFiles(images.filelist));
  }, []); // Fetch images when component mounts

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newFiles = Array.from(fileList).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleUpload = () => {
    const imagesToUpload = files.map((file) => file);
    // console.log(imagesToUpload);
    uploadImages(imagesToUpload);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Images</button>
      <div className="preview-container">
        {files?.map((file, index) => (
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
