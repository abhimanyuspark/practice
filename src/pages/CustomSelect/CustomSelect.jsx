import React, { useState } from "react";
import Select from "../../components/Custom/Select/SelectDropDown";
import { makeData } from "../../data/makeData";

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

  const optionTemplate = (o) => {
    return (
      <div>
        <img style={style} src={o.profile} alt="p" />
        <span>{o.name}</span>
      </div>
    );
  };

  const selectTemplate = (v) => {
    return (
      <>
        {v ? (
          <div>
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
          <div>
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
        multiple
        multiTemplate={multiTemplate}
        // optionTemplate={optionTemplate}
        options={options}
        value={array}
        onChange={(o) => setArray(o)}
      />
      <br />
      <Select
        options={data}
        singleTemplate={selectTemplate}
        optionTemplate={optionTemplate}
        value={object}
        onChange={(o) => setObject(o)}
        fields={{ labelFn: (l) => l.name }}
      />
      <br />
      <Select
        options={options}
        value={object2}
        onChange={(o) => {
          setObject2(o);
          setObject3(o);
        }}
      />
      <br />
      <Select
        options={options}
        value={object3}
        onChange={(o) => {
          setObject3(o);
          // setObject2(o);
        }}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomSelect;
