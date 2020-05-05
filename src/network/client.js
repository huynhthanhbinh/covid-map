import * as comparator from './../components/comparator';

const axios = require("axios").default;
const MockAdapter = require("axios-mock-adapter");

let client = {};

client.getPatientData = async () => {
  let finalPatient = await axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://maps.vnpost.vn/apps/covid19/api/patientapi/list"
    )
    .then((result) => {
      return result.data.sort(comparator.PatientComparator);
    });
  return finalPatient;
};

module.exports = client;
