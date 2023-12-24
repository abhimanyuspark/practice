import React, { useState } from "react";
import {
  InputWrapper,
  JustifyWrapper,
  Label,
  Overflow,
  PaddingContainer,
} from "../../style/Export/Export";
import Select from "../../components/Custom/Select/SelectDropDown";
import { useThemeProvider } from "../../hooks/useThemeProvider";

const types = [{ type: "All" }, { type: "Yes" }, { type: "No" }];

const Filterform = () => {
  const [type, setType] = useState(types[0]);
  const [theme] = useThemeProvider();

  const handleReset = () => {
    setType({ type: "All" });
  };

  return (
    <>
      <Overflow $height="160px" $overFlow="auto">
        <PaddingContainer>
          <InputWrapper $gap="1rem">
            <Label>Follow Up</Label>
            <Select
              options={types}
              value={type}
              fields={{ labelFn: (e) => e.type }}
              onChange={(e) => {
                setType(e);
              }}
              theme={theme}
            />
          </InputWrapper>
        </PaddingContainer>
      </Overflow>
      <PaddingContainer $padding="15px 10px">
        <JustifyWrapper $justify="end">
          <button type="button" onClick={handleReset}>
            Clear
          </button>
        </JustifyWrapper>
      </PaddingContainer>
    </>
  );
};

export default Filterform;
