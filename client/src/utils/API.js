import axios from "axios";

export default {
  //we need this to load users data can connect to meds?
  getUser: function (id) {
    return axios.get("/api/users" + id);
  },
  // Gets all meds but we need this to get all meds
  // for a specific user?
  getMeds: function() {
    return axios.get("/api/meds");
  },
  // Do we need this one?
  getMed: function(id) {
    return axios.get("/api/meds/" + id);
  },
  // Deletes the medicine with the given id
  deleteMed: function(id) {
    return axios.delete("/api/meds/" + id);
  },
  // Saves a medicine to the database
  saveMed: function(medData) {
    return axios.post("/api/meds", medData);
  },
  //Saves a user to the database
  saveUser: function(userData){
    return axios.post("/api/users", userData);
  },
  

};
