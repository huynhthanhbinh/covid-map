const axios = require("axios").default;
const MockAdapter = require("axios-mock-adapter");

let client = {};

client.getPatientData = async () => {
  let finalPatient = await axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://maps.vnpost.vn/apps/covid19/api/patientapi/list"
    )
    .then((result) => {
      let data = result.data.data;
      data.sort((a, b) => {
        var dateA = new Date(a.verifyDate);
        var dateB = new Date(b.verifyDate);
        return dateA - dateB;
      });
      return data;
    });
  return finalPatient;
};

module.exports = client;
