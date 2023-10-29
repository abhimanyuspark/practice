import React, { useState } from "react";
import Select, { components } from "react-select";

const ReactSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[2]);
  const defaultOption = options[2];

  const CustomOption = ({ innerProps, isDisabled, data }) =>
    !isDisabled ? (
      <div {...innerProps} className="flex gap-1 p">
        <img
          src={data.profile}
          alt="image"
          style={{ width: "20px", height: "20px" }}
        />
        {data.name}
      </div>
    ) : null;

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <div className="flex gap-1">
        <img
          src={selectedOption.profile}
          alt="image"
          style={{ width: "20px", height: "20px" }}
        />
        {selectedOption.name}
      </div>
    </components.SingleValue>
  );

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 300, // Set the width here (in pixels or any other valid CSS unit)
    }),
    menuPortal: (provided) => ({
      ...provided,
      width: 300, // Set the menu width here (in pixels or any other valid CSS unit)
    }),
    menu: (provided) => ({
      ...provided,
      width: 300, // Set the menu width here (in pixels or any other valid CSS unit)
    }),
  };

  return (
    <div>
      <Select
        components={{ Option: CustomOption, SingleValue: SingleValue }}
        options={options}
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
        maxMenuHeight={200}
        defaultValue={defaultOption}
      />
      {selectedOption && <div>Selected:{selectedOption.name}</div>}
    </div>
  );
};

export default ReactSelect;
