import React, { useState } from "react";
import Table from "../../components/table/table";
import { Columns } from "../../components/table/column";
import { makeData } from "../../data/makeData";
import DropDown from "../../components/DropDown/DropDown";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";

const Home = () => {
  const [data] = useState(() => makeData(100));
  const [globalFilter, setGlobalFilter] = useState("");
  const [date, setDate] = useState({
    start: "",
    end: "",
  });
  const [select, setSelect] = useState([]);
  const [clear, setClear] = useState(false);

  const handleDateChange = (From, To, dates) => {
    setSelect(dates);
    setDate((p) => ({ ...p, start: From, end: To }));
    setClear(true)
  };

  const handleInputChange = (e) => {
    setGlobalFilter(e.target.value);
    setClear(true);
  };

  const handleClear = () => {
    setGlobalFilter("");
    setDate((p) => ({ ...p, start: "", end: "" }));
    setSelect([]);
    setClear(false)
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DropDown />
      </div>
      <div className="flex" style={{ justifyContent: "center" }}>
        <input
          value={globalFilter}
          onChange={handleInputChange}
          placeholder="Search name here..."
        />
        <DateRangePicker value={select} onChange={handleDateChange} />
        {clear ? <button onClick={handleClear}>Clear</button> : ""}
      </div>
      <Table Columns={Columns} data={filterByDate} />
    </div>
  );
};

export default Home;
