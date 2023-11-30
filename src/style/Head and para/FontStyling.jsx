import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ $color }) => $color || "grey"};
  line-height: 1cm;
`;

export const P = styled.p`
  color: ${({ $color }) => $color || "grey"};
  line-height: 1cm;
`;
