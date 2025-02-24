import { Layout, Typography } from "antd";
import { ReportHeaderProps } from "./types";

const { Header } = Layout;
const { Title, Text } = Typography;

const headerStyle: React.CSSProperties = {
  color: "#1D2939",
  height: 138,
  paddingInline: 32,
  backgroundColor: "#FFFFFF",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "20px",
  lineHeight: "28px",
  fontWeight: 400,
  color: "#373F41",
};

const ReportHeader: React.FC<ReportHeaderProps> = ({ title, subtitle }) => (
  <Header style={headerStyle}>
    <Title level={2}>{title}</Title>
    <Text style={subtitleStyle}>
      {subtitle}
    </Text>
  </Header>
);

export default ReportHeader;