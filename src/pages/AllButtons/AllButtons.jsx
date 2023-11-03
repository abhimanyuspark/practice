import React, { useState } from "react";
import Buttons from "../../style/buttons/buttons";

const AllButtons = () => {
  const [loading, setLoading] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "This is the text to copy to clipboard";
    navigator.clipboard.writeText(textToCopy);
  };

  const click = () => {
    setLoading(true);
    copyToClipboard();
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };

  return (
    <div>
      <Buttons
        text="Submit"
        // dir={true}
        onClick={click}
        loading={loading}
        icon={<span className="material-symbols-outlined">check</span>}
      />
    </div>
  );
};

export default AllButtons;
