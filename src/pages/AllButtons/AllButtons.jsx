import React, { useState } from "react";
import { Buttons, PaddingContainer } from "../../style/Export/Export";
import { Check } from "../../style/Icons/Icons";
import { useTitle } from "../../hooks/useTitle";
// import Loader from "../../style/loader/Loader";

const AllButtons = () => {
  const [loading, setLoading] = useState(false);
  useTitle("All Buttons");

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

      {/* <Loader height="200px" /> */}
    </PaddingContainer>
  );
};

export default AllButtons;
