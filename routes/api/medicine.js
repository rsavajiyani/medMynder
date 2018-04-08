const router = require("express").Router();
const medicineController = require("../../controllers/medicineController");


// Matches with "/api/medicine/
router.route("/:userId")
  .post(medicineController.create)

router.route("/:id")
  .post(medicineController.create)
  .put(medicineController.update)
  .delete(medicineController.remove);

module.exports = router;
