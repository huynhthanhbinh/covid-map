import React, { useEffect, useState } from "react";
import * as comparator from "../../comparator";

import "./LocationList.css";

const LocationList = ({ onPatientButtonClicked, Seekbarsort }) => {
  const [patientList, setPatientList] = useState([]);

  function checkvalueSeekbar(list, Seekbarsort) {
    let finishresult = [];

    if (Seekbarsort === undefined) {
    } else {
      list.map((item, index) => {
        let tmp = item.verifyDate.substring(0, 10);

        if (tmp <= Seekbarsort) {
          return finishresult.push(item);
        }
        return 0;
      });
    }
    return finishresult;
  }

  useEffect(() => {
    fetch("https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
      .then((res) => res.json())
      .then(
        (result) => {
          setPatientList(result.data);
        },
        (error) => {}
      );
  }, []);

  const sortedPatients = patientList.sort(comparator.PatientComparator);

  const finalSortedPatients = checkvalueSeekbar(sortedPatients, Seekbarsort);

  const PatientOrderedList = () => (
    <div>
      <h4>Location list</h4>
      <div className="ScrollView">
        <ul>
          {finalSortedPatients.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onPatientButtonClicked(item);
              }}
            >
              <h5>Name: {item.name}</h5>
              <div>Time: {item.verifyDate}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return <PatientOrderedList />;
};

export default LocationList;
