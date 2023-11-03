import React, { useState } from "react";
import Table from "../../components/table/table";
import { Columns } from "../../components/table/column";
import { makeData } from "../../data/makeData";
import Form from "../../components/DropDown/Form";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import { Input, Space } from "antd";
const { Search } = Input;
import FileUploadComponent from "../../components/Upload/FileUploadComponent";
import Buttons from "../../style/buttons/buttons";

const Home = () => {
  const [data] = useState(() => makeData(100));
  const [globalFilter, setGlobalFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState({
    start: "",
    end: "",
  });
  const [select, setSelect] = useState([]);
  const [clear, setClear] = useState(false);

  const handleDateChange = (From, To, dates) => {
    setSelect(dates);
    setDate((p) => ({ ...p, start: From, end: To }));
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
    setDate((p) => ({ ...p, start: "", end: "" }));
    setSelect([]);
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

  const copyToClipboard = () => {
    const textToCopy = "This is the text to copy to clipboard";
    navigator.clipboard.writeText(textToCopy);
  };

  const click = () => {
    setLoading(true);
    copyToClipboard();
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };

  return (
    <div>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Form />
      </div> */}
      <div className="flex">
        <Buttons
          text="Submit"
          // dir={true}
          onClick={click}
          loading={loading}
          icon={<span className="material-symbols-outlined">check</span>}
        />
      </div>
      <FileUploadComponent />
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
          <DateRangePicker value={select} onChange={handleDateChange} />
          {clear ? <button onClick={handleClear}>Clear</button> : ""}
        </Space>
      </div>
      <Table Columns={Columns} data={filterByDate} />
    </div>
  );
};

export default Home;
