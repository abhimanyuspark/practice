import styled, { css } from "styled-components";

export const Relative = styled.div`
  position: relative;
  width: ${({ $width }) => $width || "100%"};
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: ${({ $direction }) => ($direction ? "" : "center")};
  justify-content: ${({ $direction }) => ($direction ? "center" : "")};
  flex-direction: ${({ $direction }) => ($direction ? "column" : "row")};
  gap: ${({ $gap }) => ($gap ? `${$gap}rem` : "1rem")};
`;

export const FlexDirection = styled(FlexDiv)`
  flex-direction: ${({ $direction }) => ($direction ? "row-reverse" : "")};
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${({ $align }) => $align || "normal"};
  gap: ${({ $gap }) => ($gap ? `${$gap}rem` : "1rem")};
  flex-wrap: ${({ $wrap }) => $wrap || "wrap"};
  & > * {
    flex: ${({ $grow }) => $grow || "315px"} 0 1;
  }

  @media screen and (max-width: 1024px) {
    & > * {
      flex: 320px 0 1;
    }
  }
  @media screen and (max-width: 720px) {
    & > * {
      flex: 100% 0 1;
    }
  }
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
  flex-direction: ${({ $direction }) => ($direction ? "column" : "row")};
`;

export const PaddingContainer = styled.div`
  padding: ${({ $padding }) => $padding || "20px"};
`;

export const Container = styled.div`
  padding: ${({ $padding }) => $padding || "20px"};
  border: 1px ${({ $line }) => $line || "solid"} grey;
  border-radius: 0.4rem;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto"};
  margin: ${({ $margin }) => $margin || "0"};
  background-color: ${(props) => props.theme.bg_cl};
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
  ${({ $border }) =>
    $border
      ? css`
          border-top: none;
        `
      : css`
          border-top: 1px solid grey;
        `}
  ${({ $border }) =>
    $border
      ? css`
          border-bottom: none;
        `
      : css`
          border-bottom: 1px solid grey;
        `}
  height: calc(100vh - ${({ $height }) => $height || "70px"});
  user-select: none;
  overflow: ${({ $overFlow }) => $overFlow || "hidden"};
`;

export const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  width: ${({ $width }) => $width || "auto"};
  z-index: ${({ $zIndex }) => $zIndex || "1"};
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
