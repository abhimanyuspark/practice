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

export const Super = styled.sup`
  line-height: 0.5cm;
  font-weight: 900;
  color: red;
`;

export const Input = styled.input`
  border-radius: 0.3rem;
  width: ${({ $width }) => $width || "100%"};
  padding: 6px;
  font-size: 15px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  &:hover,
  &:focus {
    outline: 2px auto ${(props) => props.theme.bt_bg};
    outline-offset: -2px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

export const SelectInput = styled.select`
  padding: 6px 5px;
  border-radius: 0.3rem;
  border: 1px solid grey;
  &:hover,
  &:focus {
    border-radius: 0.3rem;
    outline: 2px solid ${(props) => props.theme.bt_bg};
    outline-offset: -4px;
  }
`;
