const Employee = require("../schemas/employees");

module.exports = async (req, res) => {
  try {
    const employees = await Employee.find();
    if (employees.length > 0) {
      res.status(200).json({ data: employees });
    } else {
      res.status(204).json({ data: [] });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};