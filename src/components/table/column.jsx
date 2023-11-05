import DropDownMenu from "../Custom/DropDownMenu/DropDownMenu";
import IndeterminateCheckbox from "./checkbox";
import { Edit, View, Delete } from "./Function";

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
    cell: (info) => info.getValue().toLocaleDateString(),
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
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const value = info.getValue();
      const style = {
        color: value.color,
      };
      return (
        <span style={style} key={value.id}>
          {value.name}
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
    accessorKey: "progress",
    header: "Profile Progress",
    sortDescFirst: false,
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
