import React, { useState, useMemo } from "react";
import IndeterminateCheckbox from "./checkbox";
import SortingIcons from "./SortingIcons";
import { Table1, Td1, Th1, Tr1, Container } from "../../style/Export/Export";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

function Table({
  Columns,
  data,
  setGlobalFilter,
  globalFilter,
  loading = false,
}) {
  const [rowSelection, setRowSelection] = useState({});
  const columns = useMemo(() => Columns, [Columns]);
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // debugTable: true,
  });

  const Loading = () => {
    return (
      <div className="table-loading">
        <div>loading...</div>
      </div>
    );
  };

  const columnSpan = useMemo(() => {
    return table.getHeaderGroups().map((d) => d.headers.length);
  }, []);

  return (
    <Container>
      <Table1>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr1 key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th1 key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                        className={
                          header.column.getCanSort() ? "different" : ""
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <SortingIcons header={header} />
                      </div>
                    )}
                  </Th1>
                );
              })}
            </Tr1>
          ))}
        </thead>
        <tbody>
          {loading ? (
            <Tr1>
              <td colSpan={columnSpan}>{Loading()}</td>
            </Tr1>
          ) : table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => {
              const isSelected = row.getIsSelected(row.id);
              return (
                <Tr1 key={row.id} className={isSelected ? "selectedrow" : ""}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td1 key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td1>
                    );
                  })}
                </Tr1>
              );
            })
          ) : (
            <Tr1 className="different">
              <Td1 className="no-data" colSpan={columnSpan}>
                No data Found
              </Td1>
            </Tr1>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ padding: "5px" }}>
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllPageRowsSelected(),
                  indeterminate: table.getIsSomePageRowsSelected(),
                  onChange: table.getToggleAllPageRowsSelectedHandler(),
                }}
              />
            </td>
            <td colSpan={columnSpan}>
              Page Rows ({table.getRowModel().rows.length})
            </td>
          </tr>
        </tfoot>
      </Table1>
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
    </Container>
  );
}

export default Table;
