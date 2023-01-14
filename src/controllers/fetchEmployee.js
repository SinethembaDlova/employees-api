const Employee = require("../schemas/employees");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findOne({ _id: id });
    if (employee) {
        res.status(200).json( employee );
      } else {
        res.status(204).json({ message: 'No employee with the specified id.' });
      }
  } catch (error) {
    res.status(400).json({ error });
  }
};