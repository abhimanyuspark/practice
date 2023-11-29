import React from "react";
import Unauth from "../../assets/404page1.png";
import { UnAbs, UnContainer, UnImage, Unh } from "./UnStyles";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

const Unauthorized = () => {
  const user = JSON.parse(Cookies.get("user"));
  const location = useLocation();
  // console.log(location);
  const from = location?.state?.from?.pathname;
  const convert = from.slice(1);
  const roleConvert = user?.role.charAt(0).toUpperCase() + user?.role.slice(1);

  return (
    <UnContainer>
      <UnImage src={Unauth} alt="auth" />
      <UnAbs>
        <Unh>
          {roleConvert} "{user?.name}" unauthorized accesses for {convert} page
        </Unh>
      </UnAbs>
    </UnContainer>
  );
};

export default Unauthorized;
