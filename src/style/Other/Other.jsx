import styled from "styled-components";

export const Shape = styled.span`
  display: inline-block;
  width: ${({ $size }) => $size || "13px"};
  aspect-ratio: 1/1;
  border-radius: ${({ $circle }) => $circle && "50%"};
  background-color: ${({ $color }) => $color || "white"};
  margin: ${({ $margin }) => $margin || "0px 0px 0px 0px"};
`;

export const Image = styled.img`
  width: ${({ $size }) => $size || "100%"};
  aspect-ratio: 1/1;
  border-radius: ${({ $circle }) => $circle && "50%"};
  margin: ${({ $margin }) => $margin || "0px 0px 0px 0px"};
`;
