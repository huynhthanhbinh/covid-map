import React, { useEffect, useState } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

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

  function checkvalueSeekbar(arr, Seekbarsort) {
    // var dateTMP = new Date("2020-04-12T00:00:00");

    let finishresult = [];

    if (Seekbarsort === undefined) {
    } else {
      arr.map((item, index) => {
        // item.verifyDate>"2020-04-12T00:00:00"
        let a = item.verifyDate.substring(0, 10);

        if (a < Seekbarsort) {
          return finishresult.push(item);
        }
        return 0;
      });
    }
    return finishresult;
  }

  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
      .then((res) => res.json())
      .then(
        (result) => {
          setPatients(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      );
  }, []);

  const finalSortedPatients = checkvalueSeekbar(patients, Seekbarsort);

  const MyMapComponent = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDY_ENrX2jDL1HwXSNgEMUE-NcqDw2o90M&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%`, minHeight: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: curLat, lng: curLng }}>
      {finalSortedPatients.map((patient, index) => (
        <Marker
          key={index}
          position={{ lat: patient.lat, lng: patient.lng }}
          onClick={() => {
            onPatientMarkerClicked(patient);
          }}
        >
        </Marker>
      ))}
    </GoogleMap>
  ));

  return <MyMapComponent />;
};
export default CovidMap;
