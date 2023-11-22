import { useEffect, useRef } from "react";

function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = useRef(null);

  const style = {
    width: "14px",
    height: "14px",
    cursor: "pointer",
    accentColor: "#333",
  };

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      style={style}
      className={className}
      {...rest}
    />
  );
}

export default IndeterminateCheckbox;
