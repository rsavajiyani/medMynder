const router = require("express").Router();
const medicineRoutes = require("./medicine");
const patientRoutes = require ("./patient");


router.use("/medicine", medicineRoutes);
router.use("/patient", patientRoutes);

module.exports = router;
