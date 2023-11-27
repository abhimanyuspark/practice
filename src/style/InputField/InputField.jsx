import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: ${(props) => props.theme.cl_dark};
`;

export const Input = styled.input`
  border-radius: 0.3rem;
  width: 100%;
  padding: 7px;
  font-size: 16px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  &:focus {
    outline: 2px solid ${(props) => props.theme.bt_bg};
    outline-offset: 1px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 3px;
  font-size: 14px;
`;
