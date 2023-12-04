import React, { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import {
  FlexDiv,
  FlexWrapper,
  Input,
  InputWrapper,
  Label,
  PaddingContainer,
} from "../../style/Export/Export";

const AllInput = () => {
  const [value, setValue] = useState("");

  return (
    <PaddingContainer>
      <InputWrapper>
        <Label>Name</Label>
        <Input />
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input />
      </InputWrapper>
      <InputWrapper>
        <Label>Password</Label>
        <Input />
      </InputWrapper>

      <TextEditor value={value} setValue={setValue} />
      <br />
      <TextEditor value={value} />
      <br />
      <p>{JSON.stringify(value)}</p>
    </PaddingContainer>
  );
};

export default AllInput;
