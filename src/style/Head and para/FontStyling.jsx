import { Link } from "react-router-dom";
import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ $color }) => $color || "grey"};
  line-height: 1cm;
`;

export const H2 = styled.h2`
  color: ${({ $color }) => $color || "grey"};
  line-height: 0.5cm;
`;

export const H3 = styled.h3`
  color: ${({ $color }) => $color || "grey"};
  line-height: 0.5cm;
`;

export const P = styled.p`
  color: ${({ $color, theme }) => $color || theme.cl_dark};
  line-height: 0.5cm;
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
