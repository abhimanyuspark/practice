import React, { useEffect, useState } from "react";
import Select from "../../components/Custom/Select/SelectDropDown";
import { Space } from "antd";
import { useThemeProvider } from "../../hooks/useThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  FlexDiv,
  Image,
  P,
  PaddingContainer,
  Shape,
} from "../../style/Export/Export";
import { sportsData } from "../../data/source.json";
import { getContryApi } from "../../Redux/Redux-Country-Api/CountryApi";
import { getRoleBasedUsers } from "../../Redux/ReduxApi/UserApi";
import { useTitle } from "../../hooks/useTitle";
import Dropdown from "./resizeDropDown";
import avatarpng from "../../assets/avatar.com.png";

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
  const [theme] = useThemeProvider();
  const dispatch = useDispatch();

  const [array, setArray] = useState([options[0]]);
  const [object, setObject] = useState(roleBasedUsers[0]);
  const [object2, setObject2] = useState("");
  const [object3, setObject3] = useState("");

  const [count, setCount] = useState("");

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

  const optionTemplate = (o) => {
    return (
      <FlexDiv>
        {o.profile ? (
          <Image src={o.profile} alt="profile" $size="20px" />
        ) : (
          <Image src={avatarpng} alt="profile" $size="20px" />
        )}
        {user?.name === o.name ? (
          <FlexDiv>
            <span>{o.name}</span>
            <P $color="red">its you</P>
          </FlexDiv>
        ) : (
          <span>{o.name}</span>
        )}
      </FlexDiv>
    );
  };

  const selectTemplate = (v) => {
    return (
      <FlexDiv>
        <Image src={v.profile} alt="profile" $size="20px" />
        <span>{v.name}</span>
      </FlexDiv>
    );
  };

  const multiSelectTemplate = (v) => {
    return (
      <FlexDiv $gap="0.4">
        <Shape $color={v?.color} $circle />
        {v?.label}
      </FlexDiv>
    );
  };

  const multiOptionTemplate = (v) => {
    return (
      <FlexDiv>
        <Shape $color={v?.color} $circle />
        {v?.label}
      </FlexDiv>
    );
  };

  const selectCountryTemplete = (v) => {
    return (
      <FlexDiv>
        <Image src={v?.flags?.svg} $size="18px" lazy="loading" />
        {v?.name?.common}
      </FlexDiv>
    );
  };

  const selectCountryIddTemplete = (d) => {
    const root = d.idd.root ? String(d.idd.root) : "+0";
    const suffixes = d.idd.suffixes ? String(d.idd.suffixes) : "";
    const combined = root + suffixes.slice(0, 2);
    return (
      <FlexDiv>
        <Image $size="15px" src={d.flags.svg} loading="lazy" alt="images" />
        <span>{combined}</span>
      </FlexDiv>
    );
  };

  return (
    <PaddingContainer>
      <form onSubmit={onsubmit}>
        <Space direction="vertical">
          <Select
            value={array}
            options={options}
            multiple
            multiTemplate={multiSelectTemplate}
            optionTemplate={multiOptionTemplate}
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
            singleTemplate={selectCountryTemplete}
            optionTemplate={selectCountryTemplete}
            enableNoDataList
            theme={theme}
            selectWidth="20em"
            optionsWidth="25em"
          />

          <Select
            fields={{
              labelFn: (l) => {
                const root = l?.idd?.root ? String(l?.idd?.root) : "+0";
                const suffixes = l?.idd?.suffixes
                  ? String(l?.idd?.suffixes)
                  : "";
                const combined = root + suffixes.slice(0, 2);
                return combined;
              },
            }}
            value={count}
            enableSearch
            options={country}
            onChange={(e) => setCount(e)}
            singleTemplate={selectCountryIddTemplete}
            optionTemplate={selectCountryIddTemplete}
            enableNoDataList
            theme={theme}
            selectWidth="8em"
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
      <Dropdown />
    </PaddingContainer>
  );
};

export default CustomSelect;
