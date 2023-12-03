import React from "react";
import Table from "../../components/table/table";
import { Columns } from "../../components/table/column";

const UseList = ({ loading, filterByDate, globalFilter, setGlobalFilter }) => {
  return (
    <Table
      loading={loading}
      Columns={Columns}
      data={filterByDate}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
    />
  );
};

export default UseList;
