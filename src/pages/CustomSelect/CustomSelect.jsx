import React, { useState } from "react";
import Select from "../../components/Custom/Select/SelectDropDown";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];
const options2 = [
  { name: { n: "abhi" } },
  { name: { n: "vasu" } },
  { name: { n: "ani" } },
  { name: { n: "tony" } },
  { name: { n: "manju" } },
];

const CustomSelect = () => {
  const [array, setArray] = useState([options[0]]);
  const [object, setObject] = useState(options2[0]);
  const [object2, setObject2] = useState(options[0]);

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(array);
    console.log(object);
    console.log(object2);
  };

  const optionTemplate = (o) => {
    return <b>{o?.label}multi</b>;
  };

  const selectTemplate = (v) => {
    return <>{v ? <i>{v?.label}</i> : <i>Pass value...</i>}</>;
  };

  return (
    <form onSubmit={onsubmit}>
      <Select
        multiple
        multiTemplate={selectTemplate}
        optionTemplate={optionTemplate}
        options={options}
        value={array}
        onChange={(o) => setArray(o)}
      />
      <br />
      <Select
        options={options2}
        // singleTemplate={selectTemplate}
        // optionTemplate={optionTemplate}
        value={object}
        onChange={(o) => setObject(o)}
        fields={{ labelfun: (l) => l.name.n }}
      />
      <br />
      <Select
        options={options}
        value={object2}
        onChange={(o) => setObject2(o)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomSelect;
