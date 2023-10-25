import IndeterminateCheckbox from "./checkbox";

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
    accessorKey: "firstName",
    header:()=> "FirstName",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "age",
    header: () => "Age",
    sortDescFirst: false,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "visits",
    sortDescFirst: false,
    header: () => <span>Visits</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "status",
    header: "Status",
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
    sortDescFirst: false,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "id",
    enableSorting: false,
    header: () => "Actions",
    cell: (info) => (
      <select
        onChange={() => {
          console.log(info.getValue());
        }}
      >
        <option value="View">View</option>
        <option value="Edit">Edit</option>
        <option value="Delete">Delete</option>
      </select>
    ),
  },
];
