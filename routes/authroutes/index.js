const router = require("express").Router();
const authroutes = require("./routes");

router.use("/login", authroutes);

module.exports = router;