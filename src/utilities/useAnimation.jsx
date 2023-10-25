import { useState } from "react";

const useAnimation = () => {
  const [animation, setAnimation] = useState(false);
  const handelAnimation = () => {
    setAnimation(!animation);
  };
  return [animation, handelAnimation];
};

export default useAnimation;
