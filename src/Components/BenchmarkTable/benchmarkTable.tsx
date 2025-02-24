import { Table } from "antd";
import React from "react";
import { BenchmarkTableProps, DataType } from "./types";

const tableTitleStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  height: "38px",
  backgroundColor: "#F2F4F7",
};

const coloredBoxStyle: React.CSSProperties = {
  width: "16px",
  height: "16px",
  backgroundColor: "green",
  marginRight: "5px",
};

/**

* Table component for the benchmark table.

* @param title - label for the title

* @param columns - column details

* @param data - data details

*/

const BenchmarkTable: React.FC<BenchmarkTableProps> = ({ title, columns, data }) => {
  return (
    <>
      <div className="title-with-box" style={tableTitleStyle}>
        <div className="green-box" style={coloredBoxStyle}></div>
        {title}
      </div>
      <Table<DataType> columns={columns} dataSource={data} pagination={{ hideOnSinglePage: true }} />
    </>
  );

};

export default BenchmarkTable;