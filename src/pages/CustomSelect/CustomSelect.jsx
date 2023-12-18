import React, { useEffect, useState } from "react";
import Select from "../../components/Custom/Select/SelectDropDown";
import { Space } from "antd";
import { useThemeProvider } from "../../hooks/useThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { FlexDiv, P, PaddingContainer } from "../../style/Export/Export";
import { sportsData } from "../../data/source.json";
import { getContryApi } from "../../Redux/Redux-Country-Api/CountryApi";
import { getRoleBasedUsers } from "../../Redux/ReduxApi/UserApi";
import { useTitle } from "../../hooks/useTitle";

const options = [
  { label: "First", value: 1, color: "red" },
  { label: "Second", value: 2, color: "blue" },
  { label: "Third", value: 3, color: "green" },
  { label: "Fourth", value: 4, color: "aqua" },
  { label: "Fifth", value: 5, color: "yellow" },
];

const CustomSelect = () => {
  const { roleBasedUsers } = useSelector((state) => state.users);
  const { country } = useSelector((state) => state.country);
  const { user } = useSelector((state) => state.auth);
  useTitle("Select");

  const [array, setArray] = useState([options[0]]);
  const [object, setObject] = useState(roleBasedUsers[0]);
  const [object2, setObject2] = useState("");
  const [object3, setObject3] = useState("");

  const [count, setCount] = useState("");

  const [theme] = useThemeProvider();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoleBasedUsers(["client", "employee"]));
    dispatch(getContryApi());
  }, [dispatch]);

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(array);
    console.log(object);
    console.log(object2);
    console.log(count);
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
        <Space direction="vertical">
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

          <Select
            fields={{ labelFn: (l) => l?.name?.common }}
            value={count}
            enableSearch
            options={country}
            onChange={(e) => setCount(e)}
            theme={theme}
            selectWidth="20em"
            optionsWidth="25em"
          />

          <Space>
            <Select
              value={object}
              options={roleBasedUsers}
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
              options={sportsData}
              fields={{ labelFn: (l) => l.Game }}
              onChange={(o) => {
                setObject2(o);
                setObject3(o);
              }}
              clearButton
              divider
              selectWidth="15em"
              enableSearch
              theme={theme}
            />
            <Select
              value={object3}
              options={sportsData}
              fields={{ labelFn: (l) => l.Game }}
              onChange={(o) => {
                setObject3(o);
              }}
              selectWidth="15em"
              theme={theme}
            />
          </Space>
          <button type="submit">Submit</button>
        </Space>
      </form>
    </PaddingContainer>
  );
};

export default CustomSelect;
