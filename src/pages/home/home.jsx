import React, { useState } from "react";
// import Table from "../../components/table/table";
// import { Columns } from "../../components/table/column";
// import { makeData } from "../../data/makeData";
import Form from "../../components/DropDown/Form";
// import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
// import { Input } from "antd";
// import UploadImages from "../../components/Upload/UploadImages";
// import CustomSelect from "../../components/antd/Select/Select";
// import ReactSelect from "../../components/React-Select/ReactSelect";
// import ReactMultiSelect from "../../components/React-Select/ReactMultiSelect";
// const { Search } = Input;

const Home = () => {
  // const [data] = useState(() => makeData(100));
  // const [globalFilter, setGlobalFilter] = useState("");
  // const [date, setDate] = useState({
  //   start: "",
  //   end: "",
  // });
  // const [select, setSelect] = useState([]);
  // const [clear, setClear] = useState(false);

  // const handleDateChange = (From, To, dates) => {
  //   setSelect(dates);
  //   setDate((p) => ({ ...p, start: From, end: To }));
  //   setClear(true);
  // };

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setGlobalFilter(value);
  //   // console.log(value);
  //   setClear(true);
  // };

  // const handleClear = () => {
  //   setGlobalFilter("");
  //   setDate((p) => ({ ...p, start: "", end: "" }));
  //   setSelect([]);
  //   setClear(false);
  // };

  // const filterByName = data.filter((item) => {
  //   return item.name.toLowerCase().includes(globalFilter.toLowerCase());
  // });

  // const filterByDate = filterByName.filter((item) => {
  //   if (date.start && date.end) {
  //     const d = new Date(item.date);
  //     return d >= date.start && d <= date.end;
  //   }
  //   return true;
  // });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form />
      </div>
      {/* <div>
        <ReactSelect options={data} />
        <ReactMultiSelect options={data} />
      </div> */}
      {/* <CustomSelect /> */}
      {/* <UploadImages />
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
      <Table Columns={Columns} data={filterByDate} /> */}
    </div>
  );
};

export default Home;
