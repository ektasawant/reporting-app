import React from "react";

import { Typography } from "antd";

import { Card } from "antd";

import BenchmarkTable from "../../Components/BenchmarkTable/benchmarkTable";

import { columns, data } from "../../data/benchmarkTableData";

import ReportContainer from "../../Components/ReportContainer/reportContainer";

import MetricsCardContainer from "../../Components/MetricsCardContainer/metricsCardContainer";

import { metrics } from "../../data/metricsCardData";

 

const { Title, Text } = Typography;

 

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

 

const cardHeaderStyle: React.CSSProperties = {

  border: "none",

};

 

const normalTextStyle: React.CSSProperties = {

  fontSize: "14px",

  lineHeight: "22px",

  fontWeight: 400,

  color: "#475467",

  whiteSpace: "pre-wrap",

};

 

const CSRDReport = () => {

  return (
    <ReportContainer
      title="CSRD rapport"
      subtitle="Dit rapport biedt een uitgebreid overzicht van verschillende aspecten van afvalbeheer zoals gevraagd in het CSRD. Het omvat een gedetailleerd overzicht van de totale afvalcijfers, gebruikte verwerkingsmethodes, samenstelling van het afval, en de aanwezige materialen in het afval. Elk hoofdstuk biedt waardevolle inzichten in de omvang, verwerking en inhoud van afvalstromen, essentieel voor het optimaliseren van duurzaam afvalbeheer."
    >
      <div className="trend-card">
        <Card
          title={
            <div>
              <Title level={4} style={titleStyle}>
                1. Trends afvalproductie
              </Title>
              <Text style={secondaryTextStyle}>
                Sinds begin 2016 stijgt de afvalproductie van uw organisatie
                gemiddeld met 5,14% per jaar. Bovendien is er in Q4 2021 sinds
                vorig kwartaal een vermindering van 51,82% te zien in
                vergelijking met hetzelfde kwartaal vorig jaar.
              </Text>
            </div>
          }
          style={cardHeaderStyle}
        >
          <MetricsCardContainer metrics={metrics}/>
        </Card>
      </div>
      <div className="benchmark-card">
        <Card
          title={
            <div>
              <Title level={4} style={titleStyle}>
                2. Afvalverwerking in vergelijking met landelijke praktijken
              </Title>
              <Text style={secondaryTextStyle}>
                In de onderstaande tabel analyseren we de toegepaste
                verwerkingsmethoden per afvalsoort en vergelijken we deze met de
                meest gebruikte methoden op nationaal niveau. Hierbij
                categoriseren we elke verwerkingsmethode als beter, gelijk aan,
                of minder effectief dan de landelijke standaard. Indien de
                verwerkingsmethode onbekend is, wordt deze apart vermeld. Dit
                biedt inzicht in hoe onze verwerkingspraktijken zich verhouden
                tot de gangbare methoden en waar mogelijke verbeterpunten
                liggen.
              </Text>
            </div>
          }
          style={cardHeaderStyle}
        >
          <div className="benchmark-grid-container">
            <BenchmarkTable
              title="08 - Afval van bereiding, formulering, levering en gebruik (BFLG) van coatings (verf, lak en email), lijm, kit en drukinkt"
              columns={columns}
              data={data}
            />
          </div>
        </Card>
      </div>
      <div className="materialen-card">
        <Card
          title={
            <div>
              <Title level={4} style={titleStyle}>
                3. Materialen
              </Title>
            </div>
          }
          style={cardHeaderStyle}
        >
          <div className="materialen-card-container">
            <Text style={normalTextStyle}>
              De Rijksoverheid heeft plannen voor de transitie naar een
              circulaire economie geformuleerd in 5 transitieagenda's (TA's) die
              verschillende economische sectoren en ketens behelzen:1) Biomassa
              en Voedsel,2) Kunststof,3) Maakindustrie,4) Bouw,5)
              Consumptiegoederen.
              <br />
              <br />
              In vergelijking met 2019 zijn de afvalstromen in de TAs Biomassa &
              Voedsel en Consumptiegoederen licht gedaald, daarentegen zijn de
              TAs 'onbekend' en Bouw toegenomen. Hoewel de biomassa- en
              voedselsectoren klein lijken in vergelijking met de anderen,
              genereren ze aanzienlijke negatieve effecten op het gebied van
              landgebruik, broeikasgasemissies en degradatie van land en water.
            </Text>
          </div>
        </Card>
      </div>
    </ReportContainer>
  );

};

 

export default CSRDReport;