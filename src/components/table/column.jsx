import DropDownMenu from "../Custom/DropDownMenu/DropDownMenu";
import IndeterminateCheckbox from "./checkbox";

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
    // footer: (props) => props.column.id,
  },
  {
    accessorKey: "date",
    header: () => <span>Date</span>,
    cell: (info) => info.getValue().toLocaleDateString(),
    sortDescFirst: false,
    // footer: (props) => props.column.id,
  },
  {
    accessorKey: "age",
    header: () => "Age",
    sortDescFirst: false,
    // footer: (props) => props.column.id,
  },
  {
    accessorKey: "visits",
    sortDescFirst: false,
    header: () => <span>Visits</span>,
    // footer: (props) => props.column.id,
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
    // footer: (props) => props.column.id,
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
    sortDescFirst: false,
    // footer: (props) => props.column.id,
  },
  {
    accessorKey: "id",
    enableSorting: false,
    header: () => "Actions",
    cell: (info) => {
      const handelEdit = (id) => {
        // console.log("Edit:", id);
        alert(`Edit: ${id}`);
      };
      const handelView = (id) => {
        // console.log("View:", id);
        alert(`View: ${id}`);
      };
      const handelDelete = (id) => {
        // console.log("Delete:", id);
        alert(`Delete: ${id}`);
      };

      const handelli = (d, id) => {
        switch (d) {
          case "Edit":
            handelEdit(id);
            break;
          case "View":
            handelView(id);
            break;
          case "Delete":
            handelDelete(id);
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
