import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Line } from "react-chartjs-2";

const axios = require("axios").default;

const VietnamChart = ({ chartName }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get("https://td.fpt.ai/corona/corona-chart-vn.json")
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});
  }, []);

  const PatientChart = () => (
    <Container className="justify-content-center">
      <h3 style={{ textAlign: "center" }}>{chartName}</h3>
      <Row className="justify-content-center">
        <Line
          data={{
            labels: Object.keys(patients).map((key) => key),
            datasets: [
              {
                data: Object.keys(patients).map((key) => patients[key][0]),
                label: "Total cases",
                borderColor: "blue",
                fill: true,
              },
              {
                data: Object.keys(patients).map((key) => patients[key][1]),
                label: "Doubt",
                borderColor: "red",
                fill: true,
              },
              {
                data: Object.keys(patients).map((key) => patients[key][2]),
                label: "Recovered",
                borderColor: "green",
                fill: true,
              },
            ],
          }}
        />
      </Row>
    </Container>
  );

  return <PatientChart />;
};

export default VietnamChart;
