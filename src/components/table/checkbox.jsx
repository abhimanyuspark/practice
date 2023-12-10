import { useEffect, useRef } from "react";

function IndeterminateCheckbox({
  className = "",
  indeterminate,
  checked,
  disabled,
  onChange,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      checked={checked}
      disabled={disabled}
      className={className}
      onChange={onChange}
    />
  );
}

export default IndeterminateCheckbox;
