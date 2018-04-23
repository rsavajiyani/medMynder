const router = require("express").Router();
const patientController = require("../../controllers/patientController");

// Matches with "/api/login"
router
  .route("/")
  .post(patientController.findByUsername)
  .post(patientController.create);

// Matches with "/api/login/:id"
router
  .route("/:id")
  .get(patientController.findByUsername)
  .put(patientController.update)
  .delete(patientController.remove);

module.exports = router;
