
const express = require("express");
const router = express.Router();

const fetchEmployees = require("../controllers/fetchEmployees");

router.get("/", fetchEmployees);

module.exports = router;