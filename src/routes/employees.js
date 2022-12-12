
const express = require("express");
const router = express.Router();

const createEmployee = require("../controllers/createEmployee")
const fetchEmployee = require("../controllers/fetchEmployee");
const fetchEmployees = require("../controllers/fetchEmployees");

router.get("/", fetchEmployees);
router.post("/", createEmployee)
router.get("/:id", fetchEmployee);


module.exports = router;