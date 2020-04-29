import React from "react";

import "./LocationInfo.css";

const LocationInfo = ({ patients }) => {
  return (
    <ul>
      <li>Name: {patients.name}</li>
      <li>Address: {patients.address}</li>
      <li>Note: {patients.note}</li>
      <li>Verify Date: {patients.verifyDate}</li>
    </ul>
  );
};

export default LocationInfo;
