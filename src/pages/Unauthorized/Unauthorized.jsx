import React from "react";
import Unauth from "../../assets/404page1.png";
// import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import {
  MainWrapper,
  StickyBar,
  BackGroundImage,
  Overflow,
  AbsoluteDiv,
  H1,
} from "../../style/Export/Export";
import Logo from "../../assets/Vitelogo.svg";
import { useSelector } from "react-redux";

const Unauthorized = () => {
  // const user = JSON.parse(Cookies.get("user"));
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const from = location?.state?.from?.pathname;
  const convert = from.slice(1);
  const roleConvert =
    user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1);

  return (
    <MainWrapper>
      <StickyBar>
        <img src={Logo} alt="svg" width="40px" height="40px" /> Practice
      </StickyBar>
      <Overflow>
        <BackGroundImage src={Unauth} alt="auth" />
        <AbsoluteDiv $width="500px" $bottom="250px" $right="50px">
          <H1 $color="red">
            {roleConvert} "{user?.name}" unauthorized accesses for {convert}{" "}
            page
          </H1>
        </AbsoluteDiv>
      </Overflow>
    </MainWrapper>
  );
};

export default Unauthorized;
