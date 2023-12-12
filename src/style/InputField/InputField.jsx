import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: ${({ $dir }) => $dir || "column"};
  width: ${({ $width }) => $width || "100%"};
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
  width: ${({ $width }) => $width || "100%"};
  border-bottom-right-radius: ${({ $borderRight }) =>
    $borderRight ? "0rem" : "0.3rem"};
  border-top-right-radius: ${({ $borderRight }) =>
    $borderRight ? "0rem" : "0.3rem"};
  border-top-left-radius: ${({ $borderLeft }) =>
    $borderLeft ? "0rem" : "0.3rem"};
  border-bottom-left-radius: ${({ $borderLeft }) =>
    $borderLeft ? "0rem" : "0.3rem"};
  padding: 0px 8px;
  height: 40px;
  caret-color: ${(props) => props.theme.cl_dark};
  font-size: 16px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  background-color: ${(props) => props.theme.bg_cl};
  color: ${(props) => props.theme.cl_dark};
  &:hover,
  &:focus {
    outline: 2px solid
      ${({ $error, theme }) => ($error ? "red" : `${theme.bt_bg}`)};
    outline-offset: -4px;
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

export const ToogleIconInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  height: 40px;
  padding: 0px 10px;
  border-bottom-right-radius: ${({ $borderRight }) =>
    $borderRight ? "0rem" : "0.3rem"};
  border-top-right-radius: ${({ $borderRight }) =>
    $borderRight ? "0rem" : "0.3rem"};
  border-top-left-radius: ${({ $borderLeft }) =>
    $borderLeft ? "0rem" : "0.3rem"};
  border-bottom-left-radius: ${({ $borderLeft }) =>
    $borderLeft ? "0rem" : "0.3rem"};
  &:hover {
    background-color: #ccc;
  }
`;
