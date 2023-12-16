import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files[0];
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    console.log(selectedFiles);
    const formData = new FormData();
    // for (let index = 0; index < selectedFiles.length; index++) {
    //   formData.append(`files${index + 1}`, selectedFiles[index]);
    // }
    formData.append("files", selectedFiles?.name);

    console.log(formData);
    // await axios
    //   .post("http://localhost:3500/images", formData, {
    //     headers: {
    //       "Custom-Header": "value",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
      <button onClick={handleUpload}>Upload Images</button>
    </div>
  );
};

export default ImageUpload;
