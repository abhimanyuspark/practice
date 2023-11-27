import React from "react";
import styled, { css } from "styled-components";

const Loaders = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: auto;
  width: 25px;
  & div {
    display: inline-block;
    position: absolute;
    width: 24px;
    height: 24px;
    border: 3px solid;
    ${({ $margin }) =>
      $margin
        ? css`
            margin: 0px 0px;
          `
        : css`
            margin: 0px 2px;
          `}
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.theme.bt_cl} transparent transparent
      transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button`
  width: auto;
  height: 2.4rem;
  border: none;
  padding: 0px 10px;
  border-radius: 0.3rem;
  color: ${(props) => props.theme.bt_cl};
  background-color: ${(props) => props.theme.bt_bg};
  display: flex;
  align-items: center;
  gap: 0.3rem;
  ${({ $cursor }) =>
    $cursor
      ? css`
          cursor: progress;
        `
      : css`
          cursor: pointer;
        `}
  ${({ $direction }) =>
    $direction
      ? css`
          flex-direction: row-reverse;
        `
      : ""}
  & .text {
    font-family: sans-serif;
    font-size: 15px;
  }
  transition: 1s ease;
  &:hover {
    background-color: ${(props) => props.theme.bt_cl};
    color: ${(props) => props.theme.bt_bg};
  }
  &:hover div {
    border-color: ${(props) => props.theme.bt_bg}transparent transparent
      transparent;
  }
`;

const Loader = ({ margin }) => {
  return (
    <Loaders $margin={margin}>
      <div></div>
      <div></div>
      <div></div>
    </Loaders>
  );
};

export const Buttons = ({ dir, text, icon, loading, onClick }) => {
  return (
    <Button $direction={dir} onClick={onClick} $cursor={loading}>
      <span className="text">{text ? text : "Button"}</span>
      {loading ? <Loader margin={dir} /> : icon && icon}
    </Button>
  );
};
