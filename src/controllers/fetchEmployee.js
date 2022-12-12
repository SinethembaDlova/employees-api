const Employee = require("../schemas/employees");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (employee.length > 0) {
        res.status(200).json({ data: [employee] });
      } else {
        res.status(204).json({ data: [] });
      }
  } catch (error) {
    res.status(400).json({ error });
  }
};