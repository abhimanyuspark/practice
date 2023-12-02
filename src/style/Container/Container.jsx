import styled, { css } from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  align-items: ${({ $direction }) => ($direction ? "" : "center")};
  justify-content: ${({ $direction }) => ($direction ? "center" : "")};
  flex-direction: ${({ $direction }) => ($direction ? "column" : "row")};
  gap: ${({ $gap }) => ($gap ? `${$gap}rem` : "1rem")};
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${({ $align }) => $align || "center"};
`;

export const MainWrapper = styled.section`
  height: 100vh;
  overflow: auto;
  background-color: ${(props) => props.theme.bg_cl};
`;

export const CenterWarapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JustifyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $justify }) => $justify || "space-between"};
`;

export const PaddingContainer = styled.div`
  padding: ${({ $padding }) => $padding || "20px"};
`;

export const Container = styled.div`
  padding: ${({ $padding }) => $padding || "20px"};
  border: 1px solid grey;
  border-radius: 0.4rem;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto"};
  margin: ${({ $margin }) => $margin || "0"};
  background-color: ${(props) => props.theme.bg_cl};
`;

export const ScrollBar = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  height: calc(100vh - ${({ $height }) => $height || "110px"});
`;

export const StickyBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  color: white;
  background-color: ${(props) => props.theme.lt_bg_cl};
`;

export const Overflow = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  user-select: none;
  overflow: hidden;
`;

export const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  width: ${({ $width }) => $width || "auto"};
  ${({ $top }) =>
    $top &&
    css`
      top: ${$top};
    `};
  ${({ $bottom }) =>
    $bottom &&
    css`
      bottom: ${$bottom};
    `};
  ${({ $right }) =>
    $right &&
    css`
      right: ${$right};
    `};
  ${({ $left }) =>
    $left &&
    css`
      left: ${$left};
    `};
`;
