const router = require("express").Router();
const patientController = require("../../controllers/patientController");

// Matches with "/api/patient"
router.route("/")
  .get(patientController.findAll)
  .post(patientController.create)
 

// Matches with "/api/patient/:id"
router.route("/:id")
  .get(patientController.findById)
  .put(patientController.update)
  .delete(patientController.remove)

module.exports = router;
