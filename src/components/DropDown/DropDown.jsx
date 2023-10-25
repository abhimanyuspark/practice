import React, { useState } from "react";
// import './templates.css';
// import * as data from "./source.json";
import DropDownListComponent from "./DropDownList";
import { makeData } from "../../data/makeData";

const DropDown = () => {
  //Todo const temp = "empList";
  // define the JSON of data
  //Todo const employeesData = data[temp];

  const [data] = useState(makeData(20));

  // maps the appropriate column to fields property
  // const fields = { text: (i)=> i.dis.job };
  const fields = { text: "name" };

  const [person, setPerson] = useState({
    name: "Abhimanyu",
    profile: "Image",
    employee: "",
  });

  //set the value to item template
  const itemTemplate = (data) => {
    return (
      <div className="flex gap-1">
        <img className="avatar" src={data.profile} alt="employee" />
        <div className="ename"> {data.name} </div>
      </div>
    );
  };

  // const itemNoDataTemplete = ()=>{
  //   return(
  //     <div style={{padding: "6px"}}>
  //       No data
  //     </div>
  //   )
  // }

  const valueTemplate = (data) => {
    return (
      <div className="flex gap-1">
        <img className="avatar" src={data.profile} alt="employee" />
        <div className="name"> {data.name} </div>
      </div>
    );
  };

  // const valueNoData = () => {
  //   return <div>No record selected</div>;
  // };

  // const noData = () => {
  //   return <span>No data</span>;
  // };

  const handelSelected = (d) => {
    // console.log(d)
    setPerson((prevPerson) => ({
      ...prevPerson,
      employee: d,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);
  };

  // const defaultSelectedItems = [data[2],data[3]];
  const defaultSelectedItems = data[2];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <DropDownListComponent
          data={data}
          fields={fields}
          isMulti={true}
          // defaultValue={defaultSelectedItems}
          // templetItem={itemTemplate}
          // templeteValue={valueTemplate}
          // templetItemNodata={itemNoDataTemplete}
          sorting={true}
          search={true}
          onItemSelected={handelSelected}
          maxWidth={"300px"}
          maxHeight={"200px"}
          // enableNoDataRow={true}
          // templetNoRecord={noData}
          // templetValueNodata={valueNoData}
        />
        <button>submit</button>
      </div>
    </form>
  );
};



export default DropDown
