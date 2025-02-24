import { useEffect, useState } from "react";
import { Select, Typography } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import "./SelectReport.css";

const { Title } = Typography;
const selectStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 0,
  border: "none",
};

const titleStyle: React.CSSProperties = {
  marginTop: 0,
  color: "#152BEE",
};

const selectContainerStyle: React.CSSProperties = {
  padding: "32px",
  borderTop: "1px solid #EAECF0",
  backgroundColor: "#FFFFFF",
};

const SelectReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [defaultValue, setDefaultValue] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const path = location.pathname.substring(1);
    setDefaultValue(path || undefined);
  }, [location.pathname]);
 
  const handleChange = (value: string) => {
    navigate(`/${value}`);
  };

  return (
    <div style={selectContainerStyle}>
      <Title style={titleStyle} level={5}>
        Rapporttype
      </Title>
      <Select
        style={selectStyle}
        className="custom-select"
        placeholder={"Selecteer een rapporttype"}
        onChange={handleChange}
        size="large"
        value={defaultValue}
        options={[
          { value: "afval-report", label: "Afval Rapport" },
          { value: "benchmark-report", label: "Benchmark Rapportt" },
          { value: "csrd-report", label: "CSDR Rapport" },
        ]}
      />
    </div>
  );

};

export default SelectReport;