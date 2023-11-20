import React, { useState } from "react";
import Select from "../../components/Custom/Select/SelectDropDown";
import { makeData } from "../../data/makeData";
import { Space } from "antd";

const options = [
  { label: "First", value: 1, color: "red" },
  { label: "Second", value: 2, color: "blue" },
  { label: "Third", value: 3, color: "green" },
  { label: "Fourth", value: 4, color: "aqua" },
  { label: "Fifth", value: 5, color: "yellow" },
];
// const options2 = [
//   { name: { n: "abhi" } },
//   { name: { n: "vasu" } },
//   { name: { n: "ani" } },
//   { name: { n: "tony" } },
//   { name: { n: "manju" } },
// ];
const data = makeData(10);

const CustomSelect = () => {
  const [array, setArray] = useState([options[0]]);
  const [object, setObject] = useState(data[0]);
  const [object2, setObject2] = useState(options[0]);
  const [object3, setObject3] = useState(options[0]);

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(array);
    console.log(object);
    console.log(object2);
  };
  const style = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  };

  const styles = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const optionTemplate = (o) => {
    return (
      <div style={styles}>
        <img style={style} src={o.profile} alt="p" />
        <span>{o.name}</span>
      </div>
    );
  };

  const selectTemplate = (v) => {
    return (
      <>
        {v ? (
          <div style={styles}>
            <img style={style} src={v.profile} alt="p" />
            <span>{v.name}</span>
          </div>
        ) : (
          <i>Pass value...</i>
        )}
      </>
    );
  };

  const multiTemplate = (v) => {
    return (
      <>
        {v && (
          <div style={styles}>
            <span
              className="span-circle"
              style={{ backgroundColor: v.color }}
            ></span>
            {v.label}
          </div>
        )}
      </>
    );
  };

  // const obj = {
  //   ob1: () => {
  //     console.log("proto");
  //   },
  // };

  // object3.__proto__ = obj;
  // object3.ob1();

  return (
    <form onSubmit={onsubmit}>
      <Select
        value={array}
        options={options}
        multiple
        multiTemplate={multiTemplate}
        optionTemplate={multiTemplate}
        onChange={(o) => setArray(o)}
        selectWidth="20em"
        optionsWidth="25em"
        enableSearch
      />
      <br />
      <Space>
        <Select
          value={object}
          options={data}
          singleTemplate={selectTemplate}
          optionTemplate={optionTemplate}
          onChange={(o) => setObject(o)}
          fields={{ labelFn: (l) => l.name }}
          selectWidth="20em"
          optionsWidth="25em"
          enableSearch
          enableNoDataList
        />
        <Select
          value={object2}
          options={options}
          onChange={(o) => {
            setObject2(o);
            setObject3(o);
          }}
          selectWidth="10em"
          enableSearch
        />
        <Select
          value={object3}
          options={options}
          onChange={(o) => {
            setObject3(o);
            // setObject2(o);
          }}
          selectWidth="10em"
        />
      </Space>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomSelect;
