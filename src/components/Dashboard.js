import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CovidMap from "./CovidMap";
import ListPatients from "./ListPatients";
import Container from "react-bootstrap/Container";
import PatientInfo from "./PatientInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import DateSlider from "./DateSlider";

const Dashboard = (props) => {
  const [currentPatient, setCurrentPatient] = useState();
  const [seekbarPatients, setSeekbarPatients] = useState();

  const patientMarkerClickedHandler = (patient) => {
    setCurrentPatient(patient);
  };

  const patientButtonClickedHandler = (patient) => {
    setCurrentPatient(patient);
  };

  const patientSeekbarClickedHandler = (event, newValue) => {
    console.log(newValue);
    setSeekbarPatients(newValue);
  };

  // get gia tri cua component con tra ve cha 
  const testseekbarvalue = (nvalue) => {
    setSeekbarPatients(nvalue);
  };

  return (
    <Container>
      <Row>
        <Col xs={2}>
          <ListPatients
            onPatientButtonClicked={patientButtonClickedHandler}
            Seekbarsort={seekbarPatients}
          />
        </Col>
        <Col xs={7}>
          <CovidMap
            onPatientMarkerClicked={patientMarkerClickedHandler}
            onLocationButtonClick={currentPatient}
            Seekbarsort={seekbarPatients}
          />
        </Col>
        <Col xs={3}>
          <h5>Thông tin chi tiết bệnh nhân</h5>
          {currentPatient && <PatientInfo patients={currentPatient} />}
        </Col>
      </Row>

      <Row>
        <DateSlider
          style="background-color:powderblue;"
          onClickSeekbar={testseekbarvalue}
        ></DateSlider>
      </Row>
    </Container>
  );
};

export default Dashboard;
