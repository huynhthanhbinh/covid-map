import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CovidMap from "./CovidMap";
import PatientList from "./PatientList";
import Container from "react-bootstrap/Container";
import PatientInfo from "./PatientInfo";
import DateSlider from "./../slider/DateSlider";

import "./Dashboard.css";

const Dashboard = (props) => {
  const [currentPatient, setCurrentPatient] = useState();
  const [currentPatientList, setCurrentPatientList] = useState();

  const onClickPatientMarker = (patient) => {
    setCurrentPatient(patient);
  };

  const onClickPatientButton = (patient) => {
    setCurrentPatient(patient);
  };

  const onClickSeekbar = (nvalue) => {
    setCurrentPatientList(nvalue);
  };

  return (
    <Container>
      <Row>
        <Col xs={2}>
          <PatientList
            onPatientButtonClicked={onClickPatientButton}
            Seekbarsort={currentPatientList}
          />
        </Col>
        <Col xs={7}>
          <CovidMap
            onPatientMarkerClicked={onClickPatientMarker}
            onLocationButtonClick={currentPatient}
            Seekbarsort={currentPatientList}
          />
        </Col>
        <Col xs={3}>
          <h5>Thông tin chi tiết bệnh nhân</h5>
          {currentPatient && <PatientInfo patients={currentPatient} />}
        </Col>
      </Row>

      <Row>
        <DateSlider onClickSeekbar={onClickSeekbar}/>
      </Row>
    </Container>
  );
};

export default Dashboard;
