import React, { useMemo, useState } from "react";
import Table from "../../components/table/table";
import { Columns } from "../../components/table/column";
import { makeData } from "../../data/makeData";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import { Input, Space } from "antd";
const { Search } = Input;

const Home = () => {
  const data = useMemo(() => makeData(100), []);
  const [globalFilter, setGlobalFilter] = useState("");
  const [date, setDate] = useState({
    start: "",
    end: "",
    select: [],
  });
  const [clear, setClear] = useState(false);

  const handleDateChange = (From, To, dates) => {
    setDate((p) => ({ ...p, start: From, end: To, select: dates }));
    setClear(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setGlobalFilter(value);
    // console.log(value);
    setClear(true);
  };

  const handleClear = () => {
    setGlobalFilter("");
    setDate((p) => ({ ...p, start: "", end: "", select: [] }));
    setClear(false);
  };

  const filterByName = data.filter((item) => {
    return item.name.toLowerCase().includes(globalFilter.toLowerCase());
  });

  const filterByDate = filterByName.filter((item) => {
    if (date.start && date.end) {
      const d = new Date(item.date);
      return d >= date.start && d <= date.end;
    }
    return true;
  });

  return (
    <div>
      <div className="flex" style={{ justifyContent: "center" }}>
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
          {clear ? <button onClick={handleClear}>Clear</button> : ""}
        </Space>
      </div>
      <Table Columns={Columns} data={filterByDate} />
    </div>
  );
};

export default Home;
