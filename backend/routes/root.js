const express = require("express");

const {getTodoListHandler} = require("../controllers/root")

const router = express.Router();

router.get("/", getTodoListHandler);

module.exports = router;