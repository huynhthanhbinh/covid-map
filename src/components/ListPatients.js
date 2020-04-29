import React, { useEffect, useState } from "react";

import { compose, withProps } from "recompose";
import PatientInfo from "./PatientInfo";
import Pagination from "./Pagination";

const axios = require("axios").default;

var valuesortnumber = null;

const PatientList = ({ onPatientButtonClicked, Seekbarsort }) => {
  const [patients, setPatients] = useState([]);

  function checkvalueSeekbar(arr, Seekbarsort) {
    var dateTMP = new Date("2020-04-12T00:00:00");

    let finishresult = new Array();

    if (Seekbarsort === undefined) {
    } else {
      arr.map((item, index) => {
        // item.verifyDate>"2020-04-12T00:00:00"
        let a = item.verifyDate.substring(0, 10);

        if (a <= Seekbarsort) {
          finishresult.push(item);
        }
      });
    }
    return finishresult;
  }

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

  const sortedPatients = patients
    .sort((a, b) => {
      var dateA = new Date(a.verifyDate);
      var dateB = new Date(b.verifyDate);
      return dateA - dateB;
    })
    .reverse();

  const finalSortedPatients = checkvalueSeekbar(sortedPatients, Seekbarsort);

  const PatientOrderedList = () => (
    <div>
      <h4> {valuesortnumber} Danh sách các bệnh nhận sort Desc </h4>
      <div className="ScrollView">
        <ul>
          {finalSortedPatients.map((item, index) => (
            <li key={index}>
              <h5 color="red">Tên: {item.name}</h5>
              <div>Thời Gian: {item.verifyDate}</div>

              <button
                onClick={() => {
                  onPatientButtonClicked(item);
                }}
              >
                Xem Vị Trí
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return <PatientOrderedList />;
};

export default PatientList;
