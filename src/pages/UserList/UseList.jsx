import React, { useState, useEffect, useMemo } from "react";
import {
  Buttons,
  FlexDiv,
  FlexWrapper,
  PaddingContainer,
  SubNavbar,
  SubNavbarChild,
} from "../../style/Export/Export";
import Table from "../../components/table/table";
import { Columns } from "./column";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import { Button, Input } from "antd";
const { Search } = Input;
import { useDispatch, useSelector } from "react-redux";
import {
  // deleteMultipleUsers,
  getRoleBasedUsers,
} from "../../Redux/ReduxApi/UserApi";
// import { deleteMultipleUsersReducer } from "../../Redux/ReduxApi/UserAction";
import FilterAnimation from "../../style/animations/FilterAnimation";
import Filterform from "./Filterform";
import Select from "../../components/Custom/Select/SelectDropDown";
import { useThemeProvider } from "../../hooks/useThemeProvider";
import { useNavigate } from "react-router-dom";
import { Add } from "../../style/Icons/Icons";
import { ExportToExcel } from "../../components/ExportToExcel/ExportToExcel";
// import { toast } from "react-toastify";

const types = [
  { name: "All", role: ["client", "employee"] },
  { name: "Client", role: "client" },
  { name: "Employee", role: "employee" },
];

const UseList = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  // const [rowSelection, setRowSelection] = useState([]);
  const [type, setType] = useState(types[0]);
  const [theme] = useThemeProvider();
  const [date, setDate] = useState({
    start: "",
    end: "",
    select: [],
  });
  const [clear, setClear] = useState(false);
  const { roleBasedUsers, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (value === "") {
      setClear(false);
      setGlobalFilter("");
    } else {
      setGlobalFilter(value);
      setClear(true);
    }
  };

  const handleClear = () => {
    setGlobalFilter("");
    setDate((p) => ({ ...p, start: "", end: "", select: [] }));
    setType(types[0]);
    setClear(false);
  };

  const filterByDate = roleBasedUsers.filter((item) => {
    if (date.start && date.end) {
      const d = new Date(item.date);
      return d >= date.start && d <= date.end;
    }
    return true;
  });

  useEffect(() => {
    dispatch(getRoleBasedUsers(type.role));
  }, [dispatch, type.role]);

  const customArray = useMemo(() => {
    const data = filterByDate.map((item, i) => ({
      "#": i + 1,
      Id: item.id,
      Username: item.name,
      Created: item.date,
      Status: item.status.name,
    }));
    // console.log(data);
    return data;
  }, [filterByDate]);

  // const DeleteAlluser = () => {
  //   if (rowSelection.length <= 0) {
  //     toast.warning("Select Users", { position: "top-right" });
  //   } else {
  //     toast.success(`${rowSelection.length} users deleted successfully`, {
  //       position: "top-right",
  //     });
  //     console.log(rowSelection);
  //     // dispatch(deleteMultipleUsers(rowSelection));
  //     dispatch(deleteMultipleUsersReducer(rowSelection));
  //   }
  // };

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

      <PaddingContainer $padding="30px 20px 0px 20px">
        <FlexDiv>
          <Buttons
            text="Add User"
            onClick={() => {
              navigate("/user/add");
            }}
            icon={Add}
          />
          <ExportToExcel apiData={customArray} fileName="MyUser Data" />
          {/* <Buttons text="Delete All User" onClick={DeleteAlluser} /> */}
        </FlexDiv>
      </PaddingContainer>

      <PaddingContainer>
        <Table
          loading={loading}
          Columns={Columns}
          data={filterByDate}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          // onSelectedRowIdsChange={(e) => {
          //   setRowSelection(e);
          // }}
        />
      </PaddingContainer>
    </>
  );
};

export default UseList;
