import { ProgressCircle } from "../../style/progressBars/ProgressBars";
import DropDownMenu from "../../components/Custom/DropDownMenu/DropDownMenu";
import Select from "../../components/Custom/Select/SelectDropDown";
import IndeterminateCheckbox from "../../components/table/checkbox";
import { useState } from "react";
import { useThemeProvider } from "../../hooks/useThemeProvider";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateUserStatus, deleteUser } from "../../Redux/ReduxApi/UserApi";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { tableMenu } from "../../data/all_menu";
import { deleteUserReducer } from "../../Redux/ReduxApi/UserAction";

export const Columns = [
  {
    id: "select",
    enableSorting: false,
    header: ({ table }) => {
      return (
        <IndeterminateCheckbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <IndeterminateCheckbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          indeterminate={row.getIsSomeSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      );
    },
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
    cell: (info) => {
      const { user } = useSelector((state) => state.auth);
      const value = info.getValue();
      return (
        <div style={{ width: "180px" }}>
          <p>{value}</p>
          <p style={{ color: "red", marginLeft: "0.4rem" }}>
            {user?.name === value && "its you"}
          </p>
        </div>
      );
    },
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
    cell: (info) => {
      const value = info.getValue();
      const [val, setVal] = useState(value);
      const dispatch = useDispatch();
      const [theme] = useThemeProvider();
      const { id, name } = info.row.original;

      const { user } = useSelector((state) => state.auth);
      const options = user?.statusMenu;

      const updateStatus = (status) => {
        setVal(status);
        toast.success(`${name} status is Update`, { position: "top-right" });
        dispatch(updateUserStatus({ id, status }));
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
        <span key={value.id}>
          <Select
            optionTemplate={optionTemplete}
            singleTemplate={optionTemplete}
            selectWidth="8em"
            optionsWidth="10em"
            options={options}
            value={val}
            fields={{ labelFn: (l) => l.name }}
            onChange={(o) => updateStatus(o)}
            theme={theme}
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
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const location = useLocation();
      const { name } = info.row.original;
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

      const Edit = (id) => {
        navigate(`/user/update/${id}`, { state: { from: location } });
      };
      const View = (id) => {
        navigate(`/user/details/${id}`, { state: { from: location } });
      };
      const Delete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: `You want to delete the ${id}!`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete!",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(deleteUser(id));
            dispatch(deleteUserReducer(id));
            toast.success(`${name} deleted successfull`, {
              position: "top-right",
            });
          }
        });
      };

      return (
        <DropDownMenu
          data={tableMenu}
          onSubmitLi={handelli}
          id={info.getValue()}
        />
      );
    },
  },
];
