import React from "react";
import { Select, Space } from "antd";
import { makeData } from "../../../data/makeData";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const CustomSelect = () => {
  const data = makeData(10);
  const d = [data[0].name];

  return (
    <Select
      style={{
        width: "300px",
      }}
      placeholder="select one country"
      defaultValue={d}
      onChange={handleChange}
      optionLabelProp="label"
    >
      {data?.map((d, i) => {
        return (
          <Option key={i} value={d.name} label={d.name}>
            <Space>
              <span role="img" aria-label={d.name}>
                <img className="avatar" src={d.profile} alt={d.name} />
              </span>
              <span>{d.name}</span>
            </Space>
          </Option>
        );
      })}
    </Select>
  );
};

export default CustomSelect;
