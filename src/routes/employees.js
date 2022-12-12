
const express = require("express");
const router = express.Router();

const createEmployee = require("../controllers/createEmployee");
const deleteEmployee = require("../controllers/deleteEmployee");
const fetchEmployee = require("../controllers/fetchEmployee");
const fetchEmployees = require("../controllers/fetchEmployees");

router.get("/", fetchEmployees);
router.post("/", createEmployee)
router.get("/:id", fetchEmployee);
router.delete("/:id", deleteEmployee);



module.exports = router;