import React, { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import {
  Checkbox,
  FlexDiv,
  Icon,
  Input,
  InputWrapper,
  Label,
  PaddingContainer,
  Super,
  ToogleIconInput,
} from "../../style/Export/Export";
import Select from "../../components/Custom/Select/SelectDropDown";
import { useThemeProvider } from "../../hooks/useThemeProvider";
import InputContainer from "../../components/InputContainer/InputContainer";
import { View, ViewOff } from "../../style/Icons/Icons";
import { useTitle } from "../../hooks/useTitle";

const options = [
  { color: "Red" },
  { color: "Blue" },
  { color: "Yellow" },
  { color: "Green" },
];

const AllInput = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(true);
  const [sel, setSel] = useState("");
  const [theme] = useThemeProvider();
  useTitle("All Input");

  return (
    <PaddingContainer>
      <InputContainer
        sup
        flexDirection
        type={show ? "text" : "password"}
        id="Name"
        label="Name"
        error={true}
        errorMessage="Data not fetch"
        {...{
          autoFocus: true,
          autoComplete: "false",
        }}
        borderLeft
        children={
          <ToogleIconInput $borderRight $pointer="none">
            <Icon
              icon={show ? View : ViewOff}
              onClick={() => {
                setShow(!show);
              }}
            />
          </ToogleIconInput>
        }
      />

      <InputWrapper $width="200px">
        <Label>Password</Label>
        <FlexDiv $gap="0">
          <Input $borderRight />
          <ToogleIconInput $borderLeft>
            <Icon
              icon={show ? View : ViewOff}
              onClick={() => {
                setShow(!show);
              }}
            />
          </ToogleIconInput>
        </FlexDiv>
      </InputWrapper>

      <Checkbox type="checkbox" />
      <br />
      <Checkbox type="radio" />

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
