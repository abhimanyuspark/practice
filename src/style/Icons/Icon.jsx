import React from "react";
import styled from "styled-components";

const IconStyle = styled.span`
  font-size: ${({ $fontSize }) => $fontSize || "20px"};
  & > span {
    font-size: ${({ $fontSize }) => $fontSize || "20px"};
  }
  display: flex;
  align-items: center;
  color: ${({ $color }) => $color || "grey"};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.cl_dark};
  }
`;

const Icon = ({ icon, fontSize, color, onClick }) => {
  return (
    <IconStyle onClick={onClick} $fontSize={fontSize} $color={color}>
      {icon}
    </IconStyle>
  );
};

export default Icon;
