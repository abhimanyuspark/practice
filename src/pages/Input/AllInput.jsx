import React, { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import {
  FlexDiv,
  Input,
  InputWrapper,
  Label,
  PaddingContainer,
  Super,
} from "../../style/Export/Export";
import Select from "../../components/Custom/Select/SelectDropDown";
import { useThemeProvider } from "../../hooks/useThemeProvider";

const options = [
  { color: "Red" },
  { color: "Blue" },
  { color: "Yellow" },
  { color: "Green" },
];

const AllInput = () => {
  const [value, setValue] = useState("");
  const [sel, setSel] = useState("");
  const [theme] = useThemeProvider();

  return (
    <PaddingContainer>
      <InputWrapper>
        <FlexDiv $gap="0.5">
          <Label>Name</Label>
          <Super>*</Super>
        </FlexDiv>
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

      <InputWrapper>
        <Label>Select</Label>
        <Select
          value={sel}
          options={options}
          fields={{ labelFn: (e) => e.color }}
          onChange={(e) => {
            setSel(e);
          }}
          theme={theme}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Note</Label>
        <TextEditor value={value} setValue={setValue} />
      </InputWrapper>

      <InputWrapper>
        <Label>Note Updated</Label>
        <TextEditor value={value} />
      </InputWrapper>

      <p>{JSON.stringify(value)}</p>
    </PaddingContainer>
  );
};

export default AllInput;
