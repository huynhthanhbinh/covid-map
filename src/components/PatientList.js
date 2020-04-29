import React, { useEffect, useState } from "react";
import * as comparator from "../comparator";

import "./PatientList.css";

let valuesortnumber = null;

const PatientList = ({ onPatientButtonClicked, Seekbarsort }) => {
  const [patients, setPatients] = useState([]);

  function checkvalueSeekbar(list, Seekbarsort) {
    let finishresult = new Array();

    if (Seekbarsort === undefined) {
    } else {
      list.map((item, index) => {
        let tmp = item.verifyDate.substring(0, 10);

        if (tmp <= Seekbarsort) {
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
        (error) => {}
      );
  }, []);

  const sortedPatients = patients.sort(comparator.PatientComparator);

  const finalSortedPatients = checkvalueSeekbar(sortedPatients, Seekbarsort);

  const PatientOrderedList = () => (
    <div>
      <h4> Danh sách các bệnh nhận sort Desc </h4>
      <div className="ScrollView">
        <ul>
          {finalSortedPatients.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onPatientButtonClicked(item);
              }}
            >
              <h5 color="red">Tên: {item.name}</h5>
              <div>Thời Gian: {item.verifyDate}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return <PatientOrderedList />;
};

export default PatientList;
