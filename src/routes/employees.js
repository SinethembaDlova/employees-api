
const express = require("express");
const router = express.Router();

const fetchEmployee = require("../controllers/fetchEmployee");
const fetchEmployees = require("../controllers/fetchEmployees");

router.get("/", fetchEmployees);
router.get(":id", fetchEmployee);


module.exports = router;