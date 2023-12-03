import React, { useState } from "react";
import Select from "../../components/Custom/Select/SelectDropDown";
import { Space } from "antd";
import { useThemeProvider } from "../../hooks/useThemeProvider";
import { useSelector } from "react-redux";
import { FlexDiv, P, PaddingContainer } from "../../style/Export/Export";

const options = [
  { label: "First", value: 1, color: "red" },
  { label: "Second", value: 2, color: "blue" },
  { label: "Third", value: 3, color: "green" },
  { label: "Fourth", value: 4, color: "aqua" },
  { label: "Fifth", value: 5, color: "yellow" },
];

const CustomSelect = () => {
  const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const [array, setArray] = useState([options[0]]);
  const [object, setObject] = useState(users[0]);
  const [object2, setObject2] = useState(options[0]);
  const [object3, setObject3] = useState("");
  const [theme] = useThemeProvider();

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
        {user?.name === o.name ? (
          <FlexDiv>
            <span>{o.name}</span>
            <P $color="red">its you</P>
          </FlexDiv>
        ) : (
          <span>{o.name}</span>
        )}
      </div>
    );
  };

  const selectTemplate = (v) => {
    return (
      <div style={styles}>
        <img style={style} src={v.profile} alt="p" />
        <span>{v.name}</span>
      </div>
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
    <PaddingContainer>
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
          theme={theme}
        />
        <br />
        <Space>
          <Select
            value={object}
            options={users}
            singleTemplate={selectTemplate}
            optionTemplate={optionTemplate}
            onChange={(o) => setObject(o)}
            fields={{ labelFn: (l) => l.name }}
            selectWidth="20em"
            optionsWidth="25em"
            enableSearch
            enableNoDataList
            theme={theme}
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
            theme={theme}
          />
          <Select
            value={object3}
            options={options}
            onChange={(o) => {
              setObject3(o);
              // setObject2(o);
            }}
            selectWidth="10em"
            theme={theme}
          />
        </Space>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </PaddingContainer>
  );
};

export default CustomSelect;
