# Tanstack React Table

**This is filter component in table head.**

```javascript
<th key={header.id} colSpan={header.colSpan}>
  {header.isPlaceholder ? null : (
    <>
      {flexRender(header.column.columnDef.header, header.getContext())}
      {header.column.getCanFilter() ? (
        <div>
          <Filter column={header.column} table={table} />
        </div>
      ) : null}
    </>
  )}
</th>
```

> [!NOTE]
> I created this Filter component outside.

**This is for filter the data in tanstack React table in react.js.**

```javascript
function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);
  ``;
  return typeof firstValue === "number" ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={column.getFilterValue()?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={column.getFilterValue()?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={column.getFilterValue() ?? ""}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 border shadow rounded"
    />
  );
}
```

**This code is for for showing some extra function in Tanstack React table.**

```javascript
      <div>
        <button className="border rounded p-2 mb-2" onClick={() => rerender()}>
          Force Rerender
        </button>
      </div>
      <div>
        <button
          className="border rounded p-2 mb-2"
          onClick={() => refreshData()}
        >
          Refresh Data
        </button>
      </div>
      <div>
        <button
          className="border rounded p-2 mb-2"
          onClick={() => console.info("rowSelection", rowSelection)}
        >
          Log `rowSelection` state
        </button>
      </div>
      <div>
        <button
          className="border rounded p-2 mb-2"
          onClick={() =>
            console.info(
              "table.getSelectedRowModel().flatRows",
              table.getSelectedRowModel().flatRows
            )
          }
        >
          Log table.getSelectedRowModel().flatRows
        </button>
      </div>
```
