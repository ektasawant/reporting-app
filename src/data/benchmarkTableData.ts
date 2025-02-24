import type { TableProps } from "antd";

import { DataType } from "../Components/BenchmarkTable/types";

export const columns: TableProps<DataType>["columns"] = [

  {

    title: "Afvalsoort",

    dataIndex: "afvalsoort",

    key: "afvalsoort",

  },

  {

    title: "Beter",

    dataIndex: "beter",

    key: "beter",

  },

  {

    title: "Gemiddeld",

    dataIndex: "gemiddeld",

    key: "gemiddeld",

  },

  {

    title: "Onder",

    dataIndex: "onder",

    key: "onder",

  },

  {

    title: "Onbekend",

    dataIndex: "onbekend",

    key: "onbekend",

  },

];

 

export const data: DataType[] = [

  {

    key: "1",

    afvalsoort:

      "080111 - Afval van verf en lak dat organische oplosmiddelen of andere gevaarlijke stoffen bevat",

    beter: "91,5%",

    gemiddeld: "0%",

    onder: "0%",

    onbekend: "8.5%",

  },

 

  {

    key: "2",

    afvalsoort: "080314 - Inktslib dat gevaarlijke stoffen bevat",

    beter: "100%",

    gemiddeld: "0%",

    onder: "0%",

    onbekend: "0%",

  },

];

 