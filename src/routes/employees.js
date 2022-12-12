
const express = require("express");
const router = express.Router();

const createEmployee = require("../controllers/createEmployee");
const deleteEmployee = require("../controllers/deleteEmployee");
const fetchEmployee = require("../controllers/fetchEmployee");
const fetchEmployees = require("../controllers/fetchEmployees");
const updateEmployee = require("../controllers/updateEmployee");

router.get("/", fetchEmployees);
router.post("/", createEmployee)
router.get("/:id", fetchEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);



module.exports = router;