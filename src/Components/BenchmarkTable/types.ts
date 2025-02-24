import { TableProps } from "antd";

export type DataType = {
    key: string;
    afvalsoort: string;
    beter: string;
    gemiddeld: string;
    onder: string;
    onbekend: string;

}

/**
* Properties for the BenchmarkTable component.
*/

export type BenchmarkTableProps = {
    /**
     * label for the title
     */
    title: string;
    /**
     * column details
     */
    columns: TableProps<DataType>["columns"];
    /**
     * data details
     */
    data: DataType[];
};