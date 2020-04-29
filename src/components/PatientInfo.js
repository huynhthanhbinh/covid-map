import React, { useEffect, useState } from "react";

const PatientInfo = ({ patients }) => {
  return (
    <ul>
      <li>Name: {patients.name}</li>
      <li>Address: {patients.address}</li>
      <li>Note: {patients.note}</li>
      <li>Verify Date: {patients.verifyDate}</li>
    </ul>
  );
};

export default PatientInfo;
