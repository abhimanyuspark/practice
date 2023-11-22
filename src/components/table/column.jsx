import { ProgressCircle } from "../../style/progressBars/ProgressBars";
import DropDownMenu from "../Custom/DropDownMenu/DropDownMenu";
import Select from "../Custom/Select/SelectDropDown";
import IndeterminateCheckbox from "./checkbox";
import { Edit, View, Delete } from "./Function";
import { useState } from "react";

const menu = [
  {
    name: "View",
    icon: <span className="material-symbols-outlined">visibility</span>,
  },
  {
    name: "Edit",
    icon: <span className="material-symbols-outlined">edit_square</span>,
  },
  {
    name: "Delete",
    icon: <span className="material-symbols-outlined">delete</span>,
  },
];

const options = [
  { id: 1, name: "Pending", color: "yellow" },
  { id: 2, name: "Inprocess", color: "#159afb" },
  { id: 3, name: "Complete", color: "#0cf90c" },
];

export const Columns = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  {
    accessorKey: "index",
    header: "Id",
    cell: (info) => {
      const index = info.row.index;
      // console.log(index);
      return <span>{index + 1}</span>;
    },
    enableSorting: true,
    sortingFn: (row1, row2) => {
      return row1.index > row2.index ? -1 : 1;
    },
    sortDescFirst: false,
    invertSorting: true,
  },
  {
    accessorKey: "profile",
    enableSorting: false,
    header: () => "Profile",
    cell: (info) => (
      <img src={info.getValue()} alt="profile" className="avatar" />
    ),
  },
  {
    accessorKey: "name",
    header: () => "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "date",
    header: () => <span>Date</span>,
    cell: (info) => {
      const value = info.getValue();
      const date = new Date(value);
      return <span>{date.toLocaleDateString()}</span>;
    },
    sortDescFirst: false,
  },
  {
    accessorKey: "age",
    header: () => "Age",
    sortDescFirst: false,
  },
  {
    accessorKey: "visits",
    sortDescFirst: false,
    header: () => <span>Visits</span>,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: (info) => {
      const value = info.getValue();
      return <ProgressCircle $value={value}>{value}%</ProgressCircle>;
    },
    sortDescFirst: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    // setFilterValue: (info) => info.name,
    cell: (info) => {
      const value = info.getValue();
      const [val, setVal] = useState(value);
      const style = {
        color: "black",
      };
      const optionTemplete = (o) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: o.color,
              }}
            ></span>
            <span>{o.name}</span>
          </div>
        );
      };
      return (
        <span style={style} key={value.id}>
          <Select
            optionTemplate={optionTemplete}
            singleTemplate={optionTemplete}
            selectWidth="9em"
            // optionsWidth="11em"
            options={options}
            value={val}
            fields={{ labelFn: (l) => l.name }}
            onChange={(o) => setVal(o)}
          />
        </span>
      );
    },
    sortingFn: (row1, row2, column) => {
      // console.log(
      //   row1.getValue(column).name,
      //   row2.getValue(column).name,
      //   column
      // );
      return row1.getValue(column).name > row2.getValue(column).name ? -1 : 1;
    },
    sortDescFirst: false,
    invertSorting: true,
  },
  {
    accessorKey: "id",
    enableSorting: false,
    header: () => "Actions",
    cell: (info) => {
      const handelli = (d, id) => {
        switch (d) {
          case "Edit":
            Edit(id);
            break;
          case "View":
            View(id);
            break;
          case "Delete":
            Delete(id);
            break;
          default:
            break;
        }
      };
      return (
        <DropDownMenu data={menu} onSubmitLi={handelli} id={info.getValue()} />
      );
    },
  },
];
