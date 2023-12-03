import React, { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import { PaddingContainer } from "../../style/Export/Export";

const AllInput = () => {
  const [value, setValue] = useState("");

  return (
    <PaddingContainer>
      <TextEditor value={value} setValue={setValue} />
      <br />
      <TextEditor value={value} />
      <br />
      <p>{JSON.stringify(value)}</p>
    </PaddingContainer>
  );
};

export default AllInput;
