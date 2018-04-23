const router = require("express").Router();
const medicineRoutes = require("./medicine");
const patientRoutes = require ("./patient");
const loginRoutes = require("./login")


router.use("/medicine", medicineRoutes);
router.use("/patient", patientRoutes);
router.use("/login", loginRoutes);

module.exports = router;
