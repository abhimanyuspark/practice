import React, { useState, useMemo, useReducer } from "react";
import IndeterminateCheckbox from "./checkbox";
import T from "./table.module.css";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import SortingIcons from "./SortingIcons";

function Table({ Columns, data }) {
  // const rerender = useReducer(() => ({}), {})[1];
  const [rowSelection, setRowSelection] = useState({});
  const columns = useMemo(() => Columns, []);
  // const refreshData = () => setData(() => makeData(100));
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      sorting,
    },
    onSortingChange: setSorting,
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className="p-2 table-container">
      <table className={T.table}>
        <thead className={T.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={T.tr} key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th className={T.th} key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={T.different}
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <SortingIcons header={header} />
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className={T.tbody}>
          {table.getRowModel().rows.map((row) => {
            const isSelected = row.getIsSelected(row.id);
            return (
              <tr
                key={row.id}
                className={`${isSelected ? `${T.selectedrow}` : ""} ${T.tr}`}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td className={T.td} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot className={T.tfoot}>
          <tr>
            <td className="p-1">
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllPageRowsSelected(),
                  indeterminate: table.getIsSomePageRowsSelected(),
                  onChange: table.getToggleAllPageRowsSelectedHandler(),
                }}
              />
            </td>
            <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td>
          </tr>
        </tfoot>
      </table>
      <div className="flex gap-1">
        <button
          className="button ac-l"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="button ac-l"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="button ac-r"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="button ac-r"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <div>
          {Object.keys(rowSelection).length} of{" "}
          {table.getPreFilteredRowModel().rows.length} Total Rows Selected
        </div>
      </div>
    </div>
  );
}

export default Table;
