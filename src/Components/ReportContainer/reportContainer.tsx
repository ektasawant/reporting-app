import React from "react";
import { Typography } from "antd";
import { ReportContainerProps } from "./types";

const { Title, Text } = Typography;
const reportContainerStyle: React.CSSProperties = {
  padding: "0 32px",
};

const secondaryTextStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 400,
  color: "#475467",
  whiteSpace: "pre-wrap",
};

const titleStyle: React.CSSProperties = {
  marginTop: "16px",
};

const ReportContainer: React.FC<ReportContainerProps> = ({ title, subtitle, children }) => {
  return (
    <div className="report-container" style={reportContainerStyle}>
      <div className="report-title-container">
        <Title level={4} style={titleStyle}>
          {title}
        </Title>

        <Text style={secondaryTextStyle}>
          {subtitle}
        </Text>
      </div>
      {children}
    </div>
  );
};

export default ReportContainer;