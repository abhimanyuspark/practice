import React from "react";
import {
  AbsoluteDiv,
  ErrorMessage,
  FlexDiv,
  Icon,
  Input,
  InputWrapper,
  Label,
  Relative,
  Super,
} from "../../style/Export/Export";
import { Error } from "../../style/Icons/Icons";

const InputContainer = ({
  name,
  type,
  value,
  sup,
  label,
  error,
  errorMessage,
  onChange,
  children,
  borderRight,
  borderLeft,
  ...rest
}) => {
  return (
    <InputWrapper>
      <FlexDiv $gap="0.5">
        {label && <Label htmlFor={name}>{label}</Label>}
        {sup && <Super>*</Super>}
      </FlexDiv>
      <FlexDiv $gap="0">
        <Relative>
          <Input
            id={name}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            $error={error}
            $borderRight={borderRight}
            $borderLeft={borderLeft}
            {...rest}
          />
          <AbsoluteDiv $top="28%" $right="8px">
            <Icon hover color={error ? "red" : "transparent"} icon={Error} />
          </AbsoluteDiv>
        </Relative>
        {children}
      </FlexDiv>
      <ErrorMessage>{errorMessage && errorMessage}</ErrorMessage>
    </InputWrapper>
  );
};

export default InputContainer;