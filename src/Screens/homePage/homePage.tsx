import { Typography } from "antd";

const { Text } = Typography;

 

const emptyTextStyle: React.CSSProperties = {

  fontSize: "20px",

  lineHeight: "28px",

  fontWeight: 400,

  color: "#373F41",

  textAlign: "center",

  display: "flex",

  justifyContent: "center",

  alignItems: "center",

  flex: "1 1 0%",

  backgroundColor: "rgb(249, 250, 251)",

  minHeight: "calc(100vh - 275px - 160px)",

};

 

const HomePage = () => {

  return (

    <Text style={emptyTextStyle}>

      Er zijn momenteel geen rapporten geselecteerd. Kies een rapport om de

      details te bekijken.

    </Text>

  );

};

 

export default HomePage;