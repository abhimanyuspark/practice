import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || "0.5rem"};
`;

export const Label = styled.label`
  display: block;
  font-size: 15px;
  color: ${(props) => props.theme.cl_dark};
`;

export const Input = styled.input`
  border-radius: 0.3rem;
  width: 100%;
  padding: 7px;
  font-size: 15px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  &:focus {
    outline: 2px solid ${(props) => props.theme.bt_bg};
    outline-offset: 1px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
