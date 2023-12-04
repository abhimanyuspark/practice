import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: ${({ $dir }) => $dir || "column"};
  width: 100%;
  gap: ${({ $gap }) => $gap || "0.5rem"};
`;

export const Label = styled.label`
  display: block;
  font-size: 15px;
  color: ${(props) => props.theme.cl_dark};
`;

export const Input = styled.input`
  border-radius: 0.3rem;
  width: ${({ $width }) => $width || "100%"};
  padding: 7px;
  font-size: 15px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  &:hover,
  &:focus {
    outline: 2px solid ${(props) => props.theme.bt_bg};
    outline-offset: 1px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

export const SelectInput = styled.select`
  padding: 7px 5px;
  border-radius: 0.3rem;
  border: 1px solid grey;
  &:hover,
  &:focus {
    outline: 2px solid ${(props) => props.theme.bt_bg};
    outline-offset: 1px;
  }
`;
