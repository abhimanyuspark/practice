import React, { useRef } from "react";
import ClickOutside from "../../utilities/ClickOutside";
import useAnimation from "../../hooks/useAnimation";

const FormAnimation = () => {
  const parentRef = useRef();
  const [animation, handelAnimation] = useAnimation();
  ClickOutside(handelAnimation, parentRef);

  return <>{animation && <div ref={parentRef}>Form</div>}</>;
};

export default FormAnimation;
