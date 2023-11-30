import React from "react";
import {
  MainWrapper,
  StickyBar,
  Overflow,
  BackGroundImage,
} from "../../style/Export/Export";
import Logo from "../../assets/Vitelogo.svg";
import NotFound from "../../assets/404-page.avif";

const PageNotFound = () => {
  return (
    <MainWrapper>
      <StickyBar>
        <img src={Logo} alt="svg" width="40px" height="40px" /> Practice
      </StickyBar>
      <Overflow>
        <BackGroundImage src={NotFound} alt="Page Not Found" />
      </Overflow>
    </MainWrapper>
  );
};

export default PageNotFound;
