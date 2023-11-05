import React from "react";
import DropDownListComponent from "../Custom/DropDownList/DropDownList";
import { makeData } from "../../data/makeData";
// import * as data from "./source.json";

const Employee = ({ onItemSelected, value }) => {
  const data = makeData(20);

  // const fields = { text: "name" };
  const fields = { text: (d) => d.name };

  //Todo const temp = "empList";
  // define the JSON of data
  //Todo const employeesData = data[temp];

  // maps the appropriate column to fields property
  // const fields = { text: (i)=> i.dis.job };

  //set the value to item template
  const itemTemplate = (data) => {
    return (
      <div className="flex gap-1">
        <img
          loading="lazy"
          className="avatar"
          src={data.profile}
          alt="employee"
        />
        <div className="ename">
          <p>{data.name}</p>
          <p>{data.discription.jobTitle}</p>
        </div>
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
        <img
          loading="lazy"
          className="avatar"
          src={data.profile}
          alt="employee"
        />
        <div className="ename">
          <p>{data.name}</p>
        </div>
      </div>
    );
  };

  // const valueNoData = () => {
  //   return <div>No record selected</div>;
  // };

  // const noData = () => {
  //   return <span>No data</span>;
  // };

  const defaultSelectedItems = [data[2], data[3]];
  // const defaultSelectedItems = data[2];

  return (
    <div>
      <DropDownListComponent
        data={data}
        fields={fields}
        isMulti={true}
        // defaultValue={defaultValue}
        // defaultValue={defaultSelectedItems}
        value={value}
        templetItem={itemTemplate}
        templeteValue={valueTemplate}
        // templetItemNodata={itemNoDataTemplete}
        sorting={true}
        search={true}
        onItemSelected={onItemSelected}
        maxWidth={"300px"}
        maxHeight={"200px"}
        // enableNoDataRow={true}
        // templetNoRecord={noData}
        // templetValueNodata={valueNoData}
      />
    </div>
  );
};

export default Employee;
