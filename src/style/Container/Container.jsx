import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  align-items: ${({ $direction }) => ($direction ? "" : "center")};
  justify-content: ${({ $direction }) => ($direction ? "center" : "")};
  flex-direction: ${({ $direction }) => ($direction ? "column" : "row")};
  gap: ${({ $gap }) => ($gap ? `${$gap}rem` : "1rem")};
`;

export const MainWrapper = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.bg_cl};
`;

export const CenterWarapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaddingContainer = styled.div`
  padding: ${({ $padding }) => $padding || "20px"};
`;

export const Container = styled.div`
  padding: 20px;
  border: 1px solid grey;
  border-radius: 0.4rem;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto"};
  margin: ${({ $margin }) => $margin || "0"};
  background-color: ${(props) => props.theme.bg_cl};
`;

export const LoginNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  color: white;
  background-color: ${(props) => props.theme.lt_bg_cl};
`;
