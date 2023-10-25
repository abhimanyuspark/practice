import React, { useState } from "react";
// import Table from "../../components/table/table";
// import Form from "../../components/Form/Form";
// import { Columns } from "../../components/table/column";
// import { makeData } from "../../data/makeData";
import DropDown from "../../components/DropDown/DropDown";
// import Country from "../../components/DropDown/Country"
// import Accordians from '../../components/accordians/accordians'

const Home = () => {
  // const [data] = useState(() => makeData(100));
  // const [globalFilter, setGlobalFilter] = useState("");

  // const filter = data.filter((item)=>{
  //   return item.firstName.toLowerCase().includes(globalFilter.toLowerCase())
  // })

  // console.log(data)
  // console.log(filter)

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center"}}><DropDown /></div>
      {/* <div className="flex" style={{ justifyContent: "center" }}>
        <input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search name here..."
        />
      </div> */}
      {/* <Table Columns={Columns} data={filter} /> */}
      {/* <Accordians /> */}
      {/* <Form /> */}
    </div>
  );
};

export default Home;
