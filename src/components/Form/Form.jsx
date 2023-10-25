import React from "react";
import useAnimation from "../../utilities/useAnimation";

const Form = () => {
  const [animation, handelAnimation] = useAnimation();
  
  return (
    <div>
      <div>{animation.toString()}</div>
      <button onClick={handelAnimation}>Animation</button>
    </div>
  );
};

export default Form;
