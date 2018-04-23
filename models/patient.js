const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  dob: {
    type: String,
  },
  gender: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  phone: {
    type: Number,
    required: true
  },
  // medhx: {
  //   type: String
  // },
  // surghx: {
  //   type: String
  // },
  // allergies: {
  //   type: String
  // }, will work on these after we finish our MVP
  medicines: [{
    type: Schema.Types.ObjectId, ref: 'Medicine'
  }]  
},{
  usePushEach: true
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;