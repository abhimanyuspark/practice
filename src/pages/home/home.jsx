import React, { useState } from "react";
import Table from "../../components/table/table";
import { Columns } from "../../components/table/column";
import { makeData } from "../../data/makeData";
import Form from "../../components/DropDown/Form";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import { Input, Space } from "antd";
const { Search } = Input;
// import DropDownMenu from "../../components/Custom/DropDownMenu/DropDownMenu";

// const menu = [
//   {
//     name: "View",
//     // icon: <span>eye</span>,
//   },
//   {
//     name: "Edit",
//     // icon: <span>Edit</span>,
//   },
//   {
//     name: "Delete",
//     // icon: <span>Delete</span>,
//   },
// ];

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

  // const handelEdit = (id) => {
  //   console.log("Edit:", id);
  // };
  // const handelView = (id) => {
  //   console.log("View:", id);
  // };
  // const handelDelete = (id) => {
  //   console.log("Delete:", id);
  // };

  // const handelli = (d, id) => {
  //   switch (d) {
  //     case "Edit":
  //       handelEdit(id);
  //       break;
  //     case "View":
  //       handelView(id);
  //       break;
  //     case "Delete":
  //       handelDelete(id);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form />
      </div>
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
        {/* <DropDownMenu data={menu} onSubmitLi={handelli} id={2} /> */}
      </div>
      <Table Columns={Columns} data={filterByDate} />
    </div>
  );
};

export default Home;
