const router = require("express").Router();
const medicineController = require("../../controllers/medicineController");


// Matches with "/api/medicine/
router.route("/")
  .post(medicineController.create); //when a patientID is passed in the route, we create the medicine

router.route("/:id")
  .put(medicineController.update)
  .delete(medicineController.remove);

module.exports = router;
