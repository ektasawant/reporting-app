import React from "react";
import { Typography } from "antd";
import { MetricsContainerProps } from "./types";

const { Title, Text } = Typography;

const metricsContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 64px",
};

const metricCardStyle: React.CSSProperties = {
  flex: 1,
  margin: "16px",
  padding: "16px",
  backgroundColor: "#F9FAFB",
  height: 150,
};

const titleStyle: React.CSSProperties = {
  marginTop: "16px",
};

const secondaryTextStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 400,
  color: "#475467",
  whiteSpace: "pre-wrap",
};

const MetricsCardContainer: React.FC<MetricsContainerProps> = ({ metrics }) => {
  return (
    <div className="metrics-container" style={metricsContainerStyle}>
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card" style={metricCardStyle}>
          <Title level={5} style={titleStyle}>
            {metric.value}
          </Title>
          <Text style={secondaryTextStyle}>{metric.description}</Text>
        </div>
      ))}
    </div>
  );
};

export default MetricsCardContainer;