import styled from "styled-components";

export const UnContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  user-select: none;
`;

export const UnImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UnAbs = styled.article`
  position: absolute;
  bottom: 300px;
  right: 100px;
`;

export const Unh = styled.h1`
  color: red;
  width: 500px;
  font-size: 30px;
  line-height: 1.1cm;
  font-family: sans-serif;
`;
