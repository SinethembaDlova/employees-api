const Employee = require("../schemas/employees");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await Employee.deleteOne({ _id: id });
    if (deletedEmployee.deletedCount > 0) {
        res.status(200).json({ messege: "Employee successfully deleted" });
      } else {
        res.status(204).json({ message: "No employee with ID was found" });
      }
  } catch (error) {
    res.status(400).json({ error });
  }
};