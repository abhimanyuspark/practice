import React, { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import {
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
import { Error, View, ViewOff } from "../../style/Icons/Icons";

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

  return (
    <PaddingContainer>
      <InputContainer
        sup
        type={show ? "text" : "password"}
        id="Name"
        label="Name"
        error={true}
        errorMessage="Data not fetch"
        {...{
          autoFocus: true,
          autoComplete: "false",
        }}
        borderRight
        children={
          <ToogleIconInput $borderLeft>
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
