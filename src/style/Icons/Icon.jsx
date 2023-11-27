import React from "react";
import styled from "styled-components";

const IconStyle = styled.span`
  font-size: ${({ $fontSize }) => $fontSize || "20px"};
  color: ${({ $color }) => $color || "black"};
`;

const Icon = ({ icon, fontSize, color }) => {
  return (
    <IconStyle $fontSize={fontSize} $color={color}>
      {icon}
    </IconStyle>
  );
};

export default Icon;
