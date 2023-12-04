import React, { useState } from "react";
import {
  InputWrapper,
  Label,
  PaddingContainer,
} from "../../style/Export/Export";
import Select from "../../components/Custom/Select/SelectDropDown";
import { useThemeProvider } from "../../hooks/useThemeProvider";

const types = [{ type: "Yes" }, { type: "No" }];

const Filterform = () => {
  const [type, setType] = useState(types[0]);
  const [theme] = useThemeProvider();

  return (
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
  );
};

export default Filterform;
