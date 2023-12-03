import React, { useState } from "react";
import { Buttons, PaddingContainer } from "../../style/Export/Export";
import { Check } from "../../style/Icons/Icons";

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
    <PaddingContainer>
      <Buttons
        text="Submit"
        // dir={true}
        onClick={click}
        loading={loading}
        icon={Check}
      />
    </PaddingContainer>
  );
};

export default AllButtons;
