import React from "react";
import styled, { css } from "styled-components";

const IconStyle = styled.span`
  font-size: ${({ $fontSize }) => $fontSize || "20px"};
  & > span {
    font-size: ${({ $fontSize }) => $fontSize || "20px"};
  }
  display: flex;
  align-items: center;
  color: ${({ $color, theme }) => $color || theme.cl_dark};
  cursor: pointer;
  &:hover {
    ${({ $hover }) =>
      $hover
        ? css`
            color: ${$hover};
          `
        : css`
            color: white;
          `}
  }
`;

const Icon = ({ icon, fontSize, color, onClick, hover, dir }) => {
  return (
    <IconStyle
      onClick={onClick}
      $hover={hover}
      $fontSize={fontSize}
      $color={color}
      $direction={dir}
    >
      {icon}
    </IconStyle>
  );
};

export default Icon;
