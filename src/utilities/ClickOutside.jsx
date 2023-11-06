import { useEffect, useCallback } from "react";

const ClickOutside = (outSide, parentRef) => {
  const handleClickOutside = useCallback(
    (e) => {
      if (parentRef.current && !parentRef.current.contains(e.target)) {
        outSide && outSide();
      }
    },
    [parentRef, outSide]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default ClickOutside;
