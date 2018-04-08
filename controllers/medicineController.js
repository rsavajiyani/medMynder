const db = require("../models");

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
  // },
   
  create: function (req, res) {
    console.log(req.body)
    db.Patient 
      .findById(req.params.userId) //grab patient
      .then(patient=> {
        console.log(patient);
        db.Medicine 
        .create(req.body) //then create medicine
        .then(medicine => {
          console.log(medicine);
          patient.medicines.push(medicine); //then push medicine object to medicines array in pt schema
          patient.save(); //then save patient
          res.json(medicine);
        })
        .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.Medicine
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Medicine
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};