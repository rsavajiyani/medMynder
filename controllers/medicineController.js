const db = require("../models");
const scheduler = require("./scheduler.js");

module.exports = {
  
  // findAll: function (req, res) {
  //   db.Medicine
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function (req, res) {
  //   db.Medicine
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }, //don't need right now, but will keep just in case

  create: function(req, res) {
    console.log("req.body", req.body);
    db.Patient.findById(req.body.patient) //grab patient
      .then(patient => {
        console.log("patient found in medicineController create", patient);
        db.Medicine.create(req.body) //then create medicine
          .then(medicine => {
            // console.log("patinet", patient);
            const userNumber = "+1" + patient.phone.toString();
            const userName = patient.first;
            console.log("medicine that was just created", medicine);
            patient.medicines.push(medicine); //then push medicine object to medicines array in pt schema
            patient.save(); //then save patient
            const medName = medicine.medicine; //grabbing the medicine's name
            const indication = medicine.indication; //grabbing the medicine's indication
            const frequency = medicine.frequency; //grabbing the medicine's frequency
            console.log("frequency", frequency);
            const instructions = medicine.instructions; //grabbing the medicine's instructions
            // const medID = medicine._id;
            scheduler.scheduler(frequency, medName, instructions, userName, userNumber);
            res.json(medicine);
            
          })
          // .then(scheduler.scheduler(frequency, medName, instructions, userName, userNumber)) //calling the scheduler functionscheduler.scheduler(frequency,medName,instructions,userName,userNumber); //calling the scheduler function)
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Medicine.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Medicine.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
