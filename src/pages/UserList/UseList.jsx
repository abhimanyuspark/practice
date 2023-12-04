import React, { useState, useEffect } from "react";
import {
  FlexWrapper,
  PaddingContainer,
  SubNavbar,
  SubNavbarChild,
} from "../../style/Export/Export";
import Table from "../../components/table/table";
import { Columns } from "../../components/table/column";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import { Button, Input } from "antd";
const { Search } = Input;
import { useDispatch, useSelector } from "react-redux";
import { getRoleBasedUser, getUserApi } from "../../Redux/ReduxApi/UserApi";
import FilterAnimation from "../../style/animations/FilterAnimation";
import Filterform from "./Filterform";
import Select from "../../components/Custom/Select/SelectDropDown";
import { useThemeProvider } from "../../hooks/useThemeProvider";

const types = [
  { name: "All", role: ["client", "employee"] },
  { name: "Client", role: "client" },
  { name: "Employee", role: "employee" },
];

const UseList = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [type, setType] = useState(types[0]);
  const [theme] = useThemeProvider();
  const [date, setDate] = useState({
    start: "",
    end: "",
    select: [],
  });
  const [clear, setClear] = useState(false);
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDateChange = (From, To, dates) => {
    if (From === "" && To === "") {
      setClear(false);
    } else {
      setDate((p) => ({ ...p, start: From, end: To, select: dates }));
      setClear(true);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // if (value === "") {
    //   setClear(false);
    //   setGlobalFilter("");
    // } else {
    setGlobalFilter(value);
    setClear(true);
    // }
  };

  const handleClear = () => {
    setGlobalFilter("");
    setDate((p) => ({ ...p, start: "", end: "", select: [] }));
    setType(types[0]);
    setClear(false);
  };

  const filterByDate = users.filter((item) => {
    if (date.start && date.end) {
      const d = new Date(item.date);
      return d >= date.start && d <= date.end;
    }
    return true;
  });

  useEffect(() => {
    dispatch(getRoleBasedUser(type.role));
  }, [dispatch, type.role]);

  return (
    <>
      <SubNavbar>
        <FlexWrapper $align="normal">
          <SubNavbarChild>
            Date{" "}
            <DateRangePicker value={date.select} onChange={handleDateChange} />
          </SubNavbarChild>
          <SubNavbarChild>
            <span style={{ marginRight: "0.5rem" }}>Types</span>
            <Select
              border={false}
              value={type}
              options={types}
              onChange={(e) => {
                setType(e);
                setClear(true);
              }}
              theme={theme}
              fields={{ labelFn: (e) => e.name }}
              optionsWidth="100px"
            />
          </SubNavbarChild>
          <SubNavbarChild>
            <Search
              placeholder="Search name here..."
              value={globalFilter}
              onChange={handleInputChange}
              style={{
                width: 200,
              }}
            />
          </SubNavbarChild>
          {clear && (
            <SubNavbarChild>
              <Button onClick={handleClear}>Clear</Button>
            </SubNavbarChild>
          )}
        </FlexWrapper>
        <SubNavbarChild $borderDir>
          <FilterAnimation children={<Filterform />} />
        </SubNavbarChild>
      </SubNavbar>

      <PaddingContainer>
        <Table
          loading={loading}
          Columns={Columns}
          data={filterByDate}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </PaddingContainer>
    </>
  );
};

export default UseList;
