import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import "./CovidMap.css";

const CovidMap = ({
  onPatientMarkerClicked,
  onLocationButtonClick,
  Seekbarsort,
}) => {
  let curLat;
  let curLng;

  if (onLocationButtonClick === undefined) {
    curLat = 10.762913;
    curLng = 106.6799884;
  } else {
    curLat = onLocationButtonClick.lat;
    curLng = onLocationButtonClick.lng;
  }

  const checkvalueSeekbar = (arr, Seekbarsort) => {
    let finishresult = [];
    if (Seekbarsort === undefined) {
    } else {
      arr.map((item, index) => {
        const a = item.verifyDate.substring(0, 10);

        if (a < Seekbarsort) {
          return finishresult.push(item);
        }
        return 0;
      });
    }
    return finishresult;
  };

  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
      .then((res) => res.json())
      .then(
        (result) => {
          setPatients(result.data);
        },
        (error) => {}
      );
  }, []);

  const finalSortedPatients = checkvalueSeekbar(patients, Seekbarsort);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDY_ENrX2jDL1HwXSNgEMUE-NcqDw2o90M">
      <GoogleMap
        mapContainerClassName="covid-map"
        center={{ lat: curLat, lng: curLng }}
        zoom={16}
      >
        {finalSortedPatients.map((patient, index) => (
          <Marker
            key={index}
            position={{ lat: patient.lat, lng: patient.lng }}
            onClick={() => onPatientMarkerClicked(patient)}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
export default CovidMap;
