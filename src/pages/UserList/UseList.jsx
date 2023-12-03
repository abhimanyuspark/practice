import React from "react";
import Table from "../../components/table/table";
import { Columns } from "../../components/table/column";
import { FlexDiv } from "../../style/Export/Export";

const UseList = ({ loading, filterByDate, globalFilter, setGlobalFilter }) => {
  return (
    <FlexDiv $direction>
      <Table
        loading={loading}
        Columns={Columns}
        data={filterByDate}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </FlexDiv>
  );
};

export default UseList;
