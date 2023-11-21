import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Columns } from "../../components/table/column";
// import { makeData } from "../../data/makeData";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import { Input, Space, Button } from "antd";
const { Search } = Input;
import { useDispatch, useSelector } from "react-redux";
import { getUserApi } from "../../Redux/ReduxApi/ReduxApi";
import FilterAnimation from "../../style/animations/FilterAnimation";

const Home = () => {
  // const data = makeData(50);
  const [globalFilter, setGlobalFilter] = useState("");
  const [date, setDate] = useState({
    start: "",
    end: "",
    select: [],
  });
  const [clear, setClear] = useState(false);
  const { user, loading } = useSelector((state) => state.user);
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
    setClear(false);
  };

  const filterByDate = user.filter((item) => {
    if (date.start && date.end) {
      const d = new Date(item.date);
      return d >= date.start && d <= date.end;
    }
    return true;
  });

  useEffect(() => {
    dispatch(getUserApi());
  }, [dispatch]);

  // console.log("home");

  return (
    <div>
      <div>
        {/* <p>{JSON.stringify(data)}</p> */}
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <Space>
            <Search
              placeholder="Search name here..."
              value={globalFilter}
              onChange={handleInputChange}
              style={{
                width: 200,
              }}
            />
            <DateRangePicker value={date.select} onChange={handleDateChange} />
            {clear ? <Button onClick={handleClear}>Clear</Button> : ""}
          </Space>

          <FilterAnimation />
        </div>
      </div>

      <Table
        loading={loading}
        Columns={Columns}
        data={filterByDate}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  );
};

export default Home;
