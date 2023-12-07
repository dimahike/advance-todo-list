const express = require("express");

const router = express.Router();

router.use("/", require("../routes/root"));

module.exports = router;
