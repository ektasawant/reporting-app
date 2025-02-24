import { Flex, Layout, Typography, ConfigProvider } from "antd";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AfvalReport from "./Screens/afvalReport/afvalReport";

import BenchmarkReport from "./Screens/benchmarkReport/benchmarkReport";

import CSRDReport from "./Screens/csrdReport/csrdReport";

import HomePage from "./Screens/homePage/homePage";

import SelectReport from "./Components/SelectReport/selectReport";

import ReportHeader from "./Components/ReportHeader/reportHeader";



const { Content } = Layout;

const { Text } = Typography;



const layoutStyle: React.CSSProperties = {

  display: "flex",

  flexDirection: "column",

  minHeight: "calc(100vh - 160px)",

};



const textStyle: React.CSSProperties = {

  fontSize: "20px",

  lineHeight: "28px",

  fontWeight: 400,

  color: "#373F41",

};



function App() {

  return (

    <ConfigProvider

      theme={{

        token: {

          borderRadiusLG: 0,

        },

      }}

    >

      <Router>

        <Flex gap="middle" wrap>

          <Layout style={layoutStyle}>

            <ReportHeader

              title={"Bekijk rapport"}

              subtitle={

                <Text style={textStyle}>

                  Selecteer een rapport dat je wilt verkennen voor een dieper

                  inzicht in het afvalbeheer van uw organisatie.

                </Text>

              }

            />

            <Content>

              <SelectReport />

              <Routes>

                <Route path="/" element={<HomePage />} />

                <Route path="/afval-report" element={<AfvalReport />} />

                <Route path="/benchmark-report" element={<BenchmarkReport />} />

                <Route path="/csrd-report" element={<CSRDReport />} />

              </Routes>

            </Content>

          </Layout>

        </Flex>

      </Router>

    </ConfigProvider>

  );

}

export default App;