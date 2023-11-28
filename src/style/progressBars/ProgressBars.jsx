import styled from "styled-components";

export const ProgressCircle = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 8px solid #0000;
  font-size: 14px;
  color: black;
  font-family: math;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  --g: ${({ $value }) => ($value ? `${($value * 360) / 100}deg` : "180deg")};
  --r: ${({ $value }) =>
    $value ? `${360 - ($value * 360) / 100}deg` : "180deg"};
  background: linear-gradient(white, white) padding-box,
    conic-gradient(#18f303 var(--g), #ff0b0b var(--r)) border-box;
  &:hover {
    transform: scale(1.2);
  }
`;
