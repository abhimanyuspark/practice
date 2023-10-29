import React, { useState } from "react";
import Select, { components } from "react-select";

const ReactMultiSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState([
    options[2],
    options[3],
  ]);
  const defaultOption = [options[2]];

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

  const MultiValue = (props) => {
    return (
      <components.MultiValue {...props}>
        <span>
          <img
            src={props.data.profile}
            alt="image"
            style={{ width: "20px", height: "20px" }}
          />
        </span>
        <span>{props.data.name}</span>
      </components.MultiValue>
    );
  };

  const handleChange = (d) => {
    // const isSelected = selectedOption.includes(d);
    // setSelectedOption((prevItems) =>
    //   isSelected ? prevItems.filter((item) => item !== d) : [...prevItems, d]
    // );
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 300,
    }),
    menuPortal: (provided) => ({
      ...provided,
      width: 300,
    }),
    menu: (provided) => ({
      ...provided,
      width: 300,
    }),
  };

  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        components={{
          Option: CustomOption,
          MultiValue,
        }}
        options={options}
        isMulti
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
        maxMenuHeight={200}
        defaultValue={defaultOption}
      />
      {selectedOption && (
        <div>
          Selected: {selectedOption.map((option) => option.name).join(", ")}
        </div>
      )}
    </div>
  );
};

export default ReactMultiSelect;
