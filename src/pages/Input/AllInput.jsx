import React, { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";

const AllInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <TextEditor value={value} setValue={setValue} />
      <br />
      <TextEditor value={value} />
      <br />
      <p>{JSON.stringify(value)}</p>
    </div>
  );
};

export default AllInput;
