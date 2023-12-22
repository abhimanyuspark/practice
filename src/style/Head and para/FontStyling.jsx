import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const H1 = styled.h1`
  color: ${({ $color, theme }) => $color || theme.cl_dark};
  line-height: 1cm;
  &:hover {
    ${({ $hover }) =>
      $hover
        ? css`
            color: ${$hover};
          `
        : ""}
  }
`;

export const H2 = styled.h2`
  color: ${({ $color, theme }) => $color || theme.cl_dark};
  line-height: 0.5cm;
  &:hover {
    ${({ $hover }) =>
      $hover
        ? css`
            color: ${$hover};
          `
        : ""}
  }
`;

export const H3 = styled.h3`
  color: ${({ $color, theme }) => $color || theme.cl_dark};
  line-height: 0.5cm;
  &:hover {
    ${({ $hover }) =>
      $hover
        ? css`
            color: ${$hover};
          `
        : ""}
  }
`;

export const P = styled.p`
  font-size: ${({ $size }) => $size || "16px"};
  color: ${({ $color, theme }) => $color || theme.cl_dark};
  line-height: 0.5cm;
  &:hover {
    ${({ $hover }) =>
      $hover
        ? css`
            color: ${$hover};
          `
        : ""}
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  width: fit-content;
  color: #ccc;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
    color: white;
  }
`;
