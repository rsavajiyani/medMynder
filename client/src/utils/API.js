import axios from "axios";

export default {
  //we need this to load users data can connect to meds?
  getUser: function (id) {
    console.log("axios getUser hit, id that is passed in is:", id);
    return axios.get("/api/patient/" + id);
  },

  login: function(userObject) {
    console.log("axios login hit, username that is passed in is:", userObject)
    return axios.post("/api/login/", userObject)
    .then(patientInfo => { //patientInfo == dbModel, returned from user creation route
        console.log("patient info", patientInfo);
        var ptID = patientInfo.data._id;
        console.log("ptID", ptID);
        return ptID;
      });
  },
  // Gets all meds but we need this to get all meds
  // for a specific user?
  getMeds: function () {
    return axios.get("/api/medicine");
  },
  // Do we need this one?
  getMed: function (id) {
    return axios.get("/api/medicine/" + id);
  },
  // Deletes the medicine with the given id
  deleteMed: function (id) {
    console.log("deleteMed axios hit")
    return axios.delete("/api/medicine/" + id);
  },
  // Saves a medicine to the database
  saveMed: function (medData) {
    console.log("medData passed into saveMed", medData);
    return axios.post("/api/medicine/", medData);
  },
  //Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/patient", userData)
      .then(patientInfo => { //patientInfo == dbModel, returned from user creation route
        console.log("patient info", patientInfo);
        var ptID = patientInfo.data._id;
        console.log("ptID", ptID);
        return ptID;
      });
  },
  //auth the user when logging in
  authUser: function (userData) {
    return axios.post("/login", userData)
      .then(patientInfo => { //patientInfo == dbModel, returned from user creation route
        console.log("patient info", patientInfo);
      });
  }


};